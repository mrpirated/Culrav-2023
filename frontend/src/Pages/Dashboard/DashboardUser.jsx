import React from "react";
import CreateTeam from "./CreateTeam";
import Myteams from "./Myteams";
import AddTeamMembers from "./AddTeamMembers";
import { useSelector } from "react-redux";


const DashboardUser = () => {
    const auth = useSelector((state) => state.auth);
  return (
    <>
      <div className="md:flex mt-[30px] md:mt-[15px] md:flex-row flex flex-col mx-10">
        {/* left dashboard  */}
        <div className="left m-4 w-[70%]">
          <div className="flex flex-col flex-wrap w-full h-[70px]">
            <div className="bg-light md:mt-[8px] ml-[-16px] md:ml-[-16px] my-2 w-full rounded-md">
              <p className="text-2xl p-4 text-brown">
                Hello, <span className="text-red">{auth.user.name}</span>
              </p>
              <p className="text-sm ml-[2px] p-4 pb-4 mt-[-30px] text-brown">
                {auth.user.email}
              </p>
            </div>
          </div>
        </div>

        {/* center dashboard  */}
        <div className="center mt-[35px] md:mt-[15px] m-4 ml-[-4px] md:ml-[0px] w-full">
          <div className="flex flex-col w-full ">
            <CreateTeam />
            <div className="mt-[22px]">
              <AddTeamMembers />
            </div>
          </div>
        </div>

        {/* right dashboard */}
        <div className="m-4 mt-[7px] md:mr-[4px] md:mt-[15px] mb-[32px] ml-[-4px] md:ml-[0px] w-full h-full ">
          <Myteams />
        </div>
      </div>
    </>
  );
};

export default DashboardUser;