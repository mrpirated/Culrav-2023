import React from "react";

const AdminPanel = (props) => {
  return (
    <>
      <div className="flex flex-col flex-wrap w-full h-[70px]">
        <div
          className={`${
            props.type == props.check.toUpperCase() ? "bg-warm" : "bg-light"
          } md:mt-[8px] my-2 w-full rounded-md cursor-pointer hover:bg-warm transition-all duration-200`}
          onClick={() => props.onClick()}
        >
          <p className="text-2xl p-4 text-black ">{props.type}</p>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
