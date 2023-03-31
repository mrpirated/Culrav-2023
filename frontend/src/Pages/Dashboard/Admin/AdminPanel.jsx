import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const AdminPanel = (props) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div
          className={`${
            props.type == props.check.toUpperCase() ? "bg-off " : "bg-[#CCAD8F]"
          } w-full cursor-pointer hover:bg-off transition-all duration-200`}
          onClick={() => props.onClick()}
        >
          <p
            className={`text-lg p-4 text-black ${
              props.type == props.check.toUpperCase() ? "shadow-md" : ""
            }`}
          >
            <span className="mr-4"></span>
            {props.type}
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
