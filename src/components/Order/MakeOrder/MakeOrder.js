import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import PageWrap from 'shared/PageWrap';
import { postOrder } from 'store/order/action';
import { onChangeFactory } from 'utils/onChangeFactory';

const MakeOrder = ({ orderList, postOrder }) => {
	const [value, setValue] = useState({
		name: '',
		phone: '',
		email: '',
		shipping: '',
		paymentInfo: '',
		deliveryAddress: '',
	});
	const onChange = onChangeFactory(value, setValue);
	const totalSum = orderList.reduce((sum, elem) => sum + elem.price * elem.quantity, 0);

	const add = () => {
		value
			? postOrder({ ...value, totalSum, products: orderList })
			: toastr.error('Fill in all the fields');
	};

	return (
		<PageWrap title="Make order" size="small">
			<div onChange={onChange} onClick={add}>
				Inform
			</div>
		</PageWrap>
	);
};

const mapStateToProps = ({ order }) => ({
	orderList: order.orderList,
});

export default connect(mapStateToProps, { postOrder })(MakeOrder);
