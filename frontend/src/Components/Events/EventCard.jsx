import React from "react";
import img from "./Assests/cardTop.webp";

function EventCard(props) {
  const handleClick = () => {};
  return (
    <>
      <div class="w-[80vw] xs:w-[70vw] md:w-[30vw] lg:w-[23vw] m-2 rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl">
        <img class="w-full" src={img} alt="Card" />
        <div class="px-6 py-4 bg-white">
          <div class="font-bold text-xl mb-2 ">{props.name}</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <button
            className="hover:shadow-md hover:bg-[#f43e4a] transition-all duration-100"
            onClick={handleClick}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
