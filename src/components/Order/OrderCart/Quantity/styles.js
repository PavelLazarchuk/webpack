import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	flex: {
		display: 'flex',
		alignItems: 'center',
	},
	value: {
		fontSize: 18,
		color: theme.palette.textColor,
		[theme.breakpoints.down(550)]: {
			fontSize: 14,
		},
	},

	btn: {
		border: 0,
		cursor: 'pointer',
		padding: '5px 10px',
		color: theme.palette.textColor,
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.15)',
		},
	},

	width: {
		width: 70,
		textAlign: 'right',
		[theme.breakpoints.down(420)]: {
			textAlign: 'center',
		},
	},

	root: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down(420)]: {
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
}));

export default useStyles;
