import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import Select from "react-select";
// import { User } from "../../../User/User";
import toast from "react-hot-toast";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { element } from "prop-types";
import { motion } from "framer-motion";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import Spinner from "./Spinner";
import editEventDetailsAPI from "../../api/editEventDetailsAPI";
import { useSelector } from "react-redux";

const Event = (props) => {
  const auth = useSelector((state) => state.auth);
  const [rules, setRules] = useState("");
  const [minsize, setMinsize] = useState("");
  const [maxsize, setMaxsize] = useState("");
  const [selectedoption, setselectedoption] = useState(null);
  const [description, setDescription] = useState("");
  const [options, setoptions] = useState([]);
  const [tagline, setTagline] = useState("");
  const [eventCoordinators, setEventCoordinators] = useState([1, 2]);
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);

  const getEventsData = async () => {
    const optionarray = [];
    const response = await getCommiteeEventsAPI({ commitee_id: 3 });
    console.log(response);
    await response.data.forEach((element) => {
      const object = {
        value: element.event_id,
        label: element.name,
      };
      optionarray.push(object);
    });
    setoptions(optionarray);
  };

  const onEventchange = async (event) => {
    setselectedoption(event.value);
    const response = await getCommiteeEventsAPI({ commitee_id: 3 });
    response.data.forEach((element) => {
      if (element.event_id == event.value) {
        setTagline(element.event_tagline ? element.event_tagline : "");
        setDescription(
          element.event_description ? element.event_description : ""
        );
        setMinsize(element.min_team_members ? element.min_team_members : "");
        setMaxsize(element.max_team_members ? element.max_team_members : "");
        setRules(element.rules ? element.rules : "");
      }
    });
  };

  const handleCheckBox = async () => {
    if (!checked) {
      setMaxsize(1);
      setMinsize(1);
      setToggle(true);
    } else {
      setMaxsize("");
      setMinsize("");
      setToggle(false);
    }
    setChecked(!checked);
  };

  const removeCoordinator = async () => {};

  const handleClickEditEvent = async () => {
    const object = {
      token: auth.token,
      event_id: selectedoption,
      event_description: description,
      event_tagline: tagline,
      min_team_members: minsize,
      max_team_members: maxsize,
      rules: rules,
    };
    const response = await editEventDetailsAPI(object);
    console.log(response);
    if (response.success) {
      toast.success(response.message);
    } else toast.error(response.message);
  };

  const handleClickAddMember = async () => {};

  const handleModal = async () => {
    setModal(!modal);
  };

  useEffect(() => {
    getEventsData();
  }, []);

  return (
    <>
      <div
        className={`bg-OccurYellow my-2 w-full rounded-md md:mx-2 p-4 h-[500px] md:h-[600px] overflow-auto`}
      >
        <div>
          <p className="text-2xl font-medium">Edit Event</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="selectEventEdit"
            className="block mb-2 font-medium text-black"
          >
            Select Event
          </label>
          <Select
            options={options}
            id="selectEventEdit"
            className="w-full"
            onChange={onEventchange}
            required
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="tagline"
            className="block mb-2 font-medium text-black"
          >
            Tagline
          </label>
          <textarea
            type="text"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
            value={tagline}
            id="tagline"
            className="w-full font-bold rounded-lg p-2 focus:ring-red focus:border-red"
            required
          ></textarea>
        </div>
        <div className="mt-4">
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-black"
          >
            Description
          </label>
          <textarea
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            id="description"
            className="w-full h-[200px] md:h-[100px]  rounded-lg p-2 focus:ring-red focus:border-red"
            required
          ></textarea>
        </div>
        <div className="mt-4">
          <label
            htmlFor="TeamSize"
            className="block mb-2 font-medium text-black"
          >
            Team Size
          </label>
          <div className="flex flex-col md:flex-row w-full ">
            <input
              type="Number"
              onChange={(e) => {
                setMinsize(e.target.value);
              }}
              value={minsize}
              id="TeamSizemin"
              placeholder="Min Team Size"
              className="w-full md:w-1/2 md:mr-2 rounded-lg p-2 focus:ring-red focus:border-red"
              required
              disabled={toggle}
            ></input>
            <input
              type="Number"
              onChange={(e) => {
                setMaxsize(e.target.value);
              }}
              value={maxsize}
              id="TeamSizemax"
              placeholder="Max Team Size"
              className="w-full md:w-1/2  rounded-lg p-2 mt-2 md:ml-2 md:mt-0 focus:ring-red focus:border-red"
              required
              disabled={toggle}
            ></input>
          </div>
          <div className="flex flex-row items-center mt-2">
            <label htmlFor="solo" className="block font-medium text-black mr-2">
              Solo Participation
            </label>
            <input
              type="checkbox"
              id="solo"
              class="w-4 h-4 rounded"
              onChange={handleCheckBox}
              checked={checked}
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="rules" className="block mb-2 font-medium text-black">
            Rules
          </label>
          <textarea
            type="text"
            onChange={(e) => {
              setRules(e.target.value);
            }}
            value={rules}
            id="rules"
            className="w-full h-[300px] md:h-[200px] rounded-lg p-2 focus:ring-red focus:border-red"
            required
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            className="hover:shadow-md bg-lightYellow hover:bg-[#f7e3a1] shadow-md transition-all duration-100 text-black"
            onClick={handleClickEditEvent}
          >
            Edit Event
          </button>
        </div>
      </div>
    </>
  );
};

export default Event;
