import React, { useState, useEffect, useRef } from "react";
import axios, * as others from "axios";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import getTeamDetailsAPI from "../../api/getTeamDetailsAPI";
import { setLoading } from "../../store/auth";
import generateLinkAPI from "../../api/generateLinkAPI";
import config from "../../config";
import deactivateTeamLinkAPI from "../../api/deactivateTeamLinkAPI";
function Myteams() {
  const [modal, setModal] = useState(false);
  const auth = useSelector((state) => state.auth);

  const [myTeamMembers, setMyTeamMembers] = useState([]);
  const [userID, setUserID] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState({});
  const [copiedURL, setcopiedURL] = useState(false);
  const [copiedLink, setcopiedLink] = useState(false);
  const [teamLink, setTeamLink] = useState(null);
  let modalRef = useRef();
  const dispatch = useDispatch();
  const copyToClipboardURL = (text) => {
    setcopiedURL(true);

    navigator.clipboard.writeText(text).then(
      () => {
        // console.log('copied');
      },
      (err) => {
        console.error(err);
      }
    );

    setTimeout(() => {
      setcopiedURL(false);
    }, 3000);
  };

  const copyToClipboardLink = (text) => {
    setcopiedLink(true);

    navigator.clipboard.writeText(text).then(
      () => {
        // console.log('copied');
      },
      (err) => {
        console.error(err);
      }
    );

    setTimeout(() => {
      setcopiedLink(false);
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
      body: JSON.stringify({ team_id: selectedTeam.team_id }),
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
      body: JSON.stringify({ team_id: selectedTeam.team_id, user_id: userID }),
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

  const generateLink = () => {
    // process.env.REACT_APP_GENERATELINK
    dispatch(setLoading({ loading: true }));

    generateLinkAPI({ token: auth.token, team_id: selectedTeam.team_id })
      .then((response) => {
        setTeamLink(response.data.link);
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  };
  const deactivateLink = () => {
    dispatch(setLoading({ loading: true }));

    deactivateTeamLinkAPI({
      token: auth.token,
      team_id: selectedTeam.team_id,
    })
      .then((response) => {
        setTeamLink(null);
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  };
  const checkLeader = (element) => {
    setSelectedTeam(element);
    dispatch(setLoading({ loading: true }));
    getTeamDetailsAPI({
      token: auth.token,
      team_id: element.team_id,
    })
      .then((response) => {
        setModal(true);
        console.log(response);
        setMyTeamMembers(response.data.team_members);
        setTeamLink(response.data.team_details.link);
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  };

  return (
    <>
      <div className="bg-OccurYellow my-3 mx-4 w-full rounded-md box-border p-4">
        <div>
          <p className="text-2xl font-medium">MY TEAMS</p>
          <div className="mt-4">
            {auth.teams.map((element) => {
              return (
                <div className="">
                  <div
                    key={element}
                    className="teams flex justify-between px-4 py-2 bg-lightYellow rounded-md my-2"
                  >
                    <div>
                      <p className="font-semibold text-xl">
                        {element.event_name}
                      </p>
                      <p className="text-md ml-[1px]">
                        {element.commitee_name}
                      </p>
                      <p className="text-md ml-[1px]">{element.team_name}</p>
                    </div>
                    <button
                      className="w-[20%] text-lg text-black hover:cursor-pointer bg-OccurYellow hover:bg-[#f3e1aa]"
                      onClick={() => checkLeader(element)}
                    >
                      EDIT
                    </button>
                  </div>
                </div>
              );
            })}
            {/* onClick=
            {() => {
              setModal(false);
            }} */}
            {modal && (
              <div className="modal z-50">
                <div className="overlay">
                  <div ref={modalRef} className="modal-content">
                    <p>
                      <div className="flex justify-between items-center">
                        <div>
                          <h2 className="font-semibold mt-[10px] pl-[5px] text-[25px]">
                            TEAM INFO
                          </h2>
                        </div>
                        <div
                          onClick={() => {
                            setModal(false);
                          }}
                          className=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 20"
                            strokeWidth="1.5"
                            stroke="black"
                            className="w-10 h-10 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="teams mt-[5px] px-5 py-4 bg-warm rounded-md">
                          {/* <div className="flex justify-between">
                            <div> */}
                          <p className="text-sm ml-[-1px]">
                            Team name: {selectedTeam.team_name}
                          </p>
                          <p className="text-sm pt-[2px] ml-[-1px]">
                            Commitee name: {selectedTeam.commitee_name}
                          </p>
                          <p className="text-sm pt-[2px] ml-[-1px]">
                            Event name: {selectedTeam.event_name}
                          </p>
                          {/* </div>
                        <div> */}
                          {/* {teamLink == null && (
                                <div>
                                  <button onClick={generateLink} id="leaveLink">
                                    Activate Team Link
                                  </button>
                                </div>
                              )}
                              {teamLink != null && (
                                <div className="w-full">
                                  <button
                                    onClick={deactivateLink}
                                    id="leaveLink"
                                    className="w-full"
                                  >
                                    Deactivate Team Link
                                  </button>
                                </div>
                              )}
                            </div>
                          </div> */}
                          {selectedTeam.is_leader ? (
                            <div>
                              <div className="teams mt-[5px] pt-1 bg-warm rounded-md">
                                <div className="flex flex-col justify-center">
                                  {teamLink == null && (
                                    <div>
                                      <button className="close-modal uppercase rounded-none">
                                        Activate Team Link
                                      </button>
                                    </div>
                                  )}
                                  {teamLink != null && (
                                    <div className="w-full">
                                      <button className="close-modal uppercase rounded-b-none">
                                        Deactivate Team Link
                                      </button>
                                    </div>
                                  )}
                                  {teamLink != null && (
                                    <div className="flex flex-col justify-center">
                                      <div
                                        id="copy-text"
                                        className="flex items-center bg-sharp pl-[20px] pt-[10px] "
                                      >
                                        <div className="mr-[15px] text-[13px]">
                                          <span className="font-bold">
                                            URL -
                                          </span>{" "}
                                          {config.websiteUrl}/{teamLink}
                                        </div>
                                        <div
                                          id="copy-text"
                                          className="flex items-center"
                                        >
                                          <button>
                                            {copiedURL ? (
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
                                                onClick={() =>
                                                  copyToClipboardURL(
                                                    `${config.websiteUrl}/${teamLink}`
                                                  )
                                                }
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
                                      <div className="flex items-center bg-sharp pl-[20px] pb-[10px]">
                                        <div className="mr-[15px] text-[13px]">
                                          <span className="font-bold">
                                            LINK -
                                          </span>{" "}
                                          {teamLink}
                                        </div>
                                        <div
                                          id="copy-text"
                                          className="flex items-center"
                                        >
                                          <button>
                                            {copiedLink ? (
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
                                                onClick={() =>
                                                  copyToClipboardLink(teamLink)
                                                }
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
                                      {/* </div> */}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="hidden">NOT LEADER</div>
                          )}
                        </div>
                      </div>
                    </p>

                    {selectedTeam.is_leader ? (
                      <div>
                        <h2 className="font-semibold mt-[20px] pl-[5px] text-[25px]">
                          ADD MEMBERS
                        </h2>
                        <div className="px-5 py-4 mt-[5px] bg-warm rounded-md flex flex-col justify-center">
                          <label className="block ml-[-1px] mb-[6px] font-medium text-black">
                            Enter User Culrav ID
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
                              {selectedTeam.is_leader ? (
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
                      onClick={() => {
                        setModal(false);
                      }}
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
