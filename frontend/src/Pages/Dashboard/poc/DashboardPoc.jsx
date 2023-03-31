import React, { useState } from "react";
// import { User } from "../../../User/User";
import DashboardNavbar from "../DashboardNavbar";
import EditEvent from "../EditEvent";
import Spinner from "../Spinner";

const DashboardPoc = () => {
  // const { user } = User();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={loading ? "opacity-50" : "opacity-100"}>
        <div className="md:flex mt-[30px] md:mt-[15px] md:flex-row flex flex-col mx-10">
          {/* left dashboard  */}
          <div className="left m-4 w-[50%]">
            <div className="flex flex-col w-full h-[70px]">
              <div className="bg-light md:mt-[8px] ml-[-16px] md:ml-[-16px] my-2 w-full rounded-md">
                <p className="text-2xl p-4 text-brown">
                  {/* Hello, <span className="text-red">{user.data.user.name}</span> */}
                  Hello, <span className="text-red">Sambhav</span>
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
              <EditEvent setLoading={setLoading} loading={loading} />
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div
          className="fixed top-[50%] left-[50%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Spinner />
        </div>
      )}
    </>
  );
};

export default DashboardPoc;
