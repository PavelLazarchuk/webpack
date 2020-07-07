import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	err: {
		fontSize: 24,
		textAlign: 'center',
		color: theme.palette.textColor,
	},
	flex: {
		padding: '10px 0',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	flexItem: {
		margin: '0 5px 20px 0',
		flexBasis: '25%',
		textAlign: 'center',
		'&:hover': {
			boxShadow: '0px 5px 10px rgba(230, 235, 255, 0.5)',
		},
		'&:last-child': {
			margin: '0 5px 0 0',
		},
		[theme.breakpoints.down(700)]: {
			flexBasis: '45%',
		},
		[theme.breakpoints.down(480)]: {
			flexBasis: '95%',
		},
	},
	link: {
		fontSize: 20,
		width: '100%',
		padding: '10px 0',
		textDecoration: 'none',
		display: 'inline-block',
		color: theme.palette.color,
		background: theme.palette.backgroundColor,
	},
}));

export default useStyles;
