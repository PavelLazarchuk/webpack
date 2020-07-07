import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import AdminLogin from '../AdminLogin';

const AdminRoute = ({ component: Component, isAdmin, ...rest }) => (
	<Route {...rest} render={(props) => (isAdmin ? <Component {...props} /> : <AdminLogin />)} />
);

const mapStateToProps = ({ auth }) => ({
	isAdmin: auth.isAdmin,
});

export default connect(mapStateToProps)(AdminRoute);
