import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const AdminPanel = (props) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div
          className={`${
            props.type.toUpperCase() == props.check.toUpperCase() ? "bg-[#FFF1C5] " : "bg-[#F5BE8A]"
          } w-full cursor-pointer hover:bg-[#FFF1C5] transition-all duration-200`}
          onClick={() => props.onClick()}
        >
          <p
            className={`text-lg p-4 text-black font-semibold ${
              props.type == props.check.toUpperCase() ? "shadow-md" : ""
            }`}
          >
            {props.type}
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
