import React from "react";
import CreateTeam from "./CreateTeam";
import DashboardNavbar from "./DashboardNavbar";


function Dashboard() {
  return (
    <>
      <DashboardNavbar />
      <div className="flex flex-row w-full">
        <div className="left m-4 w-[30%]">
          <div className="flex flex-col flex-wrap w-full h-[700px]">
            {/* user infomation box  */}
            <div className="bg-light my-2 w-full rounded-md">
              <p className="text-2xl p-4 text-brown">
                Hello , <span className="text-red">Sambhav Jain</span>
              </p>
            </div>
            {/* user information box ends  */}
          </div>
        </div>

        {/* right dashboard  */}
        <div className="right m-4 ml-0 w-full">
          <div className="flex flex-col flex-wrap w-full h-[700px]">
            <div className="flex flex-row w-full ">
              {/* create a team section  */}
              <CreateTeam />

              {/* add team members to team  */}
              <div className="bg-light my-2 w-1/2 h-[100px] rounded-md mx-1 box-border"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
