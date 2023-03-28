import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import { User } from "../../User/User";
import { toast } from "react-toastify";

const EditEventDescription = () => {
  const { user } = User();
  const [selectedoption, setselectedoption] = useState(null);
  const [options, setoptions] = useState([]);
  const [description, setDescription] = useState("");

  const getEventData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_COMMITEE}?commitee_id=7`
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
          <p className="text-2xl font-medium">Edit Event Description</p>
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
            htmlFor="description"
            className="block mb-2 font-medium text-black"
          >
            Description
          </label>
          <textarea
            type="description"
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
          <button
            className="hover:shadow-md hover:bg-dark"
            onClick={handleClick}
          >
            Edit Description
          </button>
        </div>
      </div>
    </>
  );
};

export default EditEventDescription;
