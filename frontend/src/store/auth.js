import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	isloading: false,
	user: {},
	token: "",
	isauth: false,
	checkToken: false,
	isPOC: false,
	isEC: false,
	commitees: [],
	events: [],
	poc: [],
	teams: [],
};
const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loggedIn: (auth, action) => {
			auth.user = action.payload.user;
			auth.token = action.payload.token;
			localStorage.setItem("token", JSON.stringify(auth.token));
			auth.isauth = true;
		},
		loggedWithToken: (auth, action) => {
			auth.user = action.payload.user;
			auth.token = action.payload.token;
			auth.isauth = true;
			auth.checkToken = true;
		},
		tokenChecked: (auth, action) => {
			auth.checkToken = true;
		},
		userUpdated: (auth, action) => {
			auth.user = action.payload.user;
			auth.updateUser = false;
		},
		loggedOut: (auth, action) => {
			auth.user = {};
			auth.token = "";
			auth.isauth = false;
			localStorage.clear();
		},
		setLoading: (auth, action) => {
			auth.isloading = action.payload.loading;
		},
		setUpdateUser: (auth, action) => {
			auth.updateUser = true;
		},
		setPOC: (auth, action) => {
			auth.isPOC = action.payload.isPOC;
		},
		setEC: (auth, action) => {
			auth.isEC = action.payload.isEC;
		},
		setCommitees: (auth, action) => {
			auth.commitees = action.payload.commitees;
		},
		setEvents: (auth, action) => {
			auth.events = action.payload.events;
		},
		setPOCs: (auth, action) => {
			auth.poc = action.payload.poc;
		},
		setTeams: (auth, action) => {
			auth.teams = action.payload.teams;
		},
	},
});

export const {
	loggedIn,
	loggedOut,
	loggedWithToken,
	setLoading,
	tokenChecked,
	userUpdated,
	setUpdateUser,
	setPOC,
	setEC,
	setCommitees,
	setEvents,
	setPOCs,
	setTeams,
} = slice.actions;

export default slice.reducer;
