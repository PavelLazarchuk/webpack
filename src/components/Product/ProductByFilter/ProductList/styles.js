import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	err: {
		fontSize: 24,
		textAlign: 'center',
		color: theme.palette.textColor,
	},
	flex: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	item: {
		width: 250,
		position: 'relative',
		textDecoration: 'none',
		margin: '0 25px 25px 0',
		background: theme.palette.cardColor,
		[theme.breakpoints.down(640)]: {
			margin: '0 0 25px 0',
		},
	},
	img: {
		height: 200,
		width: '100%',
		display: 'block',
		background: '#999999',
	},
	content: {
		padding: '10px 15px',
		borderStyle: 'solid',
		borderColor: '#e3e3e2',
		borderRadius: '0 0 6px 6px',
		borderWidth: '0 1px 1px 1px',
	},
	caption: {
		fontSize: 22,
		marginBottom: 5,
		color: theme.palette.color,
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	company: {
		fontSize: 16,
		display: 'flex',
		marginBottom: 5,
		alignItems: 'center',
		color: theme.palette.textColor,
	},
	description: {
		fontSize: 14,
		marginBottom: 15,
		color: theme.palette.textColor,
	},
	footer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	price: {
		fontSize: 22,
		color: theme.palette.color,
	},
	weight: {
		fontSize: 16,
		marginRight: 5,
		color: theme.palette.textColor,
	},
}));

export default useStyles;
