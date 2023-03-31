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

const EditEvent = (props) => {
  // const { user } = User();
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

  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJuYW1lIjoic2FtIiwiaWF0IjoxNjgwMTE0NzQ2LCJleHAiOjE2ODI3MDY3NDZ9.Q6NGw6VljSXhx1VacbGqZxFI9cWdEHTj-lVjUSwHCHE";

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
        setTagline(element.event_tagline);
        setDescription(element.event_description);
        setMinsize(element.min_team_members);
        setMaxsize(element.max_team_members);
        setRules(element.rules);
      }
    });
  };

  const handleCheckBox = async () => {
    if (!checked) {
      setMaxsize(1);
      setMinsize(1);
    } else {
      setMaxsize("");
      setMinsize("");
    }
    setChecked(!checked);
  };

  const removeCoordinator = async () => {};

  const handleClickEditEvent = async () => {
    const object = {
      token: token,
      event_id: selectedoption,
      event_description: description,
      event_tagline: tagline,
      min_team_members: minsize,
      max_team_members: maxsize,
      rules: rules,
    };
    const response = await editEventDetailsAPI(object);
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
        className={`bg-light my-2 w-full rounded-md mx-1 box-border p-4`}
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
          <p
            htmlFor="EventCoordinators"
            className="block mb-2 font-medium text-black"
          >
            Event Coordinators
          </p>
          {eventCoordinators.map((element) => {
            return (
              <div className="teams px-4 py-4 bg-warm rounded-md my-2 flex">
                <p className="text-sm">sam@gmail.com</p>
                <div className="w-full flex justify-end">
                  <div key={element} onClick={removeCoordinator}>
                    <RemoveCircleOutlineIcon />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center">
            <div
              className="teams w-[200px] cursor-pointer px-4 py-4 bg-warm border-2 border-[#9f6e64] hover:bg-[#9f6e64] transition-all duration-200 rounded-md my-2"
              onClick={handleModal}
            >
              <p className="font-semibold text-xl flex justify-center items-center">
                +
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="hover:shadow-md hover:bg-dark"
            onClick={handleClickEditEvent}
          >
            Edit Event
          </button>
        </div>
      </div>
      {modal && (
        <div>
          <div
            className="fixed top-0 left-0 bg-transparent h-screen w-screen backdrop-blur-sm"
            onClick={handleModal}
          ></div>

          <div
            className="fixed top-[50%] left-[50%] w-[90vw] md:w-[50vw] lg:w-[30vw]  bg-light p-4 rounded-md shadow-md"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="addcoordinators"
                className="block mb-2 font-medium text-black"
              >
                User Culrav Id
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                id="addcoordinators"
                className="w-full rounded-lg p-2"
                placeholder="Enter User Culrav Id"
                required
              ></input>
              <div className="mt-4">
                <button
                  className="hover:shadow-md hover:bg-dark"
                  onClick={handleClickAddMember}
                >
                  Add User
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditEvent;
