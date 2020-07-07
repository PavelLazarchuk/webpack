import React, { Suspense } from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import AppSidebar from './AppSidebar';
import Preloader from 'shared/Preloader';

const DefaultLayout = () => (
	<div className="app-body">
		<AppSidebar />
		<main className="main">
			<div className="px-4 py-3 color-main">Home</div>
			<Container fluid>
				<Suspense fallback={<Preloader />}>
					<Switch>
						{routes.map((route, idx) => (
							<Route
								key={idx}
								path={route.path}
								exact={route.exact}
								name={route.name}
								render={(props) => <route.component {...props} />}
							/>
						))}
					</Switch>
				</Suspense>
			</Container>
		</main>
	</div>
);

export default DefaultLayout;
