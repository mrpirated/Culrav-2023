const config = {
	// baseUrl: process.env.REACT_APP_BASE_URL,
	baseUrl: `http://localhost:5008/api`,
	environment: process.env.REACT_APP_ENVIRONMENT || "development",
	login: "/login",
	signup: "/signup",
	getCommiteeEvents: "/getCommiteeEvents",
	getCommitees: "/getCommitees",
	getUserData: "/getUserData",
	addECs: "/addECs",
	addPOCs: "/addPOCs",
	createTeam: "/createTeam",
	addMemberToTeam: "/addMemberToTeam",
	getUserTeams: "/getUserTeams",
	removeMemberFromTeam: "/removeMemberFromTeam",
	activateTeamLink: "/activateTeamLink",
	getOrganizingTeam: "/getOrganizingTeam",
	getImages: "/getImage",
	editEventDetails: "/editEventDetails",
	getAllPOCs: "/getAllPOCs",
	getAllECs: "/getAllECs",
	removePOCs: "/removePOCs",
	removeECs: "/removeECs",
	addHits: "/addHits",
	editUserProfile: "/editUserProfile",
	getUserPositions: "/getUserPositions",
};
export default config;
