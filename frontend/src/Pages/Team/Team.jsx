import img from "../../Assets/Team/Profile.jpg";
import "./Team.css";
import facebook from "../../Assets/Team/facebook.svg";
import instagram from "../../Assets/Team/instagram.svg";
import linkedin from "../../Assets/Team/linkedin.svg";
import { useEffect, useState } from "react";
import getOrganizingTeamAPI from "../../api/getOrganizingTeamAPI";
import getImagesAPI from "../../api/getImageAPI";
const Team = () => {
	const [organizingTeam, setOrganizinTeam] = useState([]);
	useEffect(() => {
		getOrganizingTeamAPI().then((response) => {
			setOrganizinTeam(response.data);
		});
	}, []);
	return (
		<div className='image' id='team'>
			{/* <div>
        <h1 id="Head" className="text-center text-grey">
          OUR TEAM`
        </h1>
      </div> */}

			<h1 id='Head' className='text-center text-grey'>
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
								<div className='card'>
									<div className='contentTeam'>
										<div className='imgBx'>
											<img
												src={getImagesAPI("profile", member.user_id)}
												alt=''
												srcset=''
											/>
										</div>
										<div className='contentBx'>
											<h3>
												{member.name}
												<br />
												<span>Tech Lead</span>
											</h3>
										</div>
									</div>
									<ul className='sci'>
										<li>
											<a href={member.insta_id} target='_blank'>
												<img className='svg w-[25px]' src={instagram} alt='' />
											</a>
										</li>
										<li>
											<a href={member.linkedin_id} target='_blank'>
												<img className='svg w-[25px]' src={linkedin} alt='' />
											</a>
										</li>
									</ul>
								</div>
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
								<div className='card'>
									<div className='contentTeam'>
										<div className='imgBx'>
											<img
												src={getImagesAPI("profile", member.user_id)}
												alt=''
												srcset=''
											/>
										</div>
										<div className='contentBx'>
											<h3>
												{member.name}
												<br />
												<span>Festival Secretary</span>
											</h3>
										</div>
									</div>
									<ul className='sci'>
										<li>
											<a href={member.insta_id} target='_blank'>
												<img className='svg w-[25px]' src={instagram} alt='' />
											</a>
										</li>
										<li>
											<a href={member.linkedin_id} target='_blank'>
												<img className='svg w-[25px]' src={linkedin} alt='' />
											</a>
										</li>
									</ul>
								</div>
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
								<div className='card'>
									<div className='contentTeam'>
										<div className='imgBx'>
											<img
												src={getImagesAPI("profile", member.user_id)}
												alt=''
												srcset=''
											/>
										</div>
										<div className='contentBx'>
											<h3>
												{member.name}
												<br />
												<span>Co-Coordinator</span>
											</h3>
										</div>
									</div>
									<ul className='sci'>
										<li>
											<a href={member.insta_id} target='_blank'>
												<img className='svg w-[25px]' src={instagram} alt='' />
											</a>
										</li>
										<li>
											<a href={member.linkedin_id} target='_blank'>
												<img className='svg w-[25px]' src={linkedin} alt='' />
											</a>
										</li>
									</ul>
								</div>
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
								<div className='card'>
									<div className='contentTeam'>
										<div className='imgBx'>
											<img
												src={getImagesAPI("profile", member.user_id)}
												alt=''
												srcset=''
											/>
										</div>
										<div className='contentBx'>
											<h3>
												{member.name}
												<br />
												<span>PR Lead</span>
											</h3>
										</div>
									</div>
									<ul className='sci'>
										<li>
											<a href={member.insta_id} target='_blank'>
												<img className='svg w-[25px]' src={instagram} alt='' />
											</a>
										</li>
										<li>
											<a href={member.linked_id} target='_blank'>
												<img className='svg w-[25px]' src={linkedin} alt='' />
											</a>
										</li>
									</ul>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
