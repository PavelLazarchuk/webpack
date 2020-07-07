import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { useParams } from 'react-router-dom';

import useStyles from './styles';
import Input from 'shared/Input';
import Button from 'shared/Button';
import { addReview } from 'store/comment/actions';
import { onChangeFactory } from 'utils/onChangeFactory';

const Form = ({ addReview, setHidden }) => {
	const { id } = useParams();
	const classes = useStyles();
	const [value, setValue] = useState({
		name: '',
		reviewText: '',
	});

	const add = () => {
		setHidden();
		value.name && value.reviewText
			? addReview(null, { productId: id, name: value.name, reviewText: value.reviewText })
			: toastr.error('Fill in all the fields');
	};
	const onChange = onChangeFactory(value, setValue);

	return (
		<>
			<Input
				name="reviewText"
				onChange={onChange}
				value={value.reviewText}
				className={classes.bigInput}
				placeholder="Write your review"
			/>
			<div className={classes.flex}>
				<Input
					name="name"
					value={value.name}
					onChange={onChange}
					placeholder="Write your name"
					className={classes.smallInput}
				/>
				<Button onClick={add} className={classes.btn}>
					Post
				</Button>
			</div>
		</>
	);
};

const mstp = ({ product }) => ({
	item: product.product,
});

export default connect(mstp, { addReview })(Form);
