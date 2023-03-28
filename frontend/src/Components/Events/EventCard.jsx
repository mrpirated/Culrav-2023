import React, { useEffect, useState } from "react";
import img from "./Assests/cardTop.webp";

function EventCard(props) {
  const [image, setImage] = useState(null);

  const getImage = async () => {
    const response = await fetch(
      `https://testserver.culrav.online/api/getImage?type=event&event_id=${props.event_id}`
    );
    const json = await response.json();
    const imag = json.data.imageUrl;
    console.log("image", imag);
    setImage(imag);
  };

  useEffect(() => {
    getImage();
  }, []);

  console.log("event", props);
  const handleClick = () => {};
  return (
    <>
      <div className="w-[80vw] xs:w-[70vw] md:w-[30vw] lg:w-[23vw] m-2 rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl">
        <img
          className="w-full h-[300px] object-cover"
          src={image ? image : img}
          alt="Card"
        />
        <div className="px-6 py-4 h-full bg-white">
          <div className="font-bold text-xl mb-2 ">{props.name}</div>
          <p class="text-gray-700 text-base">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. */}
            {props.event_tagline}
          </p>
          <button
            className="hover:shadow-md mt-[20px] hover:bg-[#f43e4a] transition-all duration-100"
            onClick={handleClick}
          >
            REGISTER
          </button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
