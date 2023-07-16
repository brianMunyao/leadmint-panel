import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

// import NavBar from '../components/NavBar';
import colors from '../config/colors';

const ErrorPage = () => {
	return (
		<Container>
			{/* <NavBar /> */}

			<div className="error-section app-padding">
				<p className="text-404">404</p>
				<p className="text-lost">
					The page you are looking for <br />
					has been lost in space.
				</p>

				<Link to="/">
					<IoArrowBack /> Back to Home
				</Link>
			</div>
		</Container>
	);
};

const Container = styled.div`
	background: ${colors.black};
	min-height: 100vh;
	color: ${colors.white};

	.error-section {
		min-height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;

		.text-404 {
			font-size: 120px;
		}
		.text-lost {
			text-align: center;
			font-weight: 200;
			line-height: 30px;
		}
		a {
			color: ${colors.yellow};
			display: flex;
			align-items: center;
			gap: 5px;
		}
	}
`;

export default ErrorPage;
