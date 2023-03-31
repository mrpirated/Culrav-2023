import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import img from "./Assests/cardTop.webp";
import EventDetails from "./EventDetails";
import getImageAPI from "../../api/getImageAPI";
function EventCard(props) {
  const [image, setImage] = useState(null);
  // const [display, setdisplay] = useState(false);
  const [innerdisplay, setinnerdisplay] = useState(false);

  console.log("Event Card", props);

  const getImage = async () => {
    setImage(getImageAPI("event", props.event_id));
  };

  useEffect(() => {
    getImage();
  }, []);

  const handleClose = () => {
    //toast to display coming soon
    setinnerdisplay(!innerdisplay);
    // toast("Registeration for events Coming Soon", {
    //   icon: "",
    // });
  };

  return (
    <>
      <div className="w-[80vw] xs:w-[70vw] md:w-[30vw] bg-white lg:w-[23vw] m-2 rounded shadow-lg flex flex-col justify-between overflow-hidden hover:shadow-2xl">
        <div className="bg-white">
          <div>
            <img
              className="w-full h-[300px] object-cover"
              src={image ? image : img}
              alt="Card"
            />
            <div className="px-6 pt-4">
              <div className="font-bold text-xl mb-2">{props.name}</div>
              <p class="text-gray-700 pr-[10px] text-base">
                {props.event_tagline}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="px-6 pb-4">
              <button
                className="hover:shadow-md mt-[20px] cursor-pointer hover:bg-[#f43e4a] transition-all duration-100"
                onClick={handleClose}
              >
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      {innerdisplay && <EventDetails {...props} handleClose={handleClose} />}
    </>
  );
}

export default EventCard;
