import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import Link from 'shared/Link';
import { setSubcategory } from 'store/admin/subcategoryAction';

const SubcategoryItem = ({ _id, name, classes, setSubcategory }) => (
	<Card className={classes.flexItem}>
		<Link
			className={classes.link}
			to={`/product/subcategory/${_id}`}
			onClick={() => setSubcategory(name)}
		>
			{name}
		</Link>
	</Card>
);

export default connect(null, { setSubcategory })(SubcategoryItem);
