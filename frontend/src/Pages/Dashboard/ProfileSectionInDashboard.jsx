import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const ProfileSectionInDashboard = (props) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div
          className={`${
            props.check != null && props.type == props.check.toUpperCase()
              ? "bg-[#FFF1C5] shadow-md"
              : "bg-[#F5BE8A]"
          } w-full cursor-pointer hover:bg-[#FFF1C5] transition-all duration-200`}
          onClick={() => props.onClick()}
        >
          <p className="text-lg p-4 text-black font-bold">{props.type}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileSectionInDashboard;
