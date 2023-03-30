import React, { useEffect, useState } from "react";
import CreateTeam from "../CreateTeam";
import DashboardNavbar from "../DashboardNavbar";
import AddTeamMembers from "../AddTeamMembers";
import AddPoc from "../AddPoc";
import AddEc from "../AddEc";
import EditDescriptionA from "./EditDescriptionA";
import { useDispatch, useSelector } from "react-redux";
import AdminPanel from "./AdminPanel";
import AdminDataList from "./AdminDataList";
import getAllPocAPI from "../../../api/getAllPOCsAPI";
import { setLoading } from "../../../store/auth";
import getAllECsAPI from "../../../api/getAllECsAPI";
import getCommiteesAPI from "../../../api/getCommiteesAPI";
import getCommiteeEventsAPI from "../../../api/getCommiteeEventsAPI";
const DashboardAdmin = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [type, setType] = useState("poc");
  const [pocs, setPocs] = useState([]);
  const [ecs, setEcs] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [commitee, setCommitee] = useState([]);
  const [commiteeEvents,setCommiteeEvents] = useState({});
 
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
  }, [refreshList]);
  useEffect(()=>{
	dispatch(setLoading({loading:true}));
	getCommiteesAPI().then((response)=>{
		const options = [];
		const eventFetches = [];
		response.data.forEach((element) => {
			eventFetches.push(getCommiteeEventsAPI({commitee_id:element.commitee_id}));
			options.push({
				value: element.commitee_id,
				label: element.name,
			  });
		  });
		  setCommitee(options);
		  return Promise.all(eventFetches);
	}).then((response)=>{
		const commiteeEvents={};
		response.forEach((res,key)=>{
			commiteeEvents[key+1] = [];
			res.data.forEach((e)=>{
				commiteeEvents[key+1].push({
					value: e.event_id,
					 label: e.name,
				});
			})
		})
		console.log(commiteeEvents);
		setCommiteeEvents(commiteeEvents);
	}).finally(()=>{
		dispatch(setLoading({loading:false}));
	});
  },[]);
  return (
    <>
      <DashboardNavbar />
      <div className="md:flex-row flex flex-col">
        {/* left dashboard  */}
        <div className="left m-4 w-[70%] bg-red">
          {/* <div className='flex flex-col flex-wrap w-full h-[70px]'>
						<div className='bg-light md:mt-[8px] ml-[-16px] md:ml-[-16px] my-2 w-full rounded-md'>
							<p className='text-2xl p-4 text-brown'>
								Hello, <span className='text-red'>{auth.user.name}</span>
							</p>
						</div>
					</div> */}
          <AdminPanel type="POC" onClick={() => setType("poc")} check={type} />
          <AdminPanel type="EC" onClick={() => setType("ec")} check={type} />
        </div>

        {/* center dashboard  */}
        <div className="center m-4 mt-[15px] ml-[-4px] md:ml-[0px] w-full">
          <div className="flex flex-col w-full ">
            <AdminDataList type={type} pocs={pocs} ecs={ecs} />
            {/* <AddPoc />
						<AddEc /> */}
          </div>
        </div>

        {/* right dashboard */}
        <div className="m-4 mt-[7px] md:mr-[4px] md:mt-[15px] mb-[32px] ml-[-4px] md:ml-[0px] w-full h-full ">
          {type == "poc" && <AddPoc commitee={commitee} setRefreshList={setRefreshList} />}
          {type == "ec" && <AddEc commitee={commitee} commiteeEvents={commiteeEvents} setRefreshList={setRefreshList} />}
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
