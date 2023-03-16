import { useState, useRef, useEffect } from "react";
import Now from "./Now/Now";
import Past from "./Past/Past";

const Celebs = () => {
  const [set, setState] = useState(true);
  const animateRef = useRef();

  useEffect(() => {
    const applyContainerProperties = () => {
      animateRef.current.classList.add("effect-container");
    };

    const onClick = () => {
      setTimeout(() => {
        animateRef.current.classList.remove("activeCeleb");
      }, 500);
      animateRef.current.classList.add("activeCeleb");
    };

    applyContainerProperties();

    animateRef.current.addEventListener("mouseup", onClick);

    const cleanupRef = animateRef.current;

    return () => {
      cleanupRef.removeEventListener("mouseup", onClick);
    };
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-darker mt-[70px] text-center pt-[35px] pb-[28px] text-[40px] font-bold tracking-wide japanFont">
        CELEBS
      </h1>
      <div ref={animateRef} className="relative text-center">
        <span
          onClick={() => setState(false)}
          id="space"
          className="text-darker mr-[200px] cursor-pointer text-[20px] transition ease-in-out duration-500"
        >
          PAST
        </span>
        <span
          onClick={() => setState(true)}
          className="text-darker cursor-pointer text-[20px] transition ease-in-out duration-500"
        >
          NOW
        </span>
        <div id="bar" className={set === true ? "flex justify-end" : ""}>
          <div className="bg-black w-[70px] mt-[-2px] mr-[0px] h-[2px] mb-[40px]"></div>
        </div>
      </div>
      <div className="mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        {set === true ? <Now /> : <Past />}
      </div>
    </div>
  );
};

export default Celebs;
