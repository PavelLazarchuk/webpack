import React from 'react';
import { connect } from 'react-redux';

import Link from 'shared/Link';
import useStyles from './styles';
import getImg from './img/getImg';
import { setCategory } from 'store/admin/categoryAction';

const Menu = ({ category, setCategory }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{category.map((elem) => (
				<Link
					key={elem._id}
					className={classes.link}
					to={`/product/category/${elem._id}`}
					onClick={() => setCategory(elem.name)}
				>
					<div style={{ backgroundImage: `url(${getImg(elem.name)})` }} className={classes.img} />
					{elem.name}
				</Link>
			))}
		</div>
	);
};

const mstp = ({ admin }) => ({
	category: admin.category,
});

export default connect(mstp, { setCategory })(Menu);
