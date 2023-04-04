import React, { useState, useEffect, useRef } from "react";
import axios, * as others from "axios";
import "./Modal.css";
import { useSelector } from "react-redux";
import getUserTeamsAPI from "../../api/getUserTeams";
import getTeamDetailsAPI from "../../api/getTeamDetailsAPI";
function Myteams() {
  const [modal, setModal] = useState(true);
  const auth = useSelector((state) => state.auth);

  const [myteams, setMyteams] = useState([]);
  const [teamID, setTeamID] = useState();

  const [leader, setLeader] = useState(false);
  const [myTeamMembers, setMyTeamMembers] = useState([]);
  const [myTeamName, setMyTeamName] = useState("");
  const [myTeamID, setMyTeamID] = useState(null);
  const [myCommiteeName, setMyCommiteeName] = useState("");
  const [myEventName, setMyEventName] = useState("");
  const [link, setLink] = useState("");
  const [userID, setUserID] = useState(null);

  const [copied, setcopied] = useState(false);
  let modalRef = useRef();

  const copyToClipboard = () => {
    setcopied(true);

    navigator.clipboard.writeText(link).then(
      () => {
        // console.log('copied');
      },
      (err) => {
        console.error(err);
      }
    );

    setTimeout(() => {
      setcopied(false);
    }, 3000);
  };

  const handleDelete = async () => {
    // process.env.REACT_APP_REMOVEMEMBERFROMTEAM
    const response = await fetch(process.env.REACT_APP_REMOVEMEMBERFROMTEAM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({ team_id: myTeamID }),
    });
    const json = await response.json();

    if (response.ok) {
      console.log("Successfully deleted user");
      console.log(JSON.stringify(json));
      if (json.success) {
        window.location.reload(false);
        window.alert(json.message);
      } else {
        window.location.reload(false);
        window.alert(json.message);
      }
    }
  };

  const addUser = async () => {
    // process.env.REACT_APP_ADDMEMBERTOTEAMLINK
    const response = await fetch(process.env.REACT_APP_ADDMEMBERTOTEAM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({ team_id: myTeamID, user_id: userID }),
    });
    const json = await response.json();

    if (response.ok) {
      console.log("Successfully added user");
      console.log(JSON.stringify(json));
      if (json.success) {
        window.location.reload(false);
        window.alert(json.message);
      } else {
        window.location.reload(false);
        window.alert(json.message);
      }
    }

    setUserID(null);
  };

  const generateLink = async () => {
    // process.env.REACT_APP_GENERATELINK
    const response = await fetch(process.env.REACT_APP_GENERATELINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({ team_id: teamID }),
    });
    const json = await response.json();

    if (response.ok) {
      console.log("Successful");
      console.log(JSON.stringify(json));
      if (json.success) {
        window.alert(json.message);
        setLink(json.data.link);
        console.log(link);
      } else {
        window.alert(json.message);
      }
    }
  };

  const getTeamsData = async () => {
    const response = await getUserTeamsAPI({ token: auth.token });
    console.log("tt", response);
    console.log("My Teams", response.data);
    setMyteams(response.data);
  };

  const getTeamsDetails = async () => {

    const response = await getTeamDetailsAPI({token : auth.token , team_id : teamID});
    console.log(response);
    // const response = await axios.get(
    //   `${process.env.REACT_APP_GETTEAMDETAILS}?team_id=${teamID}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${auth.token}`,
    //     },
    //   }
    // );

    console.log("Successfully fetched team details");
    setMyTeamMembers(response.data.team_members);
    console.log("teammembers", response.data.team_members);
    setMyTeamName(response.data.team_details.team_name);
    setMyTeamID(response.data.team_details.team_id);
    setMyCommiteeName(response.data.team_details.commitee_name);
    setMyEventName(response.data.team_details.event_name);
    console.log("teamname", response.data.team_details.team_name);
  };

  const toggleModal = () => {
    getTeamsDetails();
    setModal(!modal);
  };

  useEffect(() => {
    setLink("");
    console.log(teamID);
    toggleModal();
  }, [teamID]);

  useEffect(() => {
    getTeamsData();
  }, []);

  const reference = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setTeamID(null);
    }
  };

  const checkLeader = (element) => {
    setTeamID(element.team_id);
    setLeader(element.is_leader);
  };

  return (
    <>
      <div className="bg-light my-2 w-full rounded-md mx-1 box-border p-4">
        <div>
          <p className="text-2xl font-medium">MY TEAMS</p>
          <div className="mt-4">
            {myteams.map((element) => {
              return (
                <div onClick={() => checkLeader(element)}>
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
                <div
                  className="overlay"
                  onClick={(e) => {
                    reference(e);
                  }}
                >
                  <div ref={modalRef} className="modal-content">
                    <p>
                      <h2 className="font-semibold mt-[10px] pl-[5px] text-[25px]">
                        TEAM INFO
                      </h2>
                      <div>
                        <div className="teams mt-[5px] px-5 py-4 bg-warm rounded-md">
                          <p className="text-sm ml-[-1px]">
                            Team name: {myTeamName}
                          </p>
                          <p className="text-sm pt-[2px] ml-[-1px]">
                            Team ID: {myTeamID}
                          </p>
                          <p className="text-sm pt-[2px] ml-[-1px]">
                            Commitee name: {myCommiteeName}
                          </p>
                          <p className="text-sm pt-[2px] ml-[-1px]">
                            Event name: {myEventName}
                          </p>
                          {leader ? (
                            <div>
                              <div className="teams mt-[5px] pt-1 bg-warm rounded-md">
                                <div className="flex items-center">
                                  <div>
                                    <button
                                      onClick={generateLink}
                                      id="leaveLink"
                                    >
                                      TEAM LINK
                                    </button>
                                  </div>
                                  <div
                                    id="copy-text"
                                    className="flex items-center"
                                  >
                                    <button>
                                      {copied ? (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="w-4 h-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                                          />
                                        </svg>
                                      ) : (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          className="w-4 h-4"
                                          onClick={copyToClipboard}
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                                          />
                                        </svg>
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="hidden">NOT LEADER</div>
                          )}
                        </div>
                      </div>
                    </p>

                    {leader ? (
                      <div>
                        <h2 className="font-semibold mt-[20px] pl-[5px] text-[25px]">
                          ADD MEMBERS
                        </h2>
                        <div className="px-5 py-4 mt-[5px] bg-warm rounded-md flex flex-col justify-center">
                          <label className="block ml-[-1px] mb-[6px] font-medium text-black">
                            Enter User ID
                          </label>
                          <input
                            type="number"
                            onChange={(e) => setUserID(e.target.value)}
                            value={userID}
                            id="teamName"
                            className="w-[150px] h-[30px] mb-[3px] rounded-[5px] p-2 focus:ring-red focus:border-red"
                            required
                          />
                          <button
                            onClick={addUser}
                            id="addID"
                            className="mt-4 hover:shadow-md hover:bg-dark"
                          >
                            ADD
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden">NOT LEADER</div>
                    )}

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
                                <p className="text-sm ml-[2px]">
                                  Name: {element.user_name}
                                </p>
                                {element.is_leader ? (
                                  <p className="text-sm pt-[2px] ml-[2px]">
                                    LEADER
                                  </p>
                                ) : (
                                  <p className="text-sm pt-[2px] ml-[2px]">
                                    MEMBER
                                  </p>
                                )}
                              </div>
                              {leader ? (
                                <div>
                                  {element.is_leader ? (
                                    <button onClick={handleDelete} id="delete">
                                      DELETE TEAM
                                    </button>
                                  ) : (
                                    <button id="leave">REMOVE</button>
                                  )}
                                </div>
                              ) : (
                                <div>
                                  {auth.user.name === element.user_name ? (
                                    <button onClick={handleDelete} id="leave">
                                      LEAVE
                                    </button>
                                  ) : (
                                    <button id="leave" className="hidden">
                                      LEAVE
                                    </button>
                                  )}
                                </div>
                              )}
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
