import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addMemberToTeamAPI from "../../api/addMemberToTeamAPI";
import { toast } from "react-hot-toast";
import addMemberToTeamLinkAPI from "../../api/addMemberToTeamLinkAPI";
import { setLoading, setTeams } from "../../store/auth";
import getUserTeamsAPI from "../../api/getUserTeamsAPI";
const AddTeamMembers = (props) => {
	const { handleClose } = props;
	const [teamLink, setTeamLink] = useState("");
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const handleClick = () => {
		if (teamLink != "") {
			dispatch(setLoading({ loading: true }));

			addMemberToTeamLinkAPI({
				token: auth.token,
				link: teamLink,
			})
				.then((response) => {
					if (response.success) {
						toast.success(response.message);
						setTeamLink("");
						return getUserTeamsAPI({ token: auth.token });
					} else {
						toast.error(response.message);
						return Promise.reject(response);
					}
				})
				.then((response) => {
					dispatch(setTeams({ teams: response.data }));
					handleClose();
				})
				.finally(() => {
					dispatch(setLoading({ loading: false }));
				});
		} else {
			toast.error("Enter team link to join");
		}
	};

	return (
		<div className='bg-OccurYellow my-2 w-full rounded-md box-border p-4'>
			<div>
				<p className='text-2xl font-medium'>JOIN TEAM</p>
			</div>
			<div className='mt-4'>
				<label htmlFor='teamID' className='block mb-2 font-medium text-black'>
					Enter Team Code
				</label>
				<input
					type='string'
					onChange={(e) => setTeamLink(e.target.value)}
					value={teamLink}
					id='teamID'
					className='w-full  rounded-lg p-2 focus:ring-red focus:border-red'
					required
				/>
			</div>

			<button
				onClick={handleClick}
				className='mt-[10px] hover:shadow-md bg-lightYellow hover:bg-[#f7e3a1] shadow-md transition-all duration-100 text-black'
			>
				JOIN TEAM
			</button>
		</div>
	);
};

export default AddTeamMembers;
