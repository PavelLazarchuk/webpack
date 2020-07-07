import React from 'react';

import Text from 'shared/Text';
import getDate from 'utils/getDate';

const CommentItem = ({ classes, name, reviewText, date }) => (
	<div className={classes.item}>
		<div className={classes.flex}>
			<Text className={classes.name}>{name}</Text>
			<Text className={classes.text}>{getDate(date)}</Text>
		</div>
		<Text className={classes.text}>{reviewText}</Text>
	</div>
);

export default CommentItem;
