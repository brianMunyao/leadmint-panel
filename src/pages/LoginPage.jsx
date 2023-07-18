import React from 'react';
import { styled } from 'styled-components';
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import FormItem from '../components/FormItem';
import AppBtn from '../components/AppBtn';
import FormContainer from '../components/FormContainer';

const LoginPage = () => {
	return (
		<FormContainer title="Welcome Back">
			<Container>
				<div className="form-inputs">
					<FormItem
						name="email"
						label="Email Address"
						placeholder="Enter your email address"
						value=""
						Icon={IoMailOutline}
					/>

					<FormItem
						name="password"
						label="Password"
						placeholder="Enter your password"
						value=""
						Icon={IoLockClosedOutline}
					/>
				</div>

				<AppBtn>Login</AppBtn>

				<p className="alt-text">
					Don't have an account? <Link to="/register">Register</Link>
				</p>
			</Container>
		</FormContainer>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;

	.form-inputs {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.alt-text {
		font-size: 15px;
	}
`;

export default LoginPage;
