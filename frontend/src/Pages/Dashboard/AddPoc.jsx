import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import toast from "react-hot-toast";
import addPOCsAPI from "../../api/addPOCsAPI";
import { useSelector } from "react-redux";
import getCommiteesAPI from "../../api/getCommiteesAPI";
const AddPoc = (props) => {
  const { commitee } = props;
  const [selectedCommitee, setSelectedCommitee] = useState(null);
  const [poc, setPoc] = useState("");
  const auth = useSelector((state) => state.auth);
  const { setRefreshList } = props;

  const onEventchange = async (event) => {
    setSelectedCommitee(event.value);
  };

  const handleClick = () => {
    if (selectedCommitee == null) {
      toast.error("Select a commitee first");
    } else if (poc == "") {
      toast.error("Enter POC Id");
    } else {
      addPOCsAPI({
        token: auth.token,
        poc_id: poc,
        commitee_id: commitee[selectedCommitee].value,
      }).then((response) => {
        console.log(response);
        if (response.success) {
          toast.success(response.message);
          setRefreshList(true);
        } else toast.error(response.message);
      });
    }
  };

  return (
    <>
      <div className="bg-light my-2 w-full rounded-md mx-1 box-border p-4">
        <div>
          <p className="text-2xl font-medium">Add POC</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="selectCommitee"
            className="block mb-2 font-medium text-black"
          >
            Select Commitee
          </label>
          <Select
            options={commitee}
            id="selectCommitee"
            className="w-full"
            onChange={onEventchange}
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="teamName"
            className="block mb-2 font-medium text-black"
          >
            Enter POC Culrav Id
          </label>
          <div className="flex flex-row">
            <input
              type="text"
              value="CUL - "
              disabled={true}
              className="w-[70px] rounded-lg p-2 focus:ring-red focus:border-red mr-2 bg-white"
            ></input>
            <input
              type="text"
              onChange={(e) => {
                setPoc(e.target.value);
              }}
              value={poc}
              id="teamName"
              className="w-full  rounded-lg p-2 focus:ring-red focus:border-red"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            className="hover:shadow-md mt-[20px] hover:bg-[#f43e4a] transition-all duration-100"
            onClick={handleClick}
          >
            Add POC
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPoc;
