import "./Team.css";
import { useState, useRef, useEffect } from "react";
// import Now from "./Now/Now";
import Faculties from "./Faculties";
import Tech from "./Tech";
import Org from "./Org";
// import Past from "./Past/Past";

const Celebs = () => {
  const [set, setState] = useState(1);
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
    <div className="image flex flex-col justify-center items-center">
      <h1 className="text-darker mt-[70px] text-center pt-[35px] pb-[28px] text-[40px] font-bold tracking-wide japanFont">
        {/* OUR TEAM */}
      </h1>
      <div ref={animateRef} className="text-center">
        <span
          onClick={() => setState(1)}
          id="space"
          className="text-light mr-[30px] sm:mr-[50px] xl:mr-[200px] cursor-pointer text-[12px] xs:text-[17px] lg:text-[20px] transition ease-in-out duration-500"
        >
          FACULTIES
        </span>
        <span
          onClick={() => setState(2)}
          className="text-light mr-[30px] sm:mr-[50px] xl:mr-[200px] cursor-pointer text-[12px] xs:text-[17px] lg:text-[20px] transition ease-in-out duration-500"
        >
          ORGANIZING TEAM
        </span>
        <span
          onClick={() => setState(3)}
          className="text-light cursor-pointer text-[12px] xs:text-[17px] lg:text-[20px] transition ease-in-out duration-500"
        >
          TECH TEAM
        </span>
        <div id="bar" className={set === true ? "flex justify-end" : ""}>
          {/* <div className="bg-black w-[70px] mt-[-2px] mr-[0px] h-[2px] mb-[40px]"></div> */}
        </div>
      </div>
      <div className="mx-[50px] lg:mx-[100px] xl:mx-[150px] mt-[33px]">
        {/* {set === true ? <Now /> : <Past />} */}
        {set === 1 ? <Faculties /> : set === 2 ? <Org /> : <Tech />}
        {/* <Past /> */}
      </div>
    </div>
  );
};

export default Celebs;
