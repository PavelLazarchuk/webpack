import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: 20,
		marginTop: 25,
		maxHeight: 600,
		borderRadius: 10,
		overflowY: 'scroll',
		overflowStyle: 'none',
		border: '1px solid #e4e4e4',
		background: theme.palette.backgroundComment,
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},

	title: {
		fontSize: 16,
		fontWeight: 400,
	},

	err: {
		fontSize: 16,
		color: theme.palette.textColor,
	},

	btn: {
		fontSize: 14,
		marginBottom: 20,
		color: '#ffffff',
		background: '#5bba5b',
		textTransform: 'none',
		'&:hover': {
			background: '#26a69a',
		},
	},

	right: {
		textAlign: 'right',
	},

	item: {
		padding: '15px 0',
		borderTop: '0.7px solid  #e4e4e4',
	},

	flex: {
		display: 'flex',
		marginBottom: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	name: {
		fontSize: 18,
		fontWeight: 'bold',
		color: theme.palette.color,
	},

	text: {
		fontSize: 14,
		color: theme.palette.textColor,
	},
}));

export default useStyles;
