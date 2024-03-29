import "./Sponsors.css";
// import { useState, useRef, useEffect } from "react";
// import Now from "./Now/Now";
import Title from "./Title";
// import Associate from "./Associate";
// import Org from "./Org";
// import Past from "./Past/Past";

const Sponsors = () => {
  // const [set, setState] = useState(1);
  // const animateRef = useRef();

  // useEffect(() => {
  //   const applyContainerProperties = () => {
  //     animateRef.current.classList.add("effect-container");
  //   };

  //   const onClick = () => {
  //     setTimeout(() => {
  //       animateRef.current.classList.remove("activeCeleb");
  //     }, 500);
  //     animateRef.current.classList.add("activeCeleb");
  //   };

  //   applyContainerProperties();

  //   animateRef.current.addEventListener("mouseup", onClick);

  //   const cleanupRef = animateRef.current;

  //   return () => {
  //     cleanupRef.removeEventListener("mouseup", onClick);
  //   };
  // });

  return (
    <div className="image flex flex-col justify-center items-center">
      <h1 className="text-darker mt-[70px] text-center pt-[35px] pb-[28px] text-[40px] font-bold tracking-wide japanFont"></h1>
      {/* <div ref={animateRef} className="text-center">
        <span
          onClick={() => setState(1)}
          id="space"
          className="text-light hover:text-dark mr-[30px] sm:mr-[50px] xl:mr-[200px] cursor-pointer text-[12px] xs:text-[17px] lg:text-[20px] transition ease-in-out duration-500"
        >
          TITLE SPONSORS
        </span>
        <span
          onClick={() => setState(2)}
          className="text-light hover:text-dark cursor-pointer text-[12px] xs:text-[17px] lg:text-[20px] transition ease-in-out duration-500"
        >
          ASSOCIATE SPONSORS
        </span>

        <div id="bar" className={set === true ? "flex justify-end" : ""}></div>
      </div> */}
      <div className="mx-[50px] lg:mx-[100px] xl:mx-[150px] mt-[33px]">
        {/* {set === true ? <Now /> : <Past />} */}
        {/* {set === 1 ? <Title /> : <Associate />} */}
        {/* set === 2 ? <Org /> : <Tech /> */}
        {/* <Past /> */}
        <Title />
        {/* <Associate /> */}
      </div>
    </div>
  );
};

export default Sponsors;
