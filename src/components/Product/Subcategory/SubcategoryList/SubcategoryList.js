import React from 'react';

import useStyles from './styles';
import PageWrap from 'shared/PageWrap';
import SubcategoryItem from '../Subcategorytem';

const SubcategoryList = ({ list, title }) => {
	const classes = useStyles();
	return (
		<PageWrap title={`Сhoose the type of ${title}`}>
			<div className={classes.flex}>
				{list.length === 0 && (
					<div className={classes.err}>There are no products in this category yet.</div>
				)}
				{list.length > 0 &&
					list.map((elem) => <SubcategoryItem key={elem._id} classes={classes} {...elem} />)}
			</div>
		</PageWrap>
	);
};

export default SubcategoryList;
