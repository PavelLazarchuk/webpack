import React from 'react';

import Text from 'shared/Text';
import useStyles from './styles';
import bgp from './img/Group 431.png';
import bgp1 from './img/Group 433.png';

const Content = () => {
	const classes = useStyles();
	return (
		<>
			<section className={classes.banner}>
				<div className={classes.bannerCont}>
					<Text className={classes.bannerText}>Lorem ipsum dolor sit</Text>
					<Text className={classes.bannerText}>Excepteur occaecat cupidatat</Text>
					<Text className={classes.bannerText}>Duis aute irure dolor in reprehenderit</Text>
				</div>
			</section>
			<img src={bgp1} className={`${classes.bg1} ${classes.bg}`} alt="bg1" />
			<img src={bgp} className={`${classes.bg2} ${classes.bg}`} alt="bg2" />
		</>
	);
};

export default Content;
