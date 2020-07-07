import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	input: {
		outline: 'none',
		borderRadius: 4,
		border: '1px solid #acadb1',
		color: theme.palette.textColor,
		background: theme.palette.paper,
		textFillColor: theme.palette.textColor,
		'&:focus': {
			border: `1px solid ${theme.palette.color}`,
		},
	},
}));

const Input = ({ min, step, type, name, value, onChange, className, placeholder }) => {
	const classes = useStyles();
	return (
		<input
			min={min}
			step={step}
			name={name}
			value={value}
			onChange={onChange}
			type={type && 'text'}
			placeholder={placeholder}
			className={`${classes.input} ${className}`}
		/>
	);
};

Input.propTypes = {
	min: PropTypes.number,
	step: PropTypes.number,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired,
};

export default React.memo(Input);
