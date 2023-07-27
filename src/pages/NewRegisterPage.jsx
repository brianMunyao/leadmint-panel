import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormItemAlt from '../components/FormItemAlt';
import AppBtn from '../components/AppBtn';
// import leadmint from '../assets/leadmint.png';
import colors from '../config/colors';

const NewRegisterPage = () => {
	const [page, setPage] = useState(1);
	const [userData, setUserData] = useState(null);

	const moveToPage1 = () => setPage(1);
	const moveToPage2 = () => setPage(2);

	const finishSubmission = (page2Vals) => {
		const allData = { ...userData, ...page2Vals };
		console.log(allData);
		//TODO: handle registration here
	};

	useEffect(() => {
		if (!userData) moveToPage1();
	}, [userData]);

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
							<Formik
								initialValues={{
									name: '',
									email: '',
									password: '',
									password2: '',
								}}
								validationSchema={Yup.object({
									name: Yup.string().required(
										'Name is required'
									),
									email: Yup.string()
										.email('Invalid email')
										.required('Email is required'),
									password: Yup.string().required(
										'Password is required'
									),
									password2: Yup.string()
										.oneOf(
											[Yup.ref('password'), null],
											'Passwords must match'
										)
										.required('Password is required'),
								})}
								onSubmit={(values) => {
									setUserData(values);
									moveToPage2();
								}}
							>
								{({
									errors,
									values,
									touched,
									handleBlur,
									handleChange,
									handleSubmit,
								}) => (
									<form onSubmit={handleSubmit}>
										<div className="form-page form-page1">
											<FormItemAlt
												name="name"
												placeholder="Enter Your Name"
												value={values.name}
												error={errors.name}
												onChange={handleChange('name')}
												onBlur={handleBlur('name')}
												touched={touched.name}
											/>
											<FormItemAlt
												inputType="email"
												name="email"
												placeholder="Enter your Email ID"
												value={values.email}
												error={errors.email}
												onChange={handleChange('email')}
												onBlur={handleBlur('email')}
												touched={touched.email}
											/>

											<FormItemAlt
												inputType="password"
												name="password"
												placeholder="Enter your password"
												value={values.password}
												error={errors.password}
												onChange={handleChange(
													'password'
												)}
												onBlur={handleBlur('password')}
												touched={touched.password}
											/>
											<FormItemAlt
												inputType="password"
												name="password2"
												placeholder="Re-enter your password"
												value={values.password2}
												error={errors.password2}
												onChange={handleChange(
													'password2'
												)}
												onBlur={handleBlur('password2')}
												touched={touched.password2}
											/>

											<AppBtn btnType="submit">
												Next
											</AppBtn>
										</div>
									</form>
								)}
							</Formik>
						)}

						{page === 2 && (
							<Formik
								initialValues={{
									companyName: '',
									address1: '',
									address2: '',
									city: '',
									pincode: '',
									taxID: '',
								}}
								validationSchema={Yup.object({
									companyName: Yup.string().required(
										'Company name is required'
									),
									address1: Yup.string().required(
										'Address1 is required'
									),
									address2: Yup.string().required(
										'Address2 is required'
									),
									city: Yup.string().required(
										'City is required'
									),
									pincode: Yup.string().required(
										'Pin code is required'
									),
									taxID: Yup.string().required(
										'TaxID is required'
									),
								})}
								onSubmit={(values) => {
									finishSubmission(values);
								}}
							>
								{({
									errors,
									values,
									touched,
									handleBlur,
									handleChange,
									handleSubmit,
								}) => (
									<form onSubmit={handleSubmit}>
										<div className="form-page form-page2">
											<div className="go-back">
												<div onClick={moveToPage1}>
													<IoArrowBack />{' '}
													<span>Go Back</span>
												</div>
											</div>

											<FormItemAlt
												name="companyName"
												placeholder="Company Name"
												value={values.companyName}
												error={errors.companyName}
												onChange={handleChange(
													'companyName'
												)}
												onBlur={handleBlur(
													'companyName'
												)}
												touched={touched.companyName}
											/>
											<FormItemAlt
												name="address1"
												placeholder="Enter your Address Line 1"
												value={values.address1}
												error={errors.address1}
												onChange={handleChange(
													'address1'
												)}
												onBlur={handleBlur('address1')}
												touched={touched.address1}
											/>
											<FormItemAlt
												name="address2"
												placeholder="Enter your Address Line 2"
												value={values.address2}
												error={errors.address2}
												onChange={handleChange(
													'address2'
												)}
												onBlur={handleBlur('address2')}
												touched={touched.address2}
											/>
											<div className="two-inputs">
												<FormItemAlt
													name="city"
													placeholder="Enter your City"
													value={values.city}
													error={errors.city}
													onChange={handleChange(
														'city'
													)}
													onBlur={handleBlur('city')}
													touched={touched.city}
												/>
												<FormItemAlt
													name="pincode"
													placeholder="Enter your Pincode"
													value={values.pincode}
													error={errors.pincode}
													onChange={handleChange(
														'pincode'
													)}
													onBlur={handleBlur(
														'pincode'
													)}
													touched={touched.pincode}
												/>
											</div>
											<FormItemAlt
												inputType="tel"
												name="taxID"
												placeholder="Enter your Tax ID"
												value={values.taxID}
												error={errors.taxID}
												onChange={handleChange('taxID')}
												onBlur={handleBlur('taxID')}
												touched={touched.taxID}
											/>

											<AppBtn btnType="submit">
												Complete Sign Up
											</AppBtn>
										</div>
									</form>
								)}
							</Formik>
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
