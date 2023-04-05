import React, { useState } from "react";

const TeamCard = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div key={props.element.team_id}>
        <div
          key={props.element}
          className={`teams flex justify-between px-4 py-2 bg-lightYellow rounded-md my-2 ${
            toggle ? "h-[200px]" : "h-auto"
          }`}
        >
          <div>
            <p className="font-semibold text-[18px]">
              {props.element.event_name}
            </p>
            <p className="text-[16px]">{props.element.team_name}</p>
            <p className="text-[14px] ml-[1px]">
              {props.element.commitee_name}
            </p>
            <p className="text-[14px] ml-[1px]">
              Team Size: {props.element.team_size}
            </p>
          </div>
          <button
            className="w-[30%] md:w-[20%] text-lg text-black hover:cursor-pointer bg-OccurYellow hover:bg-[#f3e1aa]"
            onClick={() => {
              props.checkLeader(props.element);
              setToggle(props.allowToggle && !toggle);
            }}
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
