import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'rgba(132, 133, 135, 0.2)',
		color: theme.palette.color,
		boxShadow: 'none',
		padding: '5px 0',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	themeIcon: {
		width: '45px',
		height: '45px',
	},
	logo: {
		height: 60,
	},
	lgMenu: {
		[theme.breakpoints.down(700)]: {
			display: 'none',
		},
	},
	menuFlex: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		[theme.breakpoints.down(550)]: {
			display: 'none',
		},
	},
	cart: {
		marginRight: 25,
		position: 'relative',
		color: theme.palette.color,
	},
}));

export default useStyles;
