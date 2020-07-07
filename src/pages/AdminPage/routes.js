/* eslint-disable react/display-name */
import React from 'react';
import { Redirect } from 'react-router-dom';

const Categories = React.lazy(() => import('./views/Categories/Categories'));

const routes = [
	{ path: '/admin', exact: true, name: 'Головна', component: () => <Redirect to="/admin" /> },
	{ path: '/admin/categories', name: 'Категорії', component: Categories },
];

export default routes;
