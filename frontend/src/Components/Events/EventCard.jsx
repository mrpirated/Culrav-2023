import React, { useEffect, useState } from "react";
import img from "./Assests/cardTop.webp";
import getImageAPI from "../../api/getImageAPI";
function EventCard(props) {
  const [image, setImage] = useState(null);

  const getImage = async () => {
    setImage(getImageAPI("event", props.event_id));
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
          <p class="text-gray-700 mr-[15px] text-base">{props.event_tagline}</p>
          <div className="">
            <button
              className="hover:shadow-md mt-[20px] hover:bg-[#f43e4a] transition-all duration-100"
              onClick={handleClick}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
