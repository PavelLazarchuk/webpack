import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		alignItems: 'center',
		overflow: 'hidden',
		background: theme.palette.backgroundColor,
	},
	center: {
		textAlign: 'center',
		paddingTop: 40,
		color: theme.palette.textColor,
	},
	link: {
		fontSize: 24,
		color: theme.palette.color,
	},
}));

export default useStyles;
