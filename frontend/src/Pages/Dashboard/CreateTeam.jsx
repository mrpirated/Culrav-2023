import React, { useState } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import { User } from "../../User/User";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const options = [
  { value: 6, label: "Anunaad" },
  { value: 2, label: "Rangsaazi" },
  { value: 5, label: "Dark Room" },
  { value: 7, label: "Litmuse" },
  { value: 3, label: "Razzmatazz" },
  { value: 4, label: "Spandan" },
  { value: 1, label: "Rangmanch" },
];

function CreateTeam() {
  const [subevent, setSubevent] = useState([]);
  const [selectedsubEvent, setselectedsubEvent] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [progress, setProgress] = useState(false);
  const { user } = User();

  const onEventchange = async (event) => {
    setProgress(true);
    const id = event.value;
    setselectedsubEvent(null);
    const response = await axios.get(
      `${process.env.REACT_APP_COMMITEE}?commitee_id=${id}`
    );
    const subeventoptions = [];
    await response.data.data.forEach((element) => {
      const object = {
        value: element.event_id,
        label: element.name,
      };
      subeventoptions.push(object);
    });
    setProgress(false);
    setSubevent(subeventoptions);
  };

  const onSubEventchange = async (event) => {
    console.log("subevent selected");
    console.log(event.value);
    setselectedsubEvent(event.value);
  };

  const onchangeTeamname = async (event) => {
    setTeamName(event.target.value);
  };

  const handleClick = async () => {
    if (selectedsubEvent != null) {
      // const response = await axios.post(`${process.env.REACT_APP_CREATETEAM}`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${user.data.token}`,
      //   },
      //   body: {
      //     event_id: selectedsubEvent,
      //     team_name: teamName,
      //   },
      // });

      setSubevent([]);
      setselectedsubEvent(null);
      setTeamName("");

      const response = await fetch(process.env.REACT_APP_CREATETEAM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.data.token}`,
        },
        body: JSON.stringify({
          event_id: selectedsubEvent,
          team_name: teamName,
        }),
      });
      const json = await response.json();

      if (response.ok) {
        if (json.success) {
          toast.success("Team created Successfully");
          window.location.reload(false);
        } else {
          toast.error(json.messge);
          // window.location.reload(false);
          // window.alert(json.message);
        }
      }
    } else {
      // console.log("select a sub event");
      toast.warn("Select an event");
    }
  };

  return (
    <>
      <div className="bg-light my-2 w-full rounded-md mx-1 box-border p-4">
        <div>
          <p className="text-2xl font-medium">CREATE TEAM</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="selectCommitee"
            className="block mb-2 font-medium text-black"
          >
            Select Commitee
          </label>
          <Select
            options={options}
            id="selectCommitee"
            className="w-full"
            onChange={onEventchange}
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
            options={subevent}
            id="selectEvents"
            className="w-full"
            onChange={onSubEventchange}
            // value={selectedsubEvent}
            required
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="teamName"
            className="block mb-2 font-medium text-black"
          >
            Enter Team Name
          </label>
          <input
            type="text"
            onChange={onchangeTeamname}
            value={teamName}
            id="teamName"
            className="w-full  rounded-lg p-2 focus:ring-red focus:border-red"
            required
          />
        </div>
        <div className="mt-4">
          <button
            className="hover:shadow-md hover:bg-[#f43e4a] transition-all duration-100"
            onClick={handleClick}
          >
            CREATE
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateTeam;
