import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { User } from "./User/User";

//Pages
import Login from "./Pages/login/Login";
// import NavPageLogin from "./Pages/login/NavPage";
import Team from "./Pages/Team/Team";
import NavPageTeam from "./Pages/Team/NavPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NavPageDash from "./Pages/Dashboard/NavPage";

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
  const { user } = User();

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
          <Route
            path="/login"
            element={
              !user ? (
                <>
                  {/* <NavPageLogin /> */}
                  <Login />
                </>
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          ></Route>
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
          <Route
            path="/team"
            element={
              <>
                <NavPageTeam />
                <Team />
              </>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              user ? (
                <>
                  <NavPageDash />
                  <Dashboard />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          ></Route>
          ;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
