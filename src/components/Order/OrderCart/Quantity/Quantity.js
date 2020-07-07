import React, { useState } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import { deleteItem, updateItem } from 'store/order/action';

const Quantity = ({ id, list, price, quantity, deleteItem, updateItem }) => {
	const classes = useStyles();
	const [count, setCount] = useState(quantity);

	const plus = () => {
		setCount(count + 1);
		updateItem(id, list, count + 1);
	};

	const minus = () => {
		if (count !== 1) {
			setCount(count - 1);
			updateItem(id, list, count - 1);
		} else {
			deleteItem(id, list);
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.flex}>
				<button onClick={minus} className={classes.btn}>
					-
				</button>
				<div className={classes.value}>{count}</div>
				<button onClick={plus} className={classes.btn}>
					+
				</button>
			</div>
			<div className={`${classes.value} ${classes.width}`}>{price * count} &#8372;</div>
		</div>
	);
};

const mapStateToProps = ({ order }) => ({
	list: order.orderList,
});

const mapDispatchToProps = {
	deleteItem,
	updateItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
