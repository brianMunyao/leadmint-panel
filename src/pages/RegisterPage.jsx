import React from 'react';
import { styled } from 'styled-components';
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import FormItem from '../components/FormItem';
import AppBtn from '../components/AppBtn';
import FormContainer from '../components/FormContainer';

const RegisterPage = () => {
	return (
		<FormContainer title="Create Account">
			<Container>
				<div className="form-inputs">
					<FormItem
						name="company_name"
						label="Company Name"
						placeholder="Company Name"
						value=""
						Icon={IoMailOutline}
					/>
					<FormItem
						inputType="email"
						name="email"
						label="Email Address"
						placeholder="Enter your email address"
						value=""
						Icon={IoMailOutline}
					/>

					<FormItem
						inputType="password"
						name="password"
						label="Password"
						placeholder="Enter your password"
						value=""
						Icon={IoLockClosedOutline}
					/>
					<FormItem
						inputType="password"
						name="password2"
						label="Re-enter Password"
						placeholder="Enter your password again"
						value=""
						Icon={IoLockClosedOutline}
					/>
					{/* <FormItem
						name="country"
						label="Country"
						placeholder="Country"
						value=""
						Icon={IoLockClosedOutline}
					/>
					<FormItem
						name="address"
						label="Address"
						placeholder="Address"
						value=""
						Icon={IoLockClosedOutline}
					/>
					<FormItem
						inputType="tel"
						name="mobile_number"
						label="Mobile Number"
						placeholder="Mobile Number"
						value=""
						Icon={IoLockClosedOutline}
					/> */}
				</div>

				<AppBtn>Register</AppBtn>

				<p className="alt-text">
					Already have an account? <Link to="/login">Login</Link>
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

export default RegisterPage;
