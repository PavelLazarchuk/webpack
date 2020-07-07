import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: theme.palette.font,
		fontSize: 24,
		color: theme.palette.textColor,
		[theme.breakpoints.up('sm')]: {
			marginTop: 30,
		},
		marginBottom: 20,
		textAlign: 'center',
		[theme.breakpoints.down(600)]: {
			fontSize: 20,
			marginBottom: 15,
		},
	},
	small: {
		fontSize: 18,
		fontWeight: 'bold',
		margin: '0 0 10px 0',
		fontFamily: theme.palette.font,
		color: theme.palette.textColor,
	},
}));

export default useStyles;
