import React from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';

import Text from 'shared/Text';
import useStyles from './styles';

const Footer = ({ location }) => {
	const classes = useStyles();

	return (
		<>
			<div className={location.pathname === '/' ? classes.fixHeiht : classes.notHome} />
			<footer className={classes.root}>
				<Container>
					<Text className={classes.center}>All Rights Reserved &#169; 2020 Market.com, Inc.</Text>
				</Container>
			</footer>
		</>
	);
};

export default withRouter(Footer);
