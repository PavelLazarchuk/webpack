import React, { Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Preloader from 'shared/Preloader';

const HomePage = lazy(() => import('../HomePage'));
const NotFound = lazy(() => import('../NotFound'));
const OrderPage = lazy(() => import('../OrderPage'));
const ProductPage = lazy(() => import('../ProductPage'));

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.backgroundColor,
		position: 'relative',
		minHeight: '100vh',
	},
}));

const MainPage = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<Suspense fallback={<Preloader />}>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/order" component={OrderPage} />
					<Route path="/product" component={ProductPage} />
					<Route component={NotFound} />
				</Switch>
			</Suspense>
			<Footer />
		</div>
	);
};

export default MainPage;
