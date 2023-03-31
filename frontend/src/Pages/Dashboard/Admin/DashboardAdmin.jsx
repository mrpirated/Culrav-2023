import React, { useEffect, useState } from "react";
import CreateTeam from "../CreateTeam";
import DashboardNavbar from "../DashboardNavbar";
import AddTeamMembers from "../AddTeamMembers";
import AddPoc from "./AddPoc";
import AddEc from "./AddEc";
import EditDescriptionA from "./EditDescriptionA";
import { useDispatch, useSelector } from "react-redux";
import AdminPanel from "./AdminPanel";
import AdminDataList from "./AdminDataList";
import getAllPocAPI from "../../../api/getAllPOCsAPI";
import { setLoading } from "../../../store/auth";
import getAllECsAPI from "../../../api/getAllECsAPI";
import getCommiteesAPI from "../../../api/getCommiteesAPI";
import getCommiteeEventsAPI from "../../../api/getCommiteeEventsAPI";
import ProfileSectionInDashboard from "../ProfileSectionInDashboard";
import UserProfile from "../UserProfile";
const DashboardAdmin = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [type, setType] = useState("poc");
  const [pocs, setPocs] = useState([]);
  const [ecs, setEcs] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [commitee, setCommitee] = useState([]);
  const [commiteeEvents, setCommiteeEvents] = useState({});

  useEffect(() => {
    dispatch(setLoading({ loading: true }));
    getAllPocAPI()
      .then((response) => {
        setPocs(response.data);
        return getAllECsAPI();
      })
      .then((response) => {
        setEcs(response.data);
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
        setRefreshList(false);
      });
    //   getAllECsAPI().then((response)=>{
    // 	setEcs(response.data)
    //   }).finally(() => {
    //     dispatch(setLoading({ loading: false }));
    //     setRefreshList(false);
    //   });
  }, [refreshList]);
  useEffect(() => {
    dispatch(setLoading({ loading: true }));
    getCommiteesAPI()
      .then((response) => {
        const options = [];
        const eventFetches = [];
        response.data.forEach((element) => {
          eventFetches.push(
            getCommiteeEventsAPI({ commitee_id: element.commitee_id })
          );
          options.push({
            value: element.commitee_id,
            label: element.name,
          });
        });
        setCommitee(options);
        return Promise.all(eventFetches);
      })
      .then((response) => {
        const commiteeEvents = {};
        response.forEach((res, key) => {
          commiteeEvents[key + 1] = [];
          res.data.forEach((e) => {
            commiteeEvents[key + 1].push({
              value: e.event_id,
              label: e.name,
            });
          });
        });
        console.log(commiteeEvents);
        setCommiteeEvents(commiteeEvents);
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  }, []);
  return (
    // bg-[#263544]
    <>
      <div className="bg-[#fff1c5]">
        <div className="md:flex-row flex flex-col relative ">
          {/* left dashboard  */}
          <div className=" left w-[20%] h-screen bg-brown2 shadow-md">
            <ProfileSectionInDashboard
              type="USERPROFILE"
              onClick={() => {
                setType("userProfile");
              }}
              check={type}
            />
            <AdminPanel
              type="POC"
              onClick={() => setType("poc")}
              check={type}
            />
            <AdminPanel type="EC" onClick={() => setType("ec")} check={type} />
          </div>

          {/* center dashboard  */}
          <div className="flex flex-row w-full">
            <div className="w-full">
              {type == "userProfile" && (
                <div className="flex justify-center items-center">
                  <UserProfile userData={auth.user} />
                </div>
              )}
              {(type == "poc" || type == "ec") && (
                <AdminDataList
                  type={type}
                  pocs={pocs}
                  ecs={ecs}
                  setRefreshList={setRefreshList}
                />
              )}
            </div>

            {/* right dashboard */}
            {(type == "poc" || type == "ec") && (
              <div className="w-[80%] mx-4">
                {type == "poc" && (
                  <AddPoc commitee={commitee} setRefreshList={setRefreshList} />
                )}
                {type == "ec" && (
                  <AddEc
                    commitee={commitee}
                    commiteeEvents={commiteeEvents}
                    setRefreshList={setRefreshList}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
