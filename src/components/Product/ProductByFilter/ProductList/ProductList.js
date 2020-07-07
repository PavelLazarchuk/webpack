import React from 'react';

import useStyles from './styles';
import PageWrap from 'shared/PageWrap';
import ProductItem from '../ProductItem';

const ProductList = ({ list, title }) => {
	const classes = useStyles();
	return (
		<PageWrap title={`Products by category - ${title}`}>
			<div className={classes.flex}>
				{list.length === 0 && (
					<div className={classes.err}>There are no products in this category yet.</div>
				)}
				{list.length > 0 &&
					list.map((elem) => (
						<ProductItem key={elem._id} classes={classes} data={elem} {...elem} />
					))}
			</div>
		</PageWrap>
	);
};

export default ProductList;
