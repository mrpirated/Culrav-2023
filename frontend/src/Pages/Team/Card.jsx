import instagram from "../../Assets/Team/instagram.svg";
import linkedin from "../../Assets/Team/linkedin.svg";
const Card = (props) => {
	const { imageUrl, member_name, member_post, insta_id, linkedin_id } = props;
	return (
		<div className='card'>
			<div className='contentTeam'>
				<div className='imgBx'>
					<img src={imageUrl} alt='' srcset='' />
				</div>
				<div className='contentBx'>
					<h3>
						{member_name}
						<br />
						<span>{member_post}</span>
					</h3>
				</div>
			</div>

			<ul className='sci'>
				<li>
					<a href={insta_id} target='_blank'>
						<img className='svg w-[25px]' src={instagram} alt='' />
					</a>
				</li>
				<li>
					<a href={linkedin_id} target='_blank'>
						<img className='svg w-[25px]' src={linkedin} alt='' />
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Card;
