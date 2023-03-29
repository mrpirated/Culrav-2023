const getImagesAPI = (type, id) => {
	// console.log(`${config.baseUrl}${config.getImages}?type=${type}&commitee_id=${id}`);
	var imageUrl = `https://images.culrav.online/${type}_${id}.jpg`;
	console.log(imageUrl);
	return imageUrl;
};
export default getImagesAPI;
