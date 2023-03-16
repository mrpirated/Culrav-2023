import React from "react";
import img from "./Assests/cardTop.webp";

function EventCard() {
  return (
    <>
      <div class="w-[80vw] xs:w-[70vw] md:w-[30vw] lg:w-[23vw] m-2 rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl">
        <img
          class="w-full"
          src={img}
          alt="Card-image"
        />
        <div class="px-6 py-4 bg-white">
          <div class="font-bold text-xl mb-2 ">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        {/* <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
    </>
  );
}

export default EventCard;
