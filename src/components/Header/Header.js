import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

import Cart from './Cart';
import Link from 'shared/Link';
import Menu from './links/Menu';
import useStyles from './styles';
import Links from './links/Links';
import dark from './img/dark.png';
import logo from './img/LOGO.png';
import light from './img/light.png';
import Search from './links/Search';
import withProduct from 'hoc/withProduct';
import { changeToDark, changeToLight } from 'store/theme/themeActions';

const Header = ({ thema, changeToLight, changeToDark }) => {
	const classes = useStyles();
	const darkTheme = () => {
		changeToDark();
		localStorage.setItem('theme', 'dark');
	};
	const lightTheme = () => {
		changeToLight();
		localStorage.setItem('theme', 'light');
	};

	return (
		<AppBar position="static" className={classes.root}>
			<Container className={classes.flex}>
				<Link to="/">
					<img className={classes.logo} src={logo} alt="pic" />
				</Link>
				<div className={classes.menuFlex}>
					<Search />
					<div className={classes.lgMenu}>
						<Links />
					</div>
				</div>
				<Box component="div" className={classes.flex}>
					<IconButton onClick={() => (thema === 'light' ? darkTheme() : lightTheme())}>
						<img src={thema === 'light' ? dark : light} className={classes.themeIcon} alt="pic" />
					</IconButton>
					<Cart classes={classes} />
					<Menu />
				</Box>
			</Container>
		</AppBar>
	);
};

const mapStateToProps = ({ theme }) => ({
	thema: theme.theme,
});

export default compose(
	withProduct,
	connect(mapStateToProps, { changeToLight, changeToDark }),
)(Header);
