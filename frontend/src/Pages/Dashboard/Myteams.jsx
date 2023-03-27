import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import "./Modal.css";
import { User } from "../../User/User";

function Myteams() {
  const [modal, setModal] = useState(true);
  const { user } = User();

  const [myteams, setMyteams] = useState([]);
  const [teamID, setTeamID] = useState();

  const [myTeamMembers, setMyTeamMembers] = useState([]);
  const [myTeamName, setMyTeamName] = useState("");
  const [myTeamID, setMyTeamID] = useState(null);
  const [myCommiteeName, setMyCommiteeName] = useState("");
  const [myEventName, setMyEventName] = useState("");

  const getTeamsData = async () => {
    const response = await axios.get(process.env.REACT_APP_GETUSERTEAM, {
      headers: {
        Authorization: `Bearer ${user.data.token}`,
      },
    });
    console.log(response.data.data);
    setMyteams(...myteams, response.data.data);
  };

  const getTeamsDetails = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GETTEAMDETAILS}?team_id=${teamID}`,
      {
        headers: {
          Authorization: `Bearer ${user.data.token}`,
        },
      }
    );

    console.log("Successfully fetched team details");
    setMyTeamMembers(response.data.data.team_members);
    console.log(response.data.data.team_members);
    setMyTeamName(response.data.data.team_details.team_name);
    setMyTeamID(response.data.data.team_details.team_id);
    setMyCommiteeName(response.data.data.team_details.commitee_name);
    setMyEventName(response.data.data.team_details.event_name);
    console.log(response.data.data.team_details.team_name);
  };

  const toggleModal = () => {
    getTeamsDetails();
    setModal(!modal);
  };

  useEffect(() => {
    console.log(teamID);
    toggleModal();
  }, [teamID]);

  useEffect(() => {
    getTeamsData();
  }, []);

  return (
    <>
      <div className="bg-light my-2 w-full rounded-md mx-1 box-border p-4">
        <div>
          <p className="text-2xl font-medium">My Teams</p>
          <div className="mt-4">
            {myteams.map((element) => {
              return (
                <div onClick={() => setTeamID(element.team_id)}>
                  <div
                    key={element}
                    className="teams hover:cursor-pointer px-4 py-2 bg-warm rounded-md my-2"
                  >
                    <p className="font-semibold text-xl">{element.team_name}</p>
                    <p className="text-md ml-[1px]">{element.event_name}</p>
                  </div>
                </div>
              );
            })}
            {modal && (
              <div className="modal z-50">
                <div className="overlay">
                  <div className="modal-content">
                    <p>
                      <h2 className="font-semibold mt-[10px] pl-[5px] text-[25px]">
                        TEAM INFO
                      </h2>
                      <div>
                        <div className="teams mt-[5px] px-5 py-4 bg-warm rounded-md">
                          <p className="text-sm">Team name: {myTeamName}</p>
                          <p className="text-sm pt-[2px]">
                            Team ID: {myTeamID}
                          </p>
                          <p className="text-sm pt-[2px]">
                            Commitee name: {myCommiteeName}
                          </p>
                          <p className="text-sm pt-[2px]">
                            Event name: {myEventName}
                          </p>
                        </div>
                      </div>
                    </p>
                    <div>
                      <h2 className="font-semibold mt-[20px] pl-[5px] text-[25px]">
                        TEAM MEMBERS
                      </h2>
                      {myTeamMembers.map((element) => {
                        return (
                          <div>
                            <div
                              key={element.user_id}
                              className="teams px-4 mt-[5px] py-3 bg-warm rounded-md flex items-center justify-between"
                            >
                              <div>
                                <p className="text-sm">
                                  Name: {element.user_name}
                                </p>
                                {element.is_leader ? (
                                  <p className="text-sm pt-[2px]">LEADER</p>
                                ) : (
                                  <p className="text-sm pt-[2px]">MEMBER</p>
                                )}
                              </div>
                              <div>
                                {element.is_leader ? (
                                  <button id="leave">LEAVE</button>
                                ) : (
                                  <button id="leave">REMOVE</button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      className="close-modal mt-[20px] mb-[20px]"
                      onClick={() => setTeamID(null)}
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Myteams;
