import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Link from 'shared/Link';
import useStyles from './styles';

const Search = ({ list, size, onClick }) => {
	const classes = useStyles();
	return (
		<Autocomplete
			autoComplete
			options={list}
			noOptionsText="No Products"
			getOptionLabel={(option) => option.name}
			className={`${size && classes.searchBig}  ${classes.search}`}
			renderOption={(option) => (
				<Link to={`/product/item/${option._id}`} onClick={onClick} className={classes.linkSearch}>
					{option.name + ' ' + option.currentPrice}&#8372;
				</Link>
			)}
			renderInput={(params) => (
				<TextField {...params} size="small" placeholder="search..." fullWidth />
			)}
		/>
	);
};

const mapStateToProps = ({ product }) => ({
	list: product.allProduct,
});

export default connect(mapStateToProps)(Search);
