import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Information from './Information';
import Preloader from 'shared/Preloader';
import { getOneProduct, cleanOneProduct } from 'store/product/action';

const OneProduct = ({ product, getOneProduct, cleanOneProduct }) => {
	const { id } = useParams();

	useEffect(() => {
		getOneProduct(`${id}?comment=${id}`);
		return () => {
			cleanOneProduct();
		};
	}, [id, getOneProduct, cleanOneProduct]);

	return product ? <Information data={product} {...product} /> : <Preloader size={true} />;
};

const mapStateToProps = ({ product }) => ({
	product: product.product,
});

const mapDispatchToProps = {
	getOneProduct,
	cleanOneProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneProduct);
