import React from 'react';
import { Route, Switch } from 'react-router-dom';

import OrderCart from 'components/Order/OrderCart';
import MakeOrder from 'components/Order/MakeOrder';

const OrderPage = () => (
	<Switch>
		<Route exact path="/order" component={OrderCart} />
		<Route path="/order/make" component={MakeOrder} />
	</Switch>
);

export default OrderPage;
