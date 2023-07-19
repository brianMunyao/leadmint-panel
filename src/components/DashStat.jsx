import React from 'react';
import { styled } from 'styled-components';

import colors from '../config/colors';

const DashStat = ({ title = '', value = '', Icon }) => {
	return (
		<Container className="dash-stat">
			<div className="ds-top">
				<div className="icon-con">
					<Icon />
				</div>

				<span className="ds-title">{title}</span>
			</div>

			<div className="ds-bottom">
				<span className="ds-value">{value}</span>
			</div>

			<Icon />
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	background: #fff;
	padding: 20px;
	box-shadow: 2px 1px 4px rgba(240, 240, 240, 0.7);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	overflow: hidden;
	border: 1px solid #ebebeb;

	&:hover {
		& > svg {
			transform: rotate(-35deg);
		}
	}

	.ds-top {
		display: flex;
		align-items: center;
		gap: 12px;
		z-index: 1;

		.icon-con {
			opacity: 0.8;
			background: ${colors.blueDarkLight};
			color: ${colors.blueDark};
			width: 35px;
			height: 35px;
			border-radius: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 17px;
		}
		.ds-title {
			font-size: 18px;
			color: #333333;
		}
	}
	.ds-bottom {
		z-index: 1;
		.ds-value {
			font-weight: 500;
			font-size: 28px;
		}
	}
	& > svg {
		position: absolute;
		bottom: -20px;
		right: -20px;
		color: rgba(240, 240, 240, 0.7);
		font-size: 100px;
		transform: rotate(-45deg);
		transition: all 0.1s linear;
	}
`;

export default DashStat;
