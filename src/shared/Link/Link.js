import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLink = ({ to, className, children, onClick }) => (
	<Link to={to} onClick={onClick} className={className}>
		{children}
	</Link>
);

StyledLink.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default StyledLink;
