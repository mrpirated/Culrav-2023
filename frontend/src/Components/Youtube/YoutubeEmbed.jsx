import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {
	return (
		<div className='video-responsive'>
			<iframe
				width='853'
				height='480'
				src={`https://www.youtube.com/embed/${embedId}`}
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				allowtransparency='true'
				title='Embed Youtube Video'
			/>
		</div>
	);
};

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
