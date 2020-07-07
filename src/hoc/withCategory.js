import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getDisplayName from 'utils/getDisplayName';
import { getAllCategory } from 'store/admin/categoryAction';

const withCategory = Component => {
	const WithCategory = ({ category, getAllCategory, ...props }) => {
		useEffect(() => {
			getAllCategory();
		}, [getAllCategory]);

		return <Component category={category} {...props} />;
	};

	WithCategory.displayName = `WithCategory(${getDisplayName(Component)})`;

	const mapStateToProps = ({ admin }) => ({
		category: admin.category,
	});

	return connect(mapStateToProps, { getAllCategory })(WithCategory);
};

export default withCategory;
