import { useEffect, useState } from "react";
import getOrganizingTeamAPI from "../../api/getOrganizingTeamAPI";
import getImagesAPI from "../../api/getImageAPI";
import Card from "./Card";
import ProffCard from "./ProffCard";

const Tech = () => {
	const [organizingTeam, setOrganizinTeam] = useState([]);
	useEffect(() => {
		getOrganizingTeamAPI().then((response) => {
			setOrganizinTeam(response.data);
		});
	}, []);
	//   const proffData = [
	//     {
	//       name: "Dr. R.S. Verma",
	//       post: "Director",
	//       imageUrl: `https://images.culrav.online/rsverma.jpg`,
	//     },
	//     {
	//       name: "Dr. Anil Kumar Singh",
	//       post: "SAC President",
	//       imageUrl: `https://images.culrav.online/aksingh.jpg`,
	//     },
	//     {
	//       name: "Dr. Vishnu Agarwal",
	//       post: "Convener",
	//       imageUrl: `https://images.culrav.online/vishnu.jpg`,
	//     },
	//     {
	//       name: "Dr. Soni Joseph",
	//       post: "Treasurer",
	//       imageUrl: `https://images.culrav.online/sonijoseph.jpg`,
	//     },
	//     {
	//       name: "Dr. Suantak Kamsonlian",
	//       post: "Faculty Coordinator",
	//       imageUrl: `https://images.culrav.online/suantak.jpg`,
	//     },
	//     {
	//       name: "Dr. Anupam Rawat",
	//       post: "Faculty Coordinator",
	//       imageUrl: `https://images.culrav.online/anupam.jpg`,
	//     },
	//     {
	//       name: "Dr. Mitu Mandal",
	//       post: "Faculty Coordinator",
	//       imageUrl: `https://images.culrav.online/mitu.jpg`,
	//     },
	//     {
	//       name: "Dr. Santosh Kumar Gupta",
	//       post: "Faculty Coordinator",
	//       imageUrl: `https://images.culrav.online/santosh.jpg`,
	//     },
	//   ];
	return (
		<div className='' id='team'>
			{/* <div>
        <h1 id="Head" className="text-center text-grey">
          OUR TEAM`
        </h1>
      </div> */}
			{/* pb-[180px] */}
			<h1
				id='HeadDown'
				className='Tech text-center mt-[20px] md:mt-[40px] pb-[150px] xl:pb-[160px] text-grey'
			>
				TECH TEAM
			</h1>
			<div className='bodyTeam'>
				<div id='TechSection' className='SectionTeam '>
					<div className='containerTeam'>
						{organizingTeam
							.filter((e) => {
								return e.type === "TECHLEAD";
							})
							.map((member) => (
								<Card
									imageUrl={getImagesAPI("profile", member.user_id)}
									member_name={member.name}
									member_post={"Tech Lead"}
									insta_id={member.insta_id}
									linkedin_id={member.linkedin_id}
								/>
							))}
					</div>
					<div className='containerTeam'>
						{organizingTeam
							.filter((e) => {
								return e.type === "TECHTEAM";
							})
							.map((member) => (
								<Card
									imageUrl={getImagesAPI("profile", member.user_id)}
									member_name={member.name}
									member_post={"Tech Team"}
									insta_id={member.insta_id}
									linkedin_id={member.linkedin_id}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tech;
