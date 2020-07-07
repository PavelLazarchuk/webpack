import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	bigInput: {
		padding: 5,
		height: 50,
		width: '100%',
		marginBottom: 10,
	},
	smallInput: {
		padding: 5,
	},
	btn: {
		background: '#5cb95c',
	},
	flex: {
		display: 'flex',
		marginBottom: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));

export default useStyles;
