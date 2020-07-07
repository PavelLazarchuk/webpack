import React from 'react';
import { connect } from 'react-redux';

import Link from 'shared/Link';
import { history } from 'index';
import navigation from '../_nav';
import Button from 'shared/Button';
import { logOutAdmin } from 'store/auth/authActions';

const AppSidebar = ({ logOutAdmin }) => (
	<div className="d-flex justify-content-around align-items-center py-2">
		<nav className="text-center">
			{navigation.map(e => (
				<Link key={e.name} to={e.url} className="mx-4 p-2">
					{e.name}
				</Link>
			))}
		</nav>
		<Button color="primary" onClick={() => logOutAdmin(history)}>
			logOut
		</Button>
	</div>
);

export default connect(null, { logOutAdmin })(AppSidebar);
