import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from './styles';
import Button from 'shared/Button';
import { addToOrder } from 'store/order/action';

const AddToOrder = ({ absolute, list, data, addToOrder }) => {
	const classes = useStyles();
	const add = (e) => {
		e.preventDefault();
		const item = {
			id: data._id,
			name: data.name,
			seller: data.seller,
			price: data.currentPrice,
			productNo: data.productNo,
			quantity: data.orderQuantity ? data.orderQuantity : 1,
		};
		addToOrder(list, item);
	};

	return (
		<Button onClick={add} className={`${classes.card} ${absolute && classes.absolute}`}>
			<ShoppingCartIcon size="small" />
			<Route path="/product/item/:id" render={() => <div className={classes.buy}>BUY</div>} />
		</Button>
	);
};

const mstp = ({ order }) => ({
	list: order.orderList,
});

export default connect(mstp, { addToOrder })(AddToOrder);
