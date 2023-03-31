import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const ProfileSectionInDashboard = (props) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div
          className={`${
            (props.check!=null && props.type == props.check.toUpperCase())
              ? "bg-[#CCAD8F] shadow-md"
              : "bg-brown2"
          } w-full cursor-pointer hover:bg-[#CCAD8F] transition-all duration-200`}
          onClick={() => props.onClick()}
        >
          <p className="text-lg p-4 text-white ">
            <span className="mr-4">
              <AccountCircleIcon />
            </span>
            {props.type}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileSectionInDashboard;
