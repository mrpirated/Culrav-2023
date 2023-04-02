import React from "react";
import teamlogo from "./Assests/teamlogo.webp";
import "./Team.css";

function Team(props) {
  const { name, contact, imageUrl } = props;
  return (
    <div className="m-10 lg:mx-20">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="imgBxTeam">
          <img src={imageUrl} alt="avatar" className="img" />
        </div>
        <p className="font-bold text-xl lg:text-2xl mt-4">
          {name.toUpperCase()}
        </p>
        <p className="font-normal lg:text-md">{contact}</p>
      </div>
    </div>
  );
}

export default Team;
