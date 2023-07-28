import React from 'react';
import { styled } from 'styled-components';

const DashStat = ({
	title = '',
	value = '',
	difference = '',
	negativeDiff,
	Icon,
}) => {
	return (
		<Container className="dash-stat" negativeDiff={negativeDiff}>
			<div className="ds-left">
				<span className="ds-title">{title}</span>
				<div className="ds-val-diff">
					<span className="ds-value">{value}</span>
					<span className="ds-diff">{difference}</span>
				</div>
			</div>
			<div className="ds-right">
				<div className="icon-con">
					<Icon />
				</div>
			</div>
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
	align-items: flex-end;
	/* flex-direction: column; */
	gap: 5px;
	overflow: hidden;
	max-width: 300px;
	/* border: 1px solid #ebebeb; */

	/* &:hover {
		& > svg {
			transform: rotate(-35deg);
		}
	} */

	/* .ds-top {
		display: flex;
		align-items: center;
		gap: 12px;
		z-index: 1;

		.ds-title {
			font-size: 18px;
			color: #333333;
		}
	}
	.ds-bottom {
		z-index: 1;
	} */

	.ds-left {
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
		flex-direction: column;
		gap: 12px;
		height: 100%;
		flex: 1;

		.ds-title {
			font-size: 17px;
			font-weight: 500;
			color: #333333;
		}
		.ds-val-diff {
			.ds-value {
				font-weight: 600;
				font-size: 28px;
				margin-right: 8px;
			}
			.ds-diff {
				font-size: 13px;
				color: ${({ negativeDiff }) =>
					negativeDiff ? '#f12222' : '#00b374'};
				background: ${({ negativeDiff }) =>
					negativeDiff ? '#f1222210' : '#00b37413'};
				padding: 4px;
				border-radius: 4px;
			}
		}
	}

	.ds-right {
		.icon-con {
			opacity: 0.8;
			background: #394e7518;
			color: #15336d;
			width: 40px;
			height: 40px;
			border-radius: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 17px;
		}
	}
	/* & > svg {
		position: absolute;
		bottom: -20px;
		right: -20px;
		color: rgba(240, 240, 240, 0.7);
		font-size: 100px;
		transform: rotate(-45deg);
		transition: all 0.1s linear;
	} */
`;

export default DashStat;
