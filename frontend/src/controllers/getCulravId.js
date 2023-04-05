const getCulravId = (user_id) => {
	return `CUL-${user_id.toString().padStart(4, "0")}`;
};
export default getCulravId;
