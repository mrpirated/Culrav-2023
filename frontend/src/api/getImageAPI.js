const getImagesAPI = (type, id) => {
	//
	var imageUrl = `https://images.culrav.online/${type}_${id}.jpg`;
	return imageUrl;
};
export default getImagesAPI;
