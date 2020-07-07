import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import Badge from './Barge';
import Link from 'shared/Link';

const Cart = ({ classes, order }) => (
	<Link to="/order" className={classes.cart}>
		<Badge badgeContent={order.length} showZero={true} color="secondary">
			<ShoppingCartOutlinedIcon />
		</Badge>
	</Link>
);

const mstp = ({ order }) => ({
	order: order.orderList,
});

export default connect(mstp)(Cart);
