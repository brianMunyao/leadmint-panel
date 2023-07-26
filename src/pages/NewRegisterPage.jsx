import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';

import FormItemAlt from '../components/FormItemAlt';
import AppBtn from '../components/AppBtn';
// import leadmint from '../assets/leadmint.png';
import colors from '../config/colors';

const NewRegisterPage = () => {
	const [page, setPage] = useState(1);

	const moveToPage1 = () => setPage(1);
	const moveToPage2 = () => setPage(2);

	return (
		<Container>
			<div></div>
			<div className="inner">
				{/* <img src={leadmint} alt="leadmint-logo" /> */}

				<div className="form-con">
					{page === 1 && <h2 className="form-title">Sign Up</h2>}
					<p className="form-subtitle">
						{page === 1
							? 'to your LeadMint Account'
							: 'Provide few more details to complete Sign Up'}
					</p>

					<div className="form-inputs">
						{page === 1 && (
							<div className="form-page form-page1">
								<FormItemAlt
									name="name"
									placeholder="ENter Your Name"
									value=""
								/>
								<FormItemAlt
									inputType="email"
									name="email"
									placeholder="Enter your Email ID"
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
									placeholder="Re-enter your password"
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
									name="companyName"
									placeholder="Company Name"
									value=""
								/>
								<FormItemAlt
									name="address1"
									placeholder="Enter your Address Line 1"
									value=""
								/>
								<FormItemAlt
									name="address2"
									placeholder="Enter your Address Line 2"
									value=""
								/>
								<div className="two-inputs">
									<FormItemAlt
										name="city"
										placeholder="Enter your City"
										value=""
									/>
									<FormItemAlt
										name="pincode"
										placeholder="Enter your Pincode"
										value=""
									/>
								</div>
								<FormItemAlt
									inputType="tel"
									name="taxID"
									placeholder="Enter your Tax ID"
									value=""
								/>

								<AppBtn>Complete Sign Up</AppBtn>
							</div>
						)}
					</div>
				</div>

				<p className="alt">
					Already have an account?{' '}
					<Link to="/login">Sign In Now</Link>
				</p>
			</div>
			<p className="footer">
				© 2023 LeadMint Technology Private Limited, All Right Reserved
			</p>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 30px;
	height: 100vh;
	min-height: 500px;
	background: #f7f7f7;
	padding: 10px;
	overflow: auto;

	.inner {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			margin-bottom: 30px;
			height: 30px;
			width: auto;
		}
		.form-con {
			width: 100%;
			max-width: 400px;
			background: #fff;
			padding: 40px;
			box-shadow: 4px 2px 10px #dededea0;
			border-radius: 4px;
			display: flex;
			flex-direction: column;

			.form-inputs {
				.form-page {
					display: flex;
					gap: 15px;
					flex-direction: column;
				}
			}

			.forgot {
				text-align: center;
				color: grey;
				margin-top: 20px;
			}
			.two-inputs {
				display: flex;
				gap: 10px;
			}
			.form-title {
				/* text-align: center; */
				margin-bottom: 5px;
			}
			.form-subtitle {
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
		.alt {
			text-align: center;
			color: grey;
			margin-top: 20px;
		}
	}
	.footer {
		font-size: 15px;
		color: grey;
	}
`;

export default NewRegisterPage;
