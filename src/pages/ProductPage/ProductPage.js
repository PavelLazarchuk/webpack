import React from 'react';
import { Route, Switch } from 'react-router-dom';

import OneProduct from 'components/Product/OneProduct';
import Subcategory from 'components/Product/Subcategory';
import ProductByFilter from 'components/Product/ProductByFilter';

const ProductPage = () => (
	<Switch>
		<Route path="/product/item/:id" component={OneProduct} />
		<Route path="/product/category/:id" component={Subcategory} />
		<Route path="/product/subcategory/:id" component={ProductByFilter} />
	</Switch>
);

export default ProductPage;
