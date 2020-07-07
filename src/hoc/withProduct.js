import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getDisplayName from 'utils/getDisplayName';
import { getAllProduct } from 'store/product/action';

const withProduct = Component => {
	const WithProduct = ({ product, getAllProduct, ...props }) => {
		useEffect(() => {
			getAllProduct();
		}, [getAllProduct]);

		return <Component product={product} {...props} />;
	};

	WithProduct.displayName = `WithProduct(${getDisplayName(Component)})`;

	const mapStateToProps = ({ product }) => ({
		product: product.allProduct,
	});

	return connect(mapStateToProps, { getAllProduct })(WithProduct);
};

export default withProduct;
