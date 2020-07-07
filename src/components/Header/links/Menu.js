import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Links from './Links';
import Search from './Search';
import useStyles from './styles';
import Button from 'shared/Button';

const Menu = ({ open, setHidden }) => {
	const classes = useStyles();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	return (
		<div className={classes.hidden}>
			<Button onClick={setHidden} className={classes.menu}>
				Menu
			</Button>
			<SwipeableDrawer
				open={open}
				anchor="right"
				onOpen={setHidden}
				onClose={setHidden}
				disableDiscovery={iOS}
				disableBackdropTransition={!iOS}
			>
				<Links className={classes.width} click={setHidden} />
				<Search size="big" onClick={setHidden} />
			</SwipeableDrawer>
		</div>
	);
};

export default compose(
	withState('open', 'setOpen', false),
	withHandlers({
		setHidden: ({ open, setOpen }) => () => setOpen(!open),
	}),
)(Menu);
