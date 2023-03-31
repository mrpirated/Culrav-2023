import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const ProfileSectionInDashboard = (props) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div
          className={`${
            props.check != null && props.type == props.check.toUpperCase()
              ? "bg-off shadow-md"
              : "bg-[##CCAD8F]"
          } shadow-md w-full cursor-pointer hover:bg-off transition-all duration-200`}
          onClick={() => props.onClick()}
        >
          <p className="text-lg p-4 text-black ">
            <span className="mr-4">
              <PersonOutlineOutlinedIcon />
            </span>
            {props.type}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileSectionInDashboard;
