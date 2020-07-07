import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '20px 0',
		[theme.breakpoints.down(740)]: {
			display: 'none',
		},
	},
	title: {
		fontSize: 18,
		marginBottom: 20,
		textAlign: 'center',
		color: theme.palette.color,
	},
	flex: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	img: {
		width: 150,
		height: 100,
		display: 'block',
		background: '#999999',
		margin: '0 10px 10px 0',
	},
}));

export default useStyles;
