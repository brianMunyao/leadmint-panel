import React, { useState } from 'react';
import { styled } from 'styled-components';
import {
	IoArrowBack,
	IoBusinessOutline,
	IoLockClosedOutline,
	IoMailOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import FormItem from '../components/FormItem';
import AppBtn from '../components/AppBtn';
import FormContainer from '../components/FormContainer';
import colors from '../config/colors';

const RegisterPage = () => {
	const [page, setPage] = useState(1);

	const moveToPage1 = () => setPage(1);
	const moveToPage2 = () => setPage(2);

	return (
		<FormContainer title="Create Account">
			<Container>
				<div className="form-inputs">
					{page === 1 && (
						<div className="form-page form-page1">
							<FormItem
								name="company_name"
								label="Company Name"
								placeholder="Company Name"
								value=""
								Icon={IoBusinessOutline}
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

							<AppBtn onClick={moveToPage2}>Next</AppBtn>
						</div>
					)}

					{page === 2 && (
						<div className="form-page form-page2">
							<div className="go-back">
								<div onClick={moveToPage1}>
									<IoArrowBack /> <span>Go Back</span>
								</div>
							</div>

							<p className="general">
								Finish up the account setup
							</p>

							<FormItem
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
							/>

							<AppBtn>Register</AppBtn>
						</div>
					)}
				</div>

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
		width: 100%;
		height: 100%;

		.form-page {
			display: flex;
			flex-direction: column;
			gap: 15px;
			width: 100%;
			height: 100%;

			.general {
				padding: 10px 0;
			}

			.go-back {
				div {
					display: flex;
					align-items: center;
					gap: 4px;
					font-size: 14px;
					color: ${colors.blueDark};
					cursor: pointer;
					width: fit-content;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	.alt-text {
		font-size: 15px;
	}
`;

export default RegisterPage;
