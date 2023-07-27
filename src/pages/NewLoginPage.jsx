import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

// import leadmint from '../assets/leadmint.png';
import FormItemAlt from '../components/FormItemAlt';
import AppBtn from '../components/AppBtn';

const NewLoginPage = () => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={Yup.object({
				email: Yup.string()
					.email('Invalid email')
					.required('Email is required'),
				password: Yup.string().required('Password is required'),
			})}
			validateOnBlur={true}
			onSubmit={(values) => {
				// TODO: handle login here
				console.log(values);
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
					<Container>
						<div></div>
						<div className="inner">
							{/* <img src={leadmint} alt="leadmint-logo" /> */}

							<div className="form-con">
								<h2 className="form-title">Sign In</h2>
								<p className="form-subtitle">
									to your LeadMint Account
								</p>
								<div className="form-inputs">
									<FormItemAlt
										name="email"
										placeholder="Enter your Email ID"
										inputType="email"
										value={values.email}
										error={errors.email}
										onChange={handleChange('email')}
										onBlur={handleBlur('email')}
										touched={touched.email}
									/>
									<FormItemAlt
										name="password"
										placeholder="Enter your password"
										inputType="password"
										value={values.password}
										error={errors.password}
										onChange={handleChange('password')}
										onBlur={handleBlur('password')}
										touched={touched.password}
									/>
								</div>

								<AppBtn
									btnType="submit"
									className="login-btn"
									onClick={() => console.log('login')}
								>
									Login
								</AppBtn>

								<p className="forgot">
									<Link to="/reset-password">
										Forgot password?
									</Link>
								</p>
							</div>

							<p className="alt">
								Don't have a LeadMint account?{' '}
								<Link to="/register">Sign Up Now</Link>
							</p>
						</div>

						<p className="footer">
							© 2023 LeadMint Technology Private Limited, All
							Right Reserved
						</p>
					</Container>
				</form>
			)}
		</Formik>
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
				margin: 10px 0;
				display: flex;
				gap: 15px;
				flex-direction: column;
			}

			.forgot {
				text-align: center;
				color: grey;
				margin-top: 20px;
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

export default NewLoginPage;
