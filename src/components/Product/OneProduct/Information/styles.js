import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	img: {
		width: 350,
		height: 275,
		borderRadius: 5,
		margin: '0 auto',
		background: '#999999',
		[theme.breakpoints.down(500)]: {
			width: 275,
			height: 200,
		},
	},

	flex: {
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down(740)]: {
			textAlign: 'center',
			flexDirection: 'column',
		},
	},

	flexitemImg: {
		display: 'flex',
		flexBasis: '40%',
		flexDirection: 'column',
	},
	flexitem: {
		paddingTop: 15,
		flexBasis: '40%',
	},
	deepFlex: {
		display: 'flex',
		marginBottom: 30,
		alignItems: 'center',
		[theme.breakpoints.down(740)]: {
			justifyContent: 'center',
		},
	},
	price: {
		fontSize: 24,
		marginRight: 50,
		color: theme.palette.color,
	},
	weight: {
		fontSize: 18,
		color: theme.palette.textColor,
	},
	description: {
		fontSize: 14,
		marginBottom: 20,
		color: theme.palette.textColor,
	},
	bold: {
		fontWeight: 'bold',
	},
	top: {
		marginTop: 25,
	},
}));

export default useStyles;
