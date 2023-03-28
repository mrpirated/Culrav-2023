import React from "react";
import { User } from "../../../User/User";
import DashboardNavbar from "../DashboardNavbar";
import EditEventDescription from "../EditEventDescription";
import EditTagline from "../Edittagline";

const DashboardPoc = () => {
  const { user } = User();
  return (
    <>
      <DashboardNavbar />
      <div className="md:flex mt-[30px] md:mt-[15px] md:flex-row flex flex-col mx-10">
        {/* left dashboard  */}
        <div className="left m-4 w-[50%]">
          <div className="flex flex-col w-full h-[70px]">
            <div className="bg-light md:mt-[8px] ml-[-16px] md:ml-[-16px] my-2 w-full rounded-md">
              <p className="text-2xl p-4 text-brown">
                Hello, <span className="text-red">{user.data.user.name}</span>
              </p>
            </div>
            <div className="bg-light md:mt-[8px] ml-[-16px] md:ml-[-16px] my-2 w-full rounded-md">
              <p className="text-2xl p-4 text-brown">
                <span className="text-red">Culrav Id</span>
              </p>
            </div>
          </div>
        </div>

        {/* center dashboard  */}
        <div className="center m-4 mt-[15px] ml-[-4px] md:ml-[0px] w-full">
          <div className="flex flex-col w-full ">
            <EditTagline />
            {/* <EditEventDescription /> */}
          </div>
        </div>

      </div>
    </>
  );
};

export default DashboardPoc;
