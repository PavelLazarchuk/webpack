import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	about: {
		padding: '40px 0',
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down(520)]: {
			flexDirection: 'column',
		},
	},
	aboutItem: {
		padding: '0 10px',
		flexBasis: '30%',
		textAlign: 'center',
		[theme.breakpoints.down(1000)]: {
			flexBasis: '40%',
		},
		[theme.breakpoints.down(780)]: {
			flexBasis: '45%',
		},
	},
	title: {
		fontSize: 30,
		marginBottom: 10,
		fontWeight: 'bold',
		color: theme.palette.color,
		[theme.breakpoints.down(670)]: {
			fontSize: 22,
		},
	},
	key: {
		fontSize: 20,
		marginBottom: 2,
		fontStyle: 'italic',
		color: theme.palette.color,
	},
	value: {
		marginBottom: 8,
		paddingBottom: 3,
		color: theme.palette.textColor,
		borderBottom: `1px solid ${theme.palette.textColor}`,
	},
}));

export default useStyles;
