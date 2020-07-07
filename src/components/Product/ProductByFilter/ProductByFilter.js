import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductList from './ProductList';
import Preloader from 'shared/Preloader';
import { getProductByFilter, cleanProductList } from 'store/product/action';

const ProductByFilter = ({ title, productList, getProductByFilter, cleanProductList }) => {
	const { id } = useParams();

	useEffect(() => {
		getProductByFilter(`subCategoryId=${id}`);
		return () => {
			cleanProductList();
		};
	}, [id, getProductByFilter, cleanProductList]);

	return productList ? <ProductList list={productList} title={title} /> : <Preloader size={true} />;
};

const mapStateToProps = ({ product, admin }) => ({
	title: admin.subcategoryTitle,
	productList: product.productList,
});

const mapDispatchToProps = {
	cleanProductList,
	getProductByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductByFilter);
