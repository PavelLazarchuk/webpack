import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	card: {
		color: '#ffffff',
		borderRadius: 20,
		cursor: 'default',
		backgroundColor: '#5cb95c',
		'&:hover': {
			color: 'yellow',
			backgroundColor: '#5cb95c',
		},
	},
	buy: {
		marginLeft: 10,
	},
	absolute: {
		position: 'absolute',
		top: 150,
		right: 15,
		'&:hover': {
			top: 151,
		},
	},
}));

export default useStyles;
