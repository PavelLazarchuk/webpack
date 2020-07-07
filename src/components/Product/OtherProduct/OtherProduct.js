import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import OtherProductList from './OtherProductList';
import { getProductByFilter, cleanProductList } from 'store/product/action';

const OtherProduct = ({ id, subId, productList, cleanProductList, getProductByFilter }) => {
	useEffect(() => {
		getProductByFilter(`subCategoryId=${subId}`);
		return () => {
			cleanProductList();
		};
	}, [subId, getProductByFilter, cleanProductList]);

	return <OtherProductList id={id} list={productList} />;
};

const mapStateToProps = ({ product }) => ({
	productList: product.productList,
});

const mapDispatchToProps = {
	cleanProductList,
	getProductByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProduct);
