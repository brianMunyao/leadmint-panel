import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';

import FormItemAlt from '../components/FormItemAlt';
import AppBtn from '../components/AppBtn';
import leadmint from '../assets/leadmint.png';
import colors from '../config/colors';

const NewRegisterPage = () => {
	const [page, setPage] = useState(1);

	const moveToPage1 = () => setPage(1);
	const moveToPage2 = () => setPage(2);

	return (
		<Container>
			<div className="inner">
				<img src={leadmint} alt="leadmint-logo" />

				<div className="form-con">
					<p className="alt">
						Already have an account? <Link to="/login">Login</Link>
					</p>

					<h3 className="form-title">Register</h3>

					<div className="form-inputs">
						{page === 1 && (
							<div className="form-page form-page1">
								<FormItemAlt
									name="company_name"
									placeholder="Company Name"
									value=""
								/>
								<FormItemAlt
									inputType="email"
									name="email"
									placeholder="Enter your email address"
									value=""
								/>

								<FormItemAlt
									inputType="password"
									name="password"
									placeholder="Enter your password"
									value=""
								/>
								<FormItemAlt
									inputType="password"
									name="password2"
									placeholder="Enter your password again"
									value=""
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

								<FormItemAlt
									name="country"
									placeholder="Country"
									value=""
								/>
								<FormItemAlt
									name="address"
									placeholder="Address"
									value=""
								/>
								<FormItemAlt
									inputType="tel"
									name="mobile_number"
									placeholder="Mobile Number"
									value=""
								/>

								<AppBtn rounded>Register</AppBtn>
							</div>
						)}
					</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	min-height: 500px;
	background: #f7f7f7;

	.inner {
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			margin-bottom: 30px;
			height: 30px;
			width: auto;
		}
		.form-con {
			width: 330px;
			background: #fff;
			padding: 40px;
			box-shadow: 4px 2px 10px #dededea0;
			border-radius: 4px;
			display: flex;
			flex-direction: column;

			.alt,
			.forgot {
				text-align: center;
				color: grey;
			}
			.alt {
				margin-bottom: 20px;
			}
			.forgot {
				margin-top: 20px;
			}

			.form-title {
				text-align: center;
				margin-bottom: 10px;
			}
			.login-btn {
				margin-top: 10px;
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
					margin-bottom: 10px;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
`;

export default NewRegisterPage;
