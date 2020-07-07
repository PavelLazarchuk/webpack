import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import SubcategoryList from './SubcategoryList';
import { getSubcategory } from 'store/admin/subcategoryAction';

const Subcategory = ({ list, title, getSubcategory }) => {
	const { id } = useParams();

	useEffect(() => {
		getSubcategory(`categoryId=${id}`);
	}, [id, getSubcategory]);

	return <SubcategoryList list={list} title={title} />;
};

const mapStateToProps = ({ admin }) => ({
	list: admin.subcategory,
	title: admin.categoryTitle,
});

export default connect(mapStateToProps, { getSubcategory })(Subcategory);
