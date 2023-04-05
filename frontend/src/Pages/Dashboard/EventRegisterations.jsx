import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import getUserTeamsAPI from "../../api/getUserTeamsAPI";
import { setTeams } from "../../store/auth";
import SelectEventToViewEventRegisterations from "./SelectEventToViewEventRegisterations";

function EventRegisterations() {
  const [modal, setModal] = useState(false);
  const auth = useSelector((state) => state.auth);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [teamUpdated, setTeamUpdated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (teamUpdated) {
      getUserTeamsAPI({ token: auth.token }).then((response) => {
        dispatch(setTeams({ teams: response.data }));
      });
      setTeamUpdated(true);
    }
  }, [teamUpdated]);

  useEffect(() => {
    if (selectedEvent != null) {
      console.log("selectedEvent", selectedEvent);
    }
  }, [selectedEvent]);

  const viewDetails = async (e) => {
    console.log("clicked", e);
  };

  return (
    <>
      
      <div className="bg-OccurYellow my-3 mx-4 w-full rounded-md box-border p-4 overflow-auto h-[90vh]">
      <div>
        <SelectEventToViewEventRegisterations
          setSelectedEvent={setSelectedEvent}
        />
      </div>
        <div>
          <p className="text-2xl font-medium">EVENT REGISTERATIONS</p>
          <div className="mt-4">
            {auth.teams.map((element) => {
              return (
                <div className="" key={element.team_id}>
                  <div
                    key={element}
                    className="teams flex justify-between px-4 py-2 bg-lightYellow rounded-md my-2"
                  >
                    <div>
                      <p className="font-semibold text-xl">
                        {element.team_name}
                      </p>
                      <p className="text-sm">{element.event_name}</p>
                      {/* <p className="text-md ml-[1px]">{element.team_name}</p> */}
                    </div>
                    <button
                      className="w-[30%] md:w-[20%] text-lg text-black hover:cursor-pointer bg-OccurYellow hover:bg-[#f3e1aa]"
                      onClick={() => viewDetails(element)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventRegisterations;
