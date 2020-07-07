import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		padding: '30px 0',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	link: {
		width: 300,
		textDecoration: 'none',
		margin: '0 25px 25px 0',
		color: theme.palette.color,
		'&:hover': {
			textDecoration: 'underline',
		},
		[theme.breakpoints.down(700)]: {
			margin: '0 5px 20px 0',
		},
	},
	img: {
		height: 150,
		width: '100%',
		marginBottom: 5,
		backgroundSize: 'cover',
	},
}));

export default useStyles;
