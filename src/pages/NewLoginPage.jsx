import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import leadmint from '../assets/leadmint.png';
import FormItemAlt from '../components/FormItemAlt';
import AppBtn from '../components/AppBtn';

const NewLoginPage = () => {
	return (
		<Container>
			<div className="inner">
				<img src={leadmint} alt="leadmint-logo" />

				<div className="form-con">
					<p className="alt">
						Don't have an account?{' '}
						<Link to="/register">Register</Link>
					</p>

					<h3 className="form-title">Login</h3>
					<FormItemAlt
						name="email"
						error=""
						placeholder="Email Address"
						inputType="email"
						value=""
					/>
					<FormItemAlt
						name="password"
						error=""
						placeholder="Password"
						inputType="password"
						value=""
					/>

					<AppBtn
						rounded
						className="login-btn"
						onClick={() => console.log('login')}
					>
						Login
					</AppBtn>

					<p className="forgot">
						Forgot password? <Link to="/reset-password">Reset</Link>
					</p>
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
		}
	}
`;

export default NewLoginPage;
