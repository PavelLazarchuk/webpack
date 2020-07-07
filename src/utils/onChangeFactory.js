export const onChangeFactory = (state, setState) => (event) => {
	setState({ ...state, [event.target.name]: event.target.value });
};
