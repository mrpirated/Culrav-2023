import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import getCommiteesAPI from "../../api/getCommiteesAPI";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import { setLoading } from "../../store/auth";

const AddEc = (props) => {
  const { commitee, commiteeEvents } = props;
  const [event, setEvent] = useState([]);
  const [selectedCommitee, setSelectedCommitee] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [progress, setProgress] = useState(false);
  const [ec, setec] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
console.log(commitee)
  const onCommiteeChange = (e) => {
	setSelectedCommitee(e.value)
	setEvent(commiteeEvents[e.value]);
	setSelectedEvent(0);
  };

  const onEventChange = async (e) => {
	setSelectedEvent(e.value);
  };

  const handleClick = async () => {
    
  };

  return (
    <>
      <div className="relative">
        <div
          className={`bg-light my-2 w-full rounded-md mx-1 box-border p-4 ${
            !progress ? "opacity-100" : "opacity-40"
          }`}
        >
          <div>
            <p className="text-2xl font-medium">Add EC</p>
          </div>
          <div className="mt-4">
            <label
              htmlFor="selectCommitee"
              className="block mb-2 font-medium text-black"
            >
              Select Commitee
            </label>
            <Select
              options={commitee}
              id="selectCommitee"
              className="w-full"
              onChange={onCommiteeChange}
              // value={subevent}
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="selectEvents"
              className="block mb-2 font-medium text-black"
            >
              Select Event
            </label>
            <Select
              options={event}
			  value={event[selectedEvent]}
              id="selectEvents"
              className="w-full"
              onChange={onEventChange}
              // value={selectedsubEvent}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="ecid" className="block mb-2 font-medium text-black">
              Enter Ec Culrav Id
            </label>
            <div className="flex flex-row">
              <input
                type="text"
                value="CUL - "
                disabled={true}
                className="w-[70px] rounded-lg p-2 focus:ring-red focus:border-red mr-2 bg-white"
              ></input>
              <input
                type="text"
                onChange={(e) => {
                  setec(e.target.value);
                }}
                value={ec}
                id="ecid"
                className="w-full  rounded-lg p-2 focus:ring-red focus:border-red"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              className="hover:shadow-md hover:bg-[#f43e4a] transition-all duration-100"
              onClick={handleClick}
            >
              Create Team
            </button>
          </div>
        </div>
        {progress && (
          <div
            className="absolute top-[50%] left-[50%]"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default AddEc;
