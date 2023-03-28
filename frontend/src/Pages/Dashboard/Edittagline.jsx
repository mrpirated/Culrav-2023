import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import { User } from "../../User/User";
import { toast } from "react-toastify";

const EditTeamSize = () => {
  const { user } = User();
  const [minsize, setMinsize] = useState("");
  const [maxsize, setMaxsize] = useState("");
  const [selectedoption, setselectedoption] = useState(null);
  const [description, setDescription] = useState("");
  const [options, setoptions] = useState([]);
  const [tagline, setTagline] = useState("");

  const getEventData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_COMMITEE}?commitee_id=3`
    );

    console.log(response);
    const optionarray = [];
    await response.data.data.forEach((element) => {
      const object = {
        value: element.commitee_id,
        label: element.name,
      };
      optionarray.push(object);
    });
    setoptions(optionarray);
  };

  const onEventchange = async (event) => {
    setselectedoption(event.value);
  };

  const handleClick = async () => {};

  useEffect(() => {
    getEventData();
  }, []);
  return (
    <>
      <div className="bg-light my-2 w-full rounded-md mx-1 box-border p-4">
        <div>
          <p className="text-2xl font-medium">Edit Event</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="selectEvent"
            className="block mb-2 font-medium text-black"
          >
            Select Event
          </label>
          <Select
            options={options}
            id="selectEvent"
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
            className="w-full h-[70px]  rounded-lg p-2 focus:ring-red focus:border-red"
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
            id="descripton"
            className="w-full h-[100px]  rounded-lg p-2 focus:ring-red focus:border-red"
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
          <div className="flex flex-row ">
            <input
              type="Number"
              onChange={(e) => {
                setTagline(e.target.value);
              }}
              value={minsize}
              id="TeamSizemin"
              placeholder="Min Team Size"
              className="w-full rounded-lg p-2 focus:ring-red focus:border-red"
              required
            ></input>
            <input
              type="Number"
              onChange={(e) => {
                setTagline(e.target.value);
              }}
              value={maxsize}
              id="TeamSizemax"
              placeholder="Max Team Size"
              className="w-full rounded-lg p-2 focus:ring-red focus:border-red"
              required
            ></input>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="hover:shadow-md hover:bg-dark"
            onClick={handleClick}
          >
            Edit Event
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTeamSize;
