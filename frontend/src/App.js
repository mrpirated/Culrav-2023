import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

//Pages
import Login from "./Pages/login/Login";
import Team from "./Pages/Team/Team";
import Dashboard from "./Pages/Dashboard/Dashboard";

//Components
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Home from "./Components/Home/Home";
import Trailer from "./Components/Youtube/Trailer";
import Events from "./Components/Events/Events";
import Celebs from "./Components/Celebs/Celebs";
import Previous from "./Components/Youtube/Previous";
import Sponsors from "./Components/Sponsors/Sponsors";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/AboutUs/AboutUs";
import Preloader from "./Components/Preloader/Preloader";

function App() {
  const List = [
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
    "./SponsorsImages/Logo.png",
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/flyingButterflies.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <>
                <Preloader />
                <Navbar />
                <ScrollToTop />
                <div className="HomeBack">
                  <Home />
                </div>
                <div className="AboutBack">
                  <AboutUs />
                  <Trailer />
                </div>
                <div className="EventsBack">
                  <Events />
                  <Celebs />
                  <Previous />
                </div>
                <div className="SponsorBack">
                  <Sponsors ImageList={List} />
                  <Contact />
                </div>
              </>
            }
          ></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { useEffect } from "react";
// import Plx from "react-plx";
// import { Parallax } from "react-parallax";

// //Pages
// import Login from "./Pages/login/Login";
// import Team from "./Pages/Team/Team";

// //Components
// import Navbar from "./Components/Navbar/Navbar";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
// import Home from "./Components/Home/Home";
// import Trailer from "./Components/Youtube/Trailer";
// import Events from "./Components/Events/Events";
// import Celebs from "./Components/Celebs/Celebs";
// import Previous from "./Components/Youtube/Previous";
// import Sponsors from "./Components/Sponsors/Sponsors";
// import Contact from "./Components/Contact/Contact";
// import AboutUs from "./Components/AboutUs/AboutUs";

// function App() {
//   const List = [
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//   ];

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "/flyingButterflies.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   });

//   return (
//     <div className="">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />}></Route>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Navbar />
//                 <ScrollToTop />
//                 <Plx
//                   className="MyAwesomeParallax"
//                   parallaxData={[
//                     {
//                       start: 0,
//                       end: 1000,
//                       properties: [
//                         {
//                           startValue: 0,
//                           endValue: -500,
//                           property: "translateY",
//                         },
//                       ],
//                     },
//                   ]}
//                   style={{}}
//                 >
//                   <div className="HomeBack">
//                     <Home />
//                   </div>
//                 </Plx>
//                 <Plx
//                   className="MyAwesomeParallax"
//                   parallaxData={[
//                     {
//                       start: 0,
//                       end: 2000,
//                       properties: [
//                         {
//                           startValue: 0,
//                           endValue: -4000,
//                           property: "translateY",
//                         },
//                       ],
//                     },
//                   ]}
//                   style={{}}
//                 >
//                   <div className="AboutBack">
//                     <AboutUs />
//                   </div>
//                 </Plx>
//                 <Plx
//                   className="MyAwesomeParallax"
//                   parallaxData={[
//                     {
//                       start: 0,
//                       end: 1000,
//                       properties: [
//                         {
//                           startValue: 0,
//                           endValue: -2000,
//                           property: "translateY",
//                         },
//                       ],
//                     },
//                   ]}
//                   style={{}}
//                 >
//                   <div className="EventsBack">
//                     <Trailer />
//                     <Events />
//                     <Celebs />
//                     <Previous />
//                   </div>
//                   <div className="SponsorBack">
//                     <Sponsors ImageList={List} />
//                     <Contact />
//                   </div>
//                 </Plx>
//               </>
//             }
//           ></Route>
//           <Route path="/team" element={<Team />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { useEffect } from "react";
// import Plx from "react-plx";
// import { Parallax } from "react-parallax";

// //Pages
// import Login from "./Pages/login/Login";
// import Team from "./Pages/Team/Team";

// //Components
// import Navbar from "./Components/Navbar/Navbar";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
// import Home from "./Components/Home/Home";
// import Trailer from "./Components/Youtube/Trailer";
// import Events from "./Components/Events/Events";
// import Celebs from "./Components/Celebs/Celebs";
// import Previous from "./Components/Youtube/Previous";
// import Sponsors from "./Components/Sponsors/Sponsors";
// import Contact from "./Components/Contact/Contact";
// import AboutUs from "./Components/AboutUs/AboutUs";

// import img from "./Assets/Home/HomeBackground.jpg";

// function App() {
//   const List = [
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//     "./SponsorsImages/Logo.png",
//   ];

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "/flyingButterflies.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   });

//   return (
//     <div className="">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />}></Route>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Navbar />
//                 <ScrollToTop />
//                 <Parallax bgImage={img} strength={500}>
//                   <div style={{ height: "750px" }}>
//                     {/* <div className="HomeBack"> */}
//                     <Home />
//                     {/* </div> */}
//                   </div>
//                 </Parallax>
//                 <Parallax>
//                   <div className="AboutBack">
//                     <AboutUs />
//                   </div>
//                 </Parallax>
//                 {/* <Plx
//                   className="MyAwesomeParallax"
//                   parallaxData={[
//                     {
//                       start: 0,
//                       end: 1000,
//                       properties: [
//                         {
//                           startValue: 0,
//                           endValue: -2000,
//                           property: "translateY",
//                         },
//                       ],
//                     },
//                   ]}
//                   style={{}}
//                 > */}
//                 <div className="EventsBack">
//                   <Trailer />
//                   <Events />
//                   <Celebs />
//                   <Previous />
//                 </div>
//                 <div className="SponsorBack">
//                   <Sponsors ImageList={List} />
//                   <Contact />
//                 </div>
//                 {/* </Plx> */}
//               </>
//             }
//           ></Route>
//           <Route path="/team" element={<Team />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
