import React, { useState, useEffect } from "react";

const UserProfile = (props) => {
  console.log("props", props);
  const [userName, setUserName] = useState(
    props.userData.name ? props.userData.name : ""
  );
  const [userEmail, setUserEmail] = useState(
    props.userData.email ? props.userData.email : ""
  );
  const [userPhone, setUserPhone] = useState(
    props.userData.phone ? props.userData.phone : ""
  );
  const [userCulravId, setUserCulravId] = useState(
    props.userData.culrav_id ? props.userData.culrav_id : ""
  );
  const [mnnitId, setMnnitId] = useState(
    props.userData.mnnit_id ? props.userData.mnnit_id : ""
  );
  return (
    <>
      <div className="bg-OccurYellow w-[95%] md:w-[80%] lg:w-1/2 m-2 p-4 shadow-md h-[600px] box-border overflow-auto rounded-md ">
        {/* <p className="text-xl font-bold">User Details</p> */}
        <div className="bg-lightYellow w-full p-4 rounded-md flex justify-center">
          <p className="text-2xl font-bold">{userCulravId}</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="userEmail"
            className="block mb-2 font-medium text-black"
          >
            Email :
          </label>
          <input
            type="text"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            value={userEmail}
            id="userEmail"
            className="w-full  rounded-lg p-2 focus:ring-red focus:border-red"
            required
            disabled={true}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="mnnitId"
            className="block mb-2 font-medium text-black"
          >
            MNNIT ID :
          </label>
          <input
            type="text"
            onChange={(e) => {
              setMnnitId(e.target.value);
            }}
            value={mnnitId}
            id="mnnitId"
            placeholder="Enter your MNNIT ID"
            className="w-full  rounded-lg p-2"
            required
            disabled={true}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="userName"
            className="block mb-2 font-medium text-black"
          >
            Full Name :
          </label>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            id="userName"
            className="w-full  rounded-lg p-2 focus:ring-red focus:border-red"
            required
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="userPhone"
            className="block mb-2 font-medium text-black"
          >
            Phone No.
          </label>
          <input
            type="text"
            onChange={(e) => {
              setUserPhone(e.target.value);
            }}
            value={userPhone}
            id="userPhone"
            className="w-full  rounded-lg p-2 focus:ring-red focus:border-red"
            required
          />
        </div>

        <div className="mt-4">
          <button className="hover:shadow-md bg-lightYellow hover:bg-[#f7e3a1] shadow-md transition-all duration-100 text-black">
            Edit Details
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
