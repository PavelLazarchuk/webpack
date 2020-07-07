import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Link from 'shared/Link';
import useStyles from './styles';
import withCategory from 'hoc/withCategory';
import { setCategory } from 'store/admin/categoryAction';

const Links = ({ className, category, click, setCategory }) => {
	const classes = useStyles();
	return category.map((elem) => (
		<Link
			key={elem._id}
			onClick={() => {
				click && click();
				setCategory(elem.name);
			}}
			to={`/product/category/${elem._id}`}
			className={`${classes.link} ${className}`}
		>
			{elem.name}
		</Link>
	));
};

export default compose(withCategory, connect(null, { setCategory }))(Links);
