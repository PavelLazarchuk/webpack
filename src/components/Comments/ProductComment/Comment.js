import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import Form from './Form';
import Text from 'shared/Text';
import Title from 'shared/Title';
import Button from 'shared/Button';
import CommentItem from './CommentItem';

const ProductComments = ({ name, comments, classes, hidden, setHidden }) => (
	<div className={classes.root}>
		{hidden && (
			<>
				<Title size="small">
					Reviews <span className={classes.title}>about {name}</span>
				</Title>
				<div className={classes.right}>
					<Button onClick={setHidden} className={classes.btn}>
						Add your review
					</Button>
				</div>
			</>
		)}
		{!hidden && <Form setHidden={setHidden} />}

		{comments.length === 0 && (
			<Text className={classes.err}>There are no reviews for this product, be the first</Text>
		)}

		{comments.length > 0 &&
			comments.map((elem) => <CommentItem key={elem._id} {...elem} classes={classes} />)}
	</div>
);

export default compose(
	withState('hidden', 'sethidden', true),
	withHandlers({
		setHidden: ({ hidden, sethidden }) => () => sethidden(!hidden),
	}),
)(ProductComments);
