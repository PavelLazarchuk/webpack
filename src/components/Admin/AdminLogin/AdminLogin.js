import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import useStyle from './styles';
import Button from 'shared/Button';
import PageWrap from 'shared/PageWrap';
import { loginAdmin } from 'store/auth/authActions';

const Login = ({ loginAdmin }) => {
	const classes = useStyle();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = () => {
		loginAdmin({ login, password });
	};

	return (
		<div className={classes.main}>
			<PageWrap title="Admin login" size="small">
				<div className={classes.flex}>
					<form className={classes.fields}>
						<TextField
							label="Login"
							name="email"
							variant="outlined"
							type="email"
							fullWidth
							margin="normal"
							onChange={e => {
								e.preventDefault();
								setLogin(e.target.value);
							}}
							value={login}
						/>
						<TextField
							label="Password"
							name="password"
							variant="outlined"
							fullWidth
							margin="normal"
							type="password"
							value={password}
							onChange={e => {
								e.preventDefault();
								setPassword(e.target.value);
							}}
						/>

						<Button className={classes.btn} onClick={onSubmit} color="primary">
							CONTINUE
						</Button>
					</form>
				</div>
			</PageWrap>
		</div>
	);
};

export default connect(null, { loginAdmin })(Login);
