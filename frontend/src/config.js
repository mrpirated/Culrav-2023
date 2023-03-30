const config = {
	baseUrl: process.env.REACT_APP_BASE_URL,
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
	getAllPOCs : "/getAllPOCs",
	getAllECs : "/getAllECs"
};
export default config;
