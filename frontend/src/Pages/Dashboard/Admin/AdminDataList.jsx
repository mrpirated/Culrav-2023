import React, { useEffect, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import getAllPocAPI from "../../../api/getAllPOCsAPI";

const AdminDataList = (props) => {
  const [data, setData] = useState([]);
  const { pocs, ecs, type } = props;
  const deleteHandler = () => {
    const deleteCnf = window.confirm("Are you sure want to delete User");
    console.log(deleteCnf);
  };

  //   useEffect(async () => {
  //     if (!props.type) return;
  //     // call api to fetch list of type
  //     // fetching poc
  //     // if ((props.type == "poc")){
  //     //   const response = await getAllPocAPI();
  //     //   console.log(response);
  //     //   setData(response.data);
  //     // }
  //   }, [props.type]);
  return (
    <>
      <div className="bg-light my-2 w-full rounded-md mx-1 box-border p-4 h-[500px] overflow-auto">
        <div>
          <p className="text-2xl font-medium">
            List Of {props.type.toUpperCase()}s
          </p>
          {type === "poc" ? (
            <div className="mt-4">
              {pocs.map((element) => {
                return (
                  <div className="">
                    <div
                      key={element}
                      className="hover:cursor-pointer px-4 py-2 bg-warm rounded-md my-2 flex w-full justify-between"
                    >
                      <div className="flex flex-col">
                        <p className="font-semibold text-xl">
                          {element.poc_name}
                        </p>
                        <p className="font-semibold text-xs">
                          ({element.poc_culrav_id})
                        </p>
                        <p className="text-md font-semibold mt-2">
                          {element.commitee_name}
                        </p>
                      </div>
                      <div
                        className="flex items-center text-red cursor-pointer"
                        onClick={deleteHandler}
                      >
                        <RemoveCircleOutlineIcon />
                        <p>Delete</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-4">
              {ecs.map((element) => {
                return (
                  <div className="">
                    <div
                      key={element}
                      className="hover:cursor-pointer px-4 py-2 bg-warm rounded-md my-2 flex w-full justify-between"
                    >
                      <div className="flex flex-col">
                        <p className="font-semibold text-xl">
                          {element.ec_name}
                        </p>
                        <p className="font-semibold text-xs">
                          ({element.ec_culrav_id})
                        </p>
                        <p className="text-md font-semibold mt-2">
                          {element.event_name}
                        </p>
                        <p className="text-xs ">{element.commitee_name}</p>
                      </div>
                      <div
                        className="flex items-center text-red cursor-pointer"
                        onClick={deleteHandler}
                      >
                        <RemoveCircleOutlineIcon />
                        <p>Delete</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDataList;
