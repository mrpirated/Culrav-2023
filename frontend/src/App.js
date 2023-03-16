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
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
    "./img.png",
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
                </div>
                <div className="TrailerBack">
                  <Trailer />
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
