import React, { useEffect, useRef, useState } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import createTeamAPI from "../../api/createTeamAPI";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import { useLocation } from "react-router-dom";
const options = [
  { value: 6, label: "Anunaad" },
  { value: 2, label: "Rangsaazi" },
  { value: 5, label: "Dark Room" },
  { value: 7, label: "Litmuse" },
  { value: 3, label: "Razzmatazz" },
  { value: 4, label: "Spandan" },
  { value: 1, label: "Rangmanch" },
];

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function CreateTeam() {
  const [subevent, setSubevent] = useState([]);
  const [selectedsubEvent, setselectedsubEvent] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [progress, setProgress] = useState(false);
  const auth = useSelector((state) => state.auth);
  const query = useQuery();
  const [comDefaultValue, setComDeafultValue] = useState(null);
  const [eventDefaultValue, setEventDeafultValue] = useState(null);

  const onEventchange = async (event) => {
    setProgress(true);
    const id = event.value;
    let defValue = options.filter((opt) => opt.value == parseInt(id))[0];
    setComDeafultValue(defValue);
    setselectedsubEvent(null);
    // const response = await axios.get(
    // 	`${process.env.REACT_APP_COMMITEE}?commitee_id=${id}`
    // );
    const object = {
      commitee_id: id,
    };
    const response = await getCommiteeEventsAPI(object);
    console.log("rs", response.data);
    const subeventoptions = [];
    await response.data.forEach((element) => {
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
    let defValue = subevent.filter(
      (opt) => opt.value == parseInt(event.value)
    )[0];
    setEventDeafultValue(defValue);
    setselectedsubEvent(event.value);
  };

  const onchangeTeamname = async (event) => {
    setTeamName(event.target.value);
  };

  const handleClick = async () => {
    if (selectedsubEvent != null) {
      setSubevent([]);
      setselectedsubEvent(null);
      setTeamName("");

      const data = {
        token: auth.token,
        event_id: selectedsubEvent,
        team_name: teamName,
      };

      const response = await createTeamAPI(data);
      if (response.success) {
        toast.success("Team created successfully");
      } else {
        toast.error(response.message);
      }
    } else {
      // console.log("select a sub event");
      toast.error("Select an event");
    }
  };

  useEffect(() => {
    let com_id = query.get("com_id");
    let event_id = query.get("event_id");
    let defValue = options.filter((opt) => opt.value == parseInt(com_id))[0];
    let eventdefValue = subevent.filter(
      (opt) => opt.value == parseInt(event_id)
    )[0];
    setComDeafultValue(defValue);
    setEventDeafultValue(eventdefValue);
  }, []);

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
            // ref={comref}
            options={options}
            id="selectCommitee"
            className="w-full"
            onChange={onEventchange}
            value={comDefaultValue}
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
            value={eventDefaultValue}
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
