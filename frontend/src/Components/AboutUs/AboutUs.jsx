import AboutCulrav from "./AboutCulrav";
import "./AboutUs.css";

function AboutUs() {
  //   const [Text1, setText] = useState("B");

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setText((Text1) => (Text1=="B"?"ャ":"B"));
  //     }, 7000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <>
      <div
        className="px-4 py-12 sm:p-12 flex flex-col lg:flex-row h-auto lg:h-screen w-full aboutMnnit"
        id="about"
      >
        <div className="flex mx-2 lg:my-4 justify-center items-center relative w-full">
          <div className="w-[25vw] h-[25vw] rounded-full bg-red"></div>
          <p className="text-center text-3xl sm:text-6xl font-bold text-white absolute t-[50%] l-[50%] japanFont">
            A<span className="spanB japanFont">B</span>OU
            <span className="spanT japanFont">T</span> MNN
            <span className="spanI japanFont">I</span>T
          </p>
        </div>
        <div className="flex flex-col my-4 sm:mx-2 justify-center items-center sm:px-4 text-center lg:text-left">
          <p className="text-lg sm:text-2xl sm:p-4 text-darker  font-semibold">
            Motilal Nehru National Institute of Technology Allahabad, Prayagraj
            (MNNIT) is an Institute with total commitment to quality and
            excellence in academic and cultural pursuits .
          </p>
          <p className="text-sm sm:text-xl p-4">
            Initiated in 1987, Culrav has emerged as the most resplendent
            college based fest in Northern India and as one of the most awaited
            cultural event of the country. We have breathtaking competitions,
            glamorous pro-nites and appealing informal events due to which
            Culrav has attracted humongous footfall from colleges all over the
            country. The likes of "Farhan Akhtar, "Piyush Mishra " and "Vinay
            Pathak" have graced Culrav’s stage along with exhilarating
            performances from “The Local Train”, ”Shirley Sethia”, "DJ Marnik"
            and many more.
          </p>
        </div>
      </div>
      <AboutCulrav />
    </>
  );
}

export default AboutUs;
