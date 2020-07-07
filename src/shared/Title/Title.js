import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Title = ({ size, children }) => {
	const classes = useStyles();
	return <h1 className={size ? classes.small : classes.title}>{children}</h1>;
};

Title.propTypes = {
	size: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Title;
