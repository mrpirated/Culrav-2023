import React from "react";
import teamlogo from  "./Assests/teamlogo.webp";

function Team() {
  return (
    <div className="m-10 lg:mx-20">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src={teamlogo}
          alt="avatar"
          className="cover rounded-full h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]"
        ></img>
        <p className="font-bold text-xl lg:text-3xl mt-4">Member Name</p>
        <p className="font-normal lg:text-xl">Member position</p>
      </div>
    </div>
  );
}

export default Team;