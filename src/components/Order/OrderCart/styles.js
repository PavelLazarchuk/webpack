import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	err: {
		fontSize: 24,
		marginBottom: 15,
		textAlign: 'center',
		color: theme.palette.textColor,
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
	},

	item: {
		display: 'flex',
		padding: '10px',
		marginBottom: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTop: `1px solid ${theme.palette.textColor}`,
	},

	key: {
		fontSize: 20,
		fontWeight: 'bold',
		color: theme.palette.color,
		[theme.breakpoints.down(550)]: {
			fontSize: 16,
		},
	},

	value: {
		fontSize: 18,
		fontWeight: 400,
		color: theme.palette.textColor,
		[theme.breakpoints.down(550)]: {
			fontSize: 14,
		},
	},

	total: {
		fontSize: 24,
		marginTop: 10,
		textAlign: 'right',
		color: theme.palette.color,
	},

	msg: {
		fontSize: 12,
		marginTop: 10,
		color: theme.palette.textColor,
	},

	btnFlex: {
		marginTop: 15,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	btn: {
		width: 150,
		color: '#ffffff',
		background: '#26a69a',
		textTransform: 'none',
		'&:hover': {
			background: 'red',
		},
		[theme.breakpoints.down(450)]: {
			width: 120,
		},
	},

	link: {
		padding: 10,
		borderRadius: 4,
		textAlign: 'center',
		textDecoration: 'none',
		'&:hover': {
			background: '#5cb95c',
		},
	},
}));

export default useStyles;
