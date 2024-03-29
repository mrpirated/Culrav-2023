import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

//Pages
import Login from "./Pages/login/Login";

// import NavPageLogin from "./Pages/login/NavPage";
import AllTeams from "./Pages/Team/AllTeams";
import AllSponsors from "./Pages/Sponsors/AllSponsors";
import NavPageTeam from "./Pages/Team/NavPage";
import NavPageSchedule from "./Components/Schedule/NavPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoadingProvider from "./Components/LoadingProvider";
import { useDispatch, useSelector } from "react-redux";
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
import getUserDataAPI from "./api/getUserDataAPI";
import ProtectedRoute from "./Components/ProtectedRoute";
import {
	loggedWithToken,
	tokenChecked,
	setLoading,
	setPOC,
	setEC,
	setCommitees,
	setEvents,
	setPOCs,
	setTeams,
} from "./store/auth";
import addHitsAPI from "./api/addHitsAPI";
import getUserPositionsAPI from "./api/getUserPositionsAPI";
import getUserTeamsAPI from "./api/getUserTeamsAPI";
import RegisterEvent from "./Pages/Dashboard/RegisterEvent";
import JoinToTeamWithLink from "./Pages/Dashboard/JoinToTeamWithLink";
import Schedule from "./Components/Schedule/Schedule";
function App() {
	// const [state, dispatchs] = useReducer(authReducer, {
	// 	user: null,
	// });
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const List = [
		"https://images.culrav.online/aangan.jpg",
		"https://images.culrav.online/agf.jpg",
		"https://images.culrav.online/albaik.jpg",
		"https://images.culrav.online/amul.png",
		"https://images.culrav.online/barbeque.jpg",
		"https://images.culrav.online/bean.jpg",
		"https://images.culrav.online/bob.png",
		"https://images.culrav.online/btscafe.jpg",
		"https://images.culrav.online/cables.jpg",
		"https://images.culrav.online/Cafe96.webp",
		"https://images.culrav.online/chinabox.png",
		"https://images.culrav.online/cocacola.png",
		"https://images.culrav.online/dainik.jpeg",
		"https://images.culrav.online/drishti.png",
		"https://images.culrav.online/emt.png",
		"https://images.culrav.online/goafood.jpg",
		"https://images.culrav.online/holic.png",
		"https://images.culrav.online/iic.png",
		"https://images.culrav.online/iitd.png",
		"https://images.culrav.online/kulhad.jpg",
		"https://images.culrav.online/madeeasy.jpeg",
		"https://images.culrav.online/mhm.png",
		"https://images.culrav.online/momo.jpg",
		"https://images.culrav.online/mood.jpg",
		"https://images.culrav.online/octave.jpg",
		"https://images.culrav.online/pregrad.png",
		"https://images.culrav.online/realme.png",
		"https://images.culrav.online/redfm.jpg",
		"https://images.culrav.online/rhythm.jpg",
		"https://images.culrav.online/rv.jpg",
		"https://images.culrav.online/shring.jpg",
		"https://images.culrav.online/sirona.png",
		"https://images.culrav.online/skippi.jpeg",
		"https://images.culrav.online/southhut.jpg",
		"https://images.culrav.online/tattoo.jpg",
		"https://images.culrav.online/varun.png",
		"https://images.culrav.online/vlcc.jpeg",
	];
	useEffect(() => {
		addHitsAPI();
	}, []);
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "/flyingButterflies.js";
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	useEffect(() => {
		if (auth.isauth)
			getUserPositionsAPI({ token: auth.token }).then((response) => {
				dispatch(setCommitees({ commitees: response.data.commitees }));
				dispatch(setEvents({ events: response.data.events }));
				dispatch(setPOC({ isPOC: response.data.isPOC }));
				dispatch(setEC({ isEC: response.data.isEC }));
				dispatch(setPOCs({ poc: response.data.poc }));
			});
	}, [auth.isauth]);
	useEffect(() => {
		if (auth.isauth) {
			getUserTeamsAPI({ token: auth.token }).then((response) => {
				dispatch(setTeams({ teams: response.data }));
			});
		}
	}, [auth.isauth]);
	useEffect(() => {
		dispatch(setLoading({ loading: true }));
		if (!auth.isauth && localStorage.getItem("token")) {
			const token = JSON.parse(localStorage.getItem("token"));
			getUserDataAPI({ token: token })
				.then((response) => {
					if (response.success) {
						dispatch(loggedWithToken({ user: response.data, token: token }));
					} else {
						dispatch(tokenChecked());
					}
				})
				.finally(() => {
					dispatch(setLoading({ loading: false }));
				});
		} else {
			dispatch(tokenChecked());
			dispatch(setLoading({ loading: false }));
		}
	}, []);
	return (
		<div className=''>
			<LoadingProvider active={auth.isloading}>
				<Toaster position='top-right' reverseOrder={false} />
				<BrowserRouter>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route
							exact
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
										<Schedule />
										<Celebs />
										<Previous />
									</div>
									<div className='SponsorBack'>
										<Sponsors ImageList={List} />
										<Contact />
									</div>
								</>
							}
						/>
						<Route
							path='/team'
							element={
								<>
									<NavPageTeam />
									<AllTeams />
								</>
							}
						/>
						<Route
							path='/schedule'
							element={
								<>
									<NavPageSchedule />
									<Schedule />
								</>
							}
						/>
						<Route
							path='/sponsors'
							element={
								<>
									<NavPageTeam />
									<AllSponsors />
								</>
							}
						/>
						<Route
							path='/dashboard'
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/registerevent'
							element={
								<ProtectedRoute>
									<RegisterEvent />
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/jointeam/:link'
							element={
								<ProtectedRoute>
									<JoinToTeamWithLink />
								</ProtectedRoute>
							}
						/>
						;
					</Routes>
				</BrowserRouter>
			</LoadingProvider>
		</div>
	);
}

export default App;
