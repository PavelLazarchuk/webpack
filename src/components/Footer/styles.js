import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'transparent',
		color: theme.palette.color,
		padding: theme.spacing(2, 0),
		position: 'absolute',
		bottom: 0,
		zIndex: 5,
		width: '100%',
		[theme.breakpoints.down(370)]: {
			fontSize: 14,
		},
	},
	fixHeiht: {
		height: 300,
		[theme.breakpoints.down(700)]: {
			height: 150,
		},
	},
	notHome: {
		height: 50,
	},
	center: {
		padding: '20px 0',
		textAlign: 'center',
	},
}));

export default useStyles;
