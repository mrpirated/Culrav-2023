import React, { useState } from "react";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";

const Schedule = () => {
  const [day, setDay] = useState("day1");
  return (
    <div className="mt-[100px]">
      <h1 className="text-darker mb-[20px] text-center pt-[20px] md:pt-[50px] pb-[20px] md:pb-[40px] text-[40px] font-bold tracking-wide japanFont">
        SCHEDULE
      </h1>
      <div className="flex flex-row justify-between items-center w-full text-xl md:text-2xl font-semibold px-[10%] md:px-[25%] mb-[30px]">
        <div
          onClick={() => {
            setDay("day1");
          }}
          className={`cursor-pointer text-black ${
            day == "day1" && "bg-warm"
          }  px-4 py-2 rounded-md hover:bg-[#c1867a] transition-all duration-300`}
        >
          <p>Day 1</p>
        </div>
        <div
          onClick={() => {
            setDay("day2");
          }}
          className={`cursor-pointer text-black ${
            day == "day2" && "bg-warm"
          }  px-4 py-2 rounded-md hover:bg-[#c1867a] transition-all duration-300`}
        >
          <p>Day 2</p>
        </div>
        <div
          onClick={() => {
            setDay("day3");
          }}
          className={`cursor-pointer text-black ${
            day == "day3" && "bg-warm"
          }  px-4 py-2 rounded-md hover:bg-[#c1867a] transition-all duration-300`}
        >
          <p>Day 3</p>
        </div>
      </div>
      {day == "day1" && <Day1 />}
      {day == "day2" && <Day2 />}
      {day == "day3" && <Day3 />}
    </div>
  );
};

export default Schedule;
