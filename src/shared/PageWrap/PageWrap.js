import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../Title';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: 40,
		margin: '20px auto',
		marginBottom: 40,
		maxWidth: 1170,
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
		[theme.breakpoints.down(640)]: {
			padding: 20,
		},
		[theme.breakpoints.down(500)]: {
			padding: 5,
			marginBottom: 10,
		},
	},
	small: {
		maxWidth: '600px !important',
	},
}));

const PageWrap = ({ size, title, children }) => {
	const classes = useStyles();
	return (
		<Container>
			<Title>{title}</Title>
			<Paper className={`${classes.root} ${size && classes.small}`}>{children}</Paper>
		</Container>
	);
};

PageWrap.propTypes = {
	size: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default PageWrap;
