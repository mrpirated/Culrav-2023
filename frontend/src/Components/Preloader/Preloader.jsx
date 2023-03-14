import React, { useState } from "react";
import "./Preloader.css";
import circle from "../../Assets/Preloader/circle.webp";
import textOnly from "../../Assets/Preloader/textOnly.webp";

function Preloader() {
  const [visibility, setVisibility] = useState("fixed");
  // window.addEventListener("load",function(){
  //   setVisibility("hidden");
  // })

  const handleload = () => {
    setVisibility("hidden");
  };

  setTimeout(handleload,4000);

  return (
    <>
      <div
        className={`Preloader h-screen w-screen ${visibility} z-[90] overflow-hidden flex justify-center items-center`}
      >
        <div className="relative">
          <img
            src={textOnly}
            className=" increase-opacity w-[300px] fixed top-[50%] left-[50%] z-[100]"
            style={{ transform: "translate(-35%, -25%)" }}
          />
        </div>
        <img src={circle} className="slide-top blink w-[150px]" />
      </div>
    </>
  );
}

export default Preloader;
