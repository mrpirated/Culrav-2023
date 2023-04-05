import React from "react";
import ProfileSectionInDashboard from "./ProfileSectionInDashboard";
import UserProfile from "./UserProfile";
import Myteams from "./Myteams";
import EventRegisterations from "./EventRegisterations";
const DashboardEC = (props) => {
  const { type, setType } = props;

  return (
    <>
      <div className="bg-[#fff1c5]">
        <div className="md:flex-row flex flex-col relative ">
          {/* left dashboard  */}
          <div className=" left w-[20%] h-screen bg-[#F5BE8A] shadow-md hidden lg:block">
            <ProfileSectionInDashboard
              type="PROFILE"
              onClick={() => {
                setType("profile");
              }}
              check={type}
            />
            <ProfileSectionInDashboard
              type="MY TEAMS"
              onClick={() => {
                setType("my teams");
              }}
              check={type}
            />
            <ProfileSectionInDashboard
              type="EVENT REGISTERATIONS"
              onClick={() => {
                setType("event registerations");
              }}
              check={type}
            />

            {/* <AdminPanel
							type='Edit Event'
							onClick={() => setType("edit event")}
							check={type}
						/> */}
          </div>
          {type === "profile" && (
            <div className="flex flex-row w-full justify-center h-screen lg:h-auto">
              <UserProfile />
            </div>
          )}
          {type === "my teams" && (
            <div className="flex flex-row w-full justify-center h-screen lg:h-auto">
              <Myteams />
            </div>
          )}
          {type === "event registerations" && (
            <div className="flex flex-row w-full justify-center h-screen lg:h-auto">
              <EventRegisterations />
            </div>
          )}

          {/* {type === "edit event" && (
						<div className='flex flex-row w-full'>
							<EditEvent
								setRefreshList={setRefreshList}
								commitee={commitee.filter((e) => ecCommitee.includes(e.value))}
								commiteeEvents={commiteeEvents}
							/>
						</div>
					)} */}
        </div>
      </div>
    </>
  );
};

export default DashboardEC;
