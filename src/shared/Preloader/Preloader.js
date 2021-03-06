import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import style from './style.module.css';

const useStyle = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.backgroundColor,
	},
}));

export default function Preloader({ size }) {
	const classes = useStyle();
	return (
		<div className={`${size ? style.small : style.preload} ${classes.root}`}>
			<div className={style.loader}></div>
		</div>
	);
}
