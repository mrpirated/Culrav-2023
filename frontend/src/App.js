import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useEffect, useReducer } from "react";
import { User } from "./User/User";
import toast, { Toaster } from "react-hot-toast";
import { authReducer } from "./Context/AuthContext";

//Pages
import Login from "./Pages/login/Login";

// import NavPageLogin from "./Pages/login/NavPage";
import Team from "./Pages/Team/Team";
import NavPageTeam from "./Pages/Team/NavPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NavPageDash from "./Pages/Dashboard/NavPage";
import DashboardAdmin from "./Pages/Dashboard/Admin/DashboardAdmin";
import DashboardPoc from "./Pages/Dashboard/poc/DashboardPoc";

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
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});
	const List = [
		"./images/ola.png",
		"./images/festpav.png",
		"./images/kwalitywalls.png",
		"./images/pizzahut.png",
		"./images/pepsi.png",
		"./images/bob.png",
		"./images/dainikjagran.png",
		"./images/goli.png",
		"./images/redfm.png",
		"./images/safeexpress.png",
		"./images/sbi.png",
		"./images/ias.jpg",
		"./images/cepta.png",
		"./images/vlcc.png",
		"./images/bk.png",
		"./images/dell.png",
		"./images/ktm.jpg",
		"./images/godrej.png",
		"./images/autodesk.jpg",
		"./images/ims.png",
		"./images/ald.png",
		"./images/gateforum.png",
		"./images/fbb.png",
		"./images/madeeasy.jpg",
		"./images/dell.png",
		"./images/godrej.png",
		"./images/dainikjagran.png",
		"./images/cepta.png",
		"./images/vlcc.png",
		"./images/sbi.png",
		"./images/bob.png",
		"./images/dell.png",
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
		<div className=''>
			<Toaster position='top-right' reverseOrder={false} />
			<BrowserRouter>
				<Routes>
					<Route
						path='/login'
						element={
							// !user ? (
							<>
								{/* <NavPageLogin /> */}
								<Login />
							</>
							// ) : (
							//   <Navigate to="/dashboard" />
							// )
						}
					></Route>
					<Route
						path='/'
						element={
							<>
								<Preloader />
								<Navbar />
								<ScrollToTop />
								<div className='HomeBack'>
									<Home />
								</div>
								<div className='AboutBack'>
									<AboutUs />
								</div>
								<div className='TrailerBack'>
									<Trailer />
									<Events />
									<Celebs />
									<Previous />
								</div>
								<div className='SponsorBack'>
									<Sponsors ImageList={List} />
									<Contact />
								</div>
							</>
						}
					></Route>
					<Route
						path='/team'
						element={
							<>
								<NavPageTeam />
								<Team />
							</>
						}
					></Route>
					<Route
						path='/dashboard'
						element={<Navigate to='/' />}
						// element={
						//   user ? (
						//     <>
						//       <NavPageDash />
						//       <Dashboard />
						//     </>
						//   ) : (
						//     <Navigate to="/login" />
						//   )
						// }
					></Route>
					;
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
