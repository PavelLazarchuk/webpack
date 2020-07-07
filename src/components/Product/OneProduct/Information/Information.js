import React, { useEffect } from 'react';

import Text from 'shared/Text';
import useStyles from './styles';
import PageWrap from 'shared/PageWrap';
import OtherProduct from '../../OtherProduct';
import ProductComments from 'components/Comments';
import AddToOrder from 'components/Order/AddToOrder';

const Information = ({
	_id,
	data,
	name,
	image,
	company,
	category,
	description,
	subCategory,
	currentPrice,
	subCategoryId,
}) => {
	const classes = useStyles();

	useEffect(() => {
		document.title = `${name} for ${company}`;
		return () => (document.title = 'Market');
	}, [name, company]);

	return (
		<PageWrap title={name}>
			<div className={classes.flex}>
				<div className={classes.flexitemImg}>
					<img src={image} className={classes.img} alt={name} />
					<OtherProduct id={_id} subId={subCategoryId} />
				</div>
				<div className={classes.flexitem}>
					<div className={classes.deepFlex}>
						<Text className={classes.price}>{currentPrice} &#8372;</Text>
						<Text className={classes.weight}>for 1 kg</Text>
					</div>
					<AddToOrder data={data} />
					<Text className={`${classes.description} ${classes.top}`}>{description}</Text>
					<Text className={classes.description}>Category - {`${category} (${subCategory})`}</Text>
					<Text className={`${classes.weight} ${classes.bold}`}>Provider: {company}</Text>
					<ProductComments />
				</div>
			</div>
		</PageWrap>
	);
};

export default Information;
