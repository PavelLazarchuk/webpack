import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)}
	/>
);

const mstp = ({ auth }) => ({
	isLogin: auth.isAuthenticated,
});

export default connect(mstp)(PrivateRoute);
