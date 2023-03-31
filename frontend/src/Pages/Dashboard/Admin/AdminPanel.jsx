import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const AdminPanel = (props) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div
          className={`${
            props.type == props.check.toUpperCase()
              ? "bg-[#CCAD8F] shadow-md"
              : "bg-brown2"
          } w-full cursor-pointer hover:bg-[#CCAD8F] transition-all duration-200`}
          onClick={() => props.onClick()}
        >
          <p className="text-lg p-4 text-white ">
            <span className="mr-4">
              <PersonIcon />
            </span>
            {props.type}
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
