import React from 'react';

import Text from 'shared/Text';
import useStyles from './styles';

const AboutUs = () => {
	const classes = useStyles();
	return (
		<section className={classes.about}>
			<div className={classes.aboutItem}>
				<Text className={classes.title}>Contact information</Text>
				<Text className={classes.key}>Phone</Text>
				<Text className={classes.value}>+38(067)123-45-67</Text>
				<Text className={classes.value}>+38(098)123-45-67</Text>
				<Text className={classes.value}>+38(053)123-45-67</Text>
				<Text className={classes.key}>Email</Text>
				<Text className={classes.value}>market@gmail.com</Text>
				<Text className={classes.key}>Facebook</Text>
				<Text className={classes.value}>facebook.com/market</Text>
				<Text className={classes.key}>Instagram</Text>
				<Text className={classes.value}>instagram.com/market_295</Text>
			</div>
			<div className={classes.aboutItem}>
				<Text className={classes.title}>Our addresses:</Text>
				<Text className={classes.key}>Kyiv</Text>
				<Text className={classes.value}>str.Volodimir 1</Text>
				<Text className={classes.key}>Kharkiv</Text>
				<Text className={classes.value}>str.Kievska 14</Text>
				<Text className={classes.key}>Lviv</Text>
				<Text className={classes.value}>str.Shevchenka 7</Text>
				<Text className={classes.key}>Schedule</Text>
				<Text className={classes.value}>from 9:00 to 21:00</Text>
			</div>
		</section>
	);
};

export default AboutUs;
