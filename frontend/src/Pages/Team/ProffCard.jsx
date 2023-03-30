const ProffCard = (props) => {
	const { imageUrl, member_name, member_post } = props;
	return (
		<div className='Proffcard'>
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
		</div>
	);
};
export default ProffCard;
