import { createMuiTheme } from '@material-ui/core/styles';

export const LIGHT = createMuiTheme({
	palette: {
		type: 'light',
		color: '#3D3B69',
		textColor: '#3D3B69',
		cardColor: '#ffffff',
		paper: '#fbf7f4', //#ffffff
		backgroundColor: '#fbf7f4', //#d5fcbb
		font: '"Open Sans", sans-serif',
		backgroundComment: '#f5f5f5',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1980,
		},
	},
});

export const DARK = createMuiTheme({
	palette: {
		type: 'dark',
		color: '#26a69a',
		paper: '#192c55',
		bgLogo: '#22c1c3',
		cardColor: '#424242',
		textColor: '#c9ced9',
		backgroundColor: '#424242',
		backgroundComment: '#424242',
		font: '"Open Sans", sans-serif',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1980,
		},
	},
});
