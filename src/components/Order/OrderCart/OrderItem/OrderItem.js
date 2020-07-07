import React from 'react';

import Text from 'shared/Text';
import QuantityPrice from '../Quantity';

const OrderItem = ({ id, name, price, quantity, classes }) => (
	<div className={classes.item}>
		<div>
			<Text className={classes.key}>
				Product name:
				<span className={classes.value}> {name}</span>
			</Text>
			<Text className={classes.key}>
				Price per product:
				<span className={classes.value}> {price} &#8372;</span>
			</Text>
		</div>
		<QuantityPrice id={id} price={price} quantity={quantity} />
	</div>
);

export default OrderItem;
