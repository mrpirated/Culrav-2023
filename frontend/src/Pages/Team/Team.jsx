import "./Team.css";
import { useEffect, useState } from "react";
import getOrganizingTeamAPI from "../../api/getOrganizingTeamAPI";
import getImagesAPI from "../../api/getImageAPI";
import Card from "./Card";
const Team = () => {
	const [organizingTeam, setOrganizinTeam] = useState([]);
	useEffect(() => {
		getOrganizingTeamAPI().then((response) => {
			setOrganizinTeam(response.data);
		});
	}, []);
	const proffData = [
		{
			name: "Dr. R.S. Verma",
			post: "Director",
			imageUrl: `https://images.culrav.online/rsverma.jpg`,
		},
		{
			name: "Dr. Anil Kumar Singh",
			post: "SAC President",
			imageUrl: `https://images.culrav.online/aksingh.jpg`,
		},
		{
			name: "Dr. Vishnu Agarwal",
			post: "Convener",
			imageUrl: `https://images.culrav.online/vishnu.jpg`,
		},
		{
			name: "Dr. Soni Joseph",
			post: "Treasurer",
			imageUrl: `https://images.culrav.online/sonijoseph.jpg`,
		},
		{
			name: "Dr. Suantak Kamsonlian",
			post: "Faculty Coordinator",
			imageUrl: `https://images.culrav.online/suantak.jpg`,
		},
		{
			name: "Dr. Anupam Rawat",
			post: "Faculty Coordinator",
			imageUrl: `https://images.culrav.online/anupam.jpg`,
		},
		{
			name: "Dr. Mitu Mandal",
			post: "Faculty Coordinator",
			imageUrl: `https://images.culrav.online/mitu.jpg`,
		},
		{
			name: "Dr. Santosh Kumar Gupta",
			post: "Faculty Coordinator",
			imageUrl: `https://images.culrav.online/santosh.jpg`,
		},
	];
	return (
		<div className='image' id='team'>
			{/* <div>
        <h1 id="Head" className="text-center text-grey">
          OUR TEAM`
        </h1>
      </div> */}
			<h1 id='HeadDown' className='text-center pt-[110px] pb-[180px] text-grey'>
				FACULTIES
			</h1>
			<div className='bodyTeam'>
				<div className='SectionTeam'>
					<div className='containerTeam'>
						{proffData
							.filter((e) => {
								return e.post === "Director";
							})
							.map((member) => (
								<Card
									imageUrl={member.imageUrl}
									member_name={member.name}
									member_post={member.post}
									insta_id={""}
									linkedin_id={""}
									isproff={true}
								/>
							))}
					</div>
					<div className='containerTeam'>
						{proffData
							.filter((e) => {
								return (
									e.post !== "Director" && e.post !== "Faculty Coordinator"
								);
							})
							.map((member) => (
								<Card
									imageUrl={member.imageUrl}
									member_name={member.name}
									member_post={member.post}
									insta_id={""}
									linkedin_id={""}
									isproff={true}
								/>
							))}
					</div>
					<div className='containerTeam'>
						{proffData
							.filter((e) => {
								return e.post === "Faculty Coordinator";
							})
							.map((member) => (
								<Card
									imageUrl={member.imageUrl}
									member_name={member.name}
									member_post={member.post}
									insta_id={""}
									linkedin_id={""}
									isproff={true}
								/>
							))}
					</div>
				</div>
			</div>
			<h1 id='HeadDown' className='text-center pt-[110px] text-grey'>
				TECH TEAM
			</h1>
			<div className='bodyTeam'>
				<div className='SectionTeam'>
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
									isproff={false}
								/>
							))}
					</div>
				</div>
			</div>

			<h1 id='HeadDown' className='text-center text-grey'>
				FESTIVAL SECRETARIES
			</h1>
			<div className='bodyTeam'>
				<div className='SectionTeam'>
					<div className='containerTeam'>
						{organizingTeam
							.filter((e) => {
								return e.type === "FS";
							})
							.map((member) => (
								<Card
									imageUrl={getImagesAPI("profile", member.user_id)}
									member_name={member.name}
									member_post={"Festival Secretary"}
									insta_id={member.insta_id}
									linkedin_id={member.linkedin_id}
									isproff={false}
								/>
							))}
					</div>
				</div>
			</div>

			<h1 id='HeadDown' className='text-center text-grey'>
				CO-COORDINATORS
			</h1>
			<div className='bodyTeam'>
				<div className='SectionTeam'>
					<div className='containerTeam'>
						{organizingTeam
							.filter((e) => {
								return e.type === "COCO";
							})
							.map((member) => (
								<Card
									imageUrl={getImagesAPI("profile", member.user_id)}
									member_name={member.name}
									member_post={"Co-Coordinator"}
									insta_id={member.insta_id}
									linkedin_id={member.linkedin_id}
									isproff={false}
								/>
							))}
					</div>
				</div>
			</div>

			<h1 id='HeadDown' className='text-center text-grey'>
				PR TEAM
			</h1>
			<div className='bodyTeam'>
				<div className='SectionTeam'>
					<div className='containerTeam'>
						{organizingTeam
							.filter((e) => {
								return e.type === "PR";
							})
							.map((member) => (
								<Card
									imageUrl={getImagesAPI("profile", member.user_id)}
									member_name={member.name}
									member_post={"PR Lead"}
									insta_id={member.insta_id}
									linkedin_id={member.linkedin_id}
									isproff={false}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
