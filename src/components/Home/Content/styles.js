import { makeStyles } from '@material-ui/core/styles';

import banner from './img/banner.png';

const useStyles = makeStyles((theme) => ({
	bg: {
		position: 'absolute',
	},
	bg1: {
		bottom: 0,
		right: 0,
		[theme.breakpoints.down(1000)]: {
			height: 300,
		},
		[theme.breakpoints.down(700)]: {
			height: 200,
		},
		[theme.breakpoints.down(700)]: {
			height: 150,
		},
	},
	bg2: {
		bottom: 110,
		right: 480,
		[theme.breakpoints.down(1000)]: {
			bottom: 80,
			right: 300,
		},
		[theme.breakpoints.only('xs')]: {
			display: 'none',
		},
	},
	banner: {
		padding: '150px 250px',
		backgroundImage: `url(${banner})`,
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		[theme.breakpoints.down(1000)]: {
			padding: '150px 150px',
		},
		[theme.breakpoints.down(770)]: {
			padding: '100px 50px',
		},
	},
	bannerCont: {
		padding: '60px 0',
		textAlign: 'center',
		background: 'rgba(255, 255, 255, 0.4)',
		[theme.breakpoints.down(700)]: {
			padding: '40px 0',
		},
	},
	bannerText: {
		fontSize: 30,
		marginBottom: 10,
		color: '#000000',
		'&:last-child': {
			fontSize: 24,
			marginBottom: 0,
		},
		[theme.breakpoints.down(450)]: {
			fontSize: 24,
		},
	},
}));

export default useStyles;
