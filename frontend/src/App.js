// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
// import Sponsors from "./Components/Sponsors";

//Components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <Home />
      {/* <Sponsors /> */}
    </div>
  );
}

export default App;
