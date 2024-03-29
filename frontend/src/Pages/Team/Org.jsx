import { useEffect, useState } from "react";
import getOrganizingTeamAPI from "../../api/getOrganizingTeamAPI";
import getImagesAPI from "../../api/getImageAPI";
import Card from "./Card";
import ProffCard from "./ProffCard";

const Org = () => {
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
		<div className='pb-[60px]' id='team'>
			{/* <div>
        <h1 id="Head" className="text-center text-grey">
          OUR TEAM`
        </h1>
      </div> */}
			{/* pb-[180px] */}
			<h1
				id='HeadDown'
				className='Fest text-center mt-[20px] md:mt-[40px] pb-[150px] lg:pb-[160px] text-grey'
			>
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
								/>
							))}
					</div>
				</div>
			</div>
			<h1
				id='HeadDown'
				className='text-center pt-[240px] pb-[150px] 2xl:pt-[260px] lg:pb-[160px] text-grey'
			>
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
								/>
							))}
					</div>
				</div>
			</div>

			<h1
				id='HeadDown'
				className='text-center pt-[240px] 2xl:pt-[260px] pb-[150px] lg:pb-[160px] text-grey'
			>
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
								/>
							))}
					</div>
				</div>
			</div>
			<h1
				id='HeadDown'
				className='text-center pt-[240px] 2xl:pt-[260px] pb-[150px] lg:pb-[160px] text-grey'
			>
				ARTS TEAM
			</h1>
			<div className='bodyTeam'>
				<div className='SectionTeam'>
					<div className='containerTeam'>
						{organizingTeam
							.filter((e) => {
								return e.type === "ARTSLEAD";
							})
							.map((member) => (
								<Card
									imageUrl={getImagesAPI("profile", member.user_id)}
									member_name={member.name}
									member_post={"Arts Lead"}
									insta_id={member.insta_id}
									linkedin_id={member.linkedin_id}
								/>
							))}
					</div>
				</div>
			</div>
			<h1
				id='HeadDown'
				className='text-center pt-[240px] 2xl:pt-[260px] pb-[150px] lg:pb-[160px] text-grey'
			>
				MEDIA & DESIGN TEAM
			</h1>
			<div className='bodyTeam'>
				<div className='SectionTeam'>
					<div className='containerTeam'>
						{organizingTeam
							.filter((e) => {
								return e.type === "MEDIALEAD" || e.type === "DESIGNLEAD";
							})
							.map((member) => (
								<Card
									imageUrl={getImagesAPI("profile", member.user_id)}
									member_name={member.name}
									member_post={
										member.type === "MEDIALEAD" ? "Media Lead" : "Design Lead"
									}
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

export default Org;
