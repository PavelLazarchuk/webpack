import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const StyledButton = ({ children, onClick, className, color }) => {
	return (
		<Button onClick={onClick} className={className} color={color} variant="contained">
			{children}
		</Button>
	);
};

StyledButton.propTypes = {
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default StyledButton;
