import React from "react";
import Select from "react-select";

const options = [
  { value: 6, label: "Anunaad" },
  { value: 2, label: "Rangsaazi" },
  { value: 5, label: "Dark Room" },
  { value: 7, label: "Litmuse" },
  { value: 3, label: "Razzmatazz" },
  { value: 4, label: "Spandan" },
  { value: 1, label: "Rangmanch" },
];

function CreateTeam() {
  return (
    <>
      <div className="bg-light my-2 w-1/2 rounded-md mx-1 box-border p-4">
        <div>
          <p className="text-2xl font-medium">Create Team</p>
        </div>
        <div className="mt-4">
          <label for="selectCommitee" class="block mb-2 font-medium text-black">
            Select Commitee
          </label>
          <Select
            options={options}
            id="selectCommitee"
            className="w-full"
            required
          />
        </div>
        <div className="mt-4">
          <label for="selectEvents" class="block mb-2 font-medium text-black">
            Select Event
          </label>
          <Select
            options={options}
            id="selectEvents"
            className="w-full"
            required
          />
        </div>
        <div className="mt-4">
          <label for="teamName" class="block mb-2 font-medium text-black">
            Team Name
          </label>
          <input
            type="text"
            id="teamName"
            className="w-full  rounded-lg p-2 focus:ring-red focus:border-red"
            required
          />
        </div>
        <div className="mt-4">
          <button className="hover:shadow-md hover:bg-dark">Create Team</button>
        </div>
      </div>
    </>
  );
}

export default CreateTeam;
