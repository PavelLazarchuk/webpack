import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	slider: {
		padding: '40px 0',
		width: '80%',
		margin: 'auto',
		[theme.breakpoints.down(750)]: {
			width: '95%',
		},
	},
	item: {
		height: 500,
		display: 'flex',
		alignItems: 'center',
		backgroundSize: 'cover',
		justifyContent: 'center',
		[theme.breakpoints.down(800)]: {
			height: 400,
		},
		[theme.breakpoints.down(450)]: {
			height: 300,
		},
	},
}));

export default useStyles;
