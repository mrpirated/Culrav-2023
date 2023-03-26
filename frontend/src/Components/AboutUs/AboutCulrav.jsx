import React from "react";
import "./AboutUs.css";

function AboutCulrav() {
  return (
    <div className="px-4 py-12 sm:p-12 flex flex-col-reverse lg:flex-row h-auto lg:h-screen w-full aboutCulrav">
      <div className="flex xl:ml-[100px] flex-col mx-2 pb-[50px] lg:pb-[150px] justify-center items-start py-1 mt-4">
        <p className="text-lg sm:text-2xl py-1 text-light  font-semibold">
          Events and Competitions
        </p>
        <p className="text-sm text-white sm:text-xl">
          We have exciting events in the domains of Dramatics, Dance, Fashion,
          Literary, Arts, Photography and Film Making. Come participate and make
          your presence felt.
        </p>
        <p className="text-lg sm:text-2xl py-1 mt-4 text-light  font-semibold">
          Kavyasandhya
        </p>
        <p className="text-sm text-white sm:text-xl">
          The inaugural flagship poetry night of Culrav attracts connoisseurs of
          poetry, showcasing their talent which will be judged by eminent
          personalities.
        </p>
        <p className="text-lg sm:text-2xl py-1 mt-4 text-light  font-semibold">
          Celebrity and Pro-Nites
        </p>
        <p className="text-sm text-white sm:text-xl ">
          The last two nights of Culrav witnesses thrilling performances from
          famous celebrities and artists in the fields of rock,hip-hop or EDM.
        </p>
        <p className="text-lg sm:text-2xl py-1 mt-4 text-light  font-semibold">
          Informal Events
        </p>
        <p className="text-sm text-white sm:text-xl">
          From "Stand-up Comedy" to "Googly Cricket" we have a wide variety of
          events in our arena, to enthrall the audiences all the time wherein
          they stand a chance to win lots of goodies and merchandise.
        </p>
      </div>
      <div className="lg:ml-[50px] flex mx-2 lg:pb-[150px] justify-center items-center relative">
        <div className="w-[25vw] h-[25vw] rounded-full bg-red"></div>
        <p className="text-center text-3xl sm:text-6xl font-bold text-white absolute t-[50%] l-[50%] japanFont">
          AB<span className="spanB japanFont">O</span>UT
          <span className="spanT japanFont"> C</span>UL
          <span className="spanI japanFont">R</span>
          AV
        </p>
      </div>
    </div>
  );
}

export default AboutCulrav;
