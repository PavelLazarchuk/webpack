import React from 'react';
import Container from '@material-ui/core/Container';

import Link from 'shared/Link';
import useStyles from './styles';

const NotFound = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				<div className={classes.center}>
					<div>
						<h1>404</h1>
						<h4>Oops! You are lost.</h4>
						<p>The page you are looking for was not found.</p>
					</div>
					<Link to="/" className={classes.link}>
						Go back...
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default NotFound;
