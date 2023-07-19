import React from 'react';
import { styled } from 'styled-components';

import logo from '../assets/leadmint-white.webp';
import formImg from '../assets/form-img.png';
import colors from '../config/colors';

const FormContainer = ({ title, children }) => {
	return (
		<Container>
			<div className="left">
				<img className="logo" src={logo} alt="logo" />

				<div className="top-img">
					<img src={formImg} alt="logo" />
				</div>

				<p className="tagline">
					Dive deeper into our thoroughly tested and optimized
					insignts to understand how much app is progressing daily.
				</p>
			</div>

			<div className="right">
				<div className="right-inner">
					<h2>{title}</h2>

					<div className="form-con">{children}</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	background: #f7f7f7;
	height: 100vh;
	min-height: 400px;
	width: 100%;
	padding: 25px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100%;
	overflow: auto;

	.left {
		height: 100%;
		width: 100%;
		padding: 25px;
		border-radius: 10px;
		background: ${colors.blueDark};
		color: #fff;
		display: flex;
		flex-direction: column;

		.logo {
			height: 30px;
			width: min-content;
		}
		.top-img {
			display: flex;
			justify-content: center;
			img {
				width: 100%;
				max-width: 450px;
			}
		}
		.tagline {
			font-size: 18px;
			font-weight: 500;
			letter-spacing: 0.2px;
			text-align: center;
			margin-top: 10px;
		}
	}

	.right {
		height: 100%;
		width: 100%;
		padding: 25px;
		display: flex;
		align-items: center;
		justify-content: center;

		.right-inner {
			max-width: 300px;
			height: fit-content;
			width: 100%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: max-content 1fr;
			gap: 30px;
			height: 100%;

			h2 {
				text-align: center;
			}
			.form-con {
				height: 100%;
				width: 100%;
			}
		}
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr;

		.left {
			height: fit-content;

			.logo {
				height: 30px;
				width: min-content;
			}
			.top-img {
				display: none;
			}
			.tagline {
				display: none;
			}
		}
	}
`;

export default FormContainer;
