import React from 'react';

import Link from 'shared/Link';
import useStyles from './styles';

const OtherProductList = ({ id, list }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>Other products in this category</div>
			<div className={classes.flex}>
				{list &&
					// eslint-disable-next-line array-callback-return
					list.map((elem) => {
						if (elem._id === id) return null;
						return (
							<Link key={elem._id} to={`/product/item/${elem._id}`}>
								<img src={elem.image} className={classes.img} alt={elem.name} />
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default OtherProductList;
