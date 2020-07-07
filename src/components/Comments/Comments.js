import React from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import ProductComment from './ProductComment';

const Comments = ({ list, product }) => {
	const classes = useStyles();
	return <ProductComment name={product.name} comments={list} classes={classes} />;
};

const mstp = ({ comment, product }) => ({
	list: comment.comments,
	product: product.product,
});

export default connect(mstp)(Comments);
