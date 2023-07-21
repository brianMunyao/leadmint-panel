import React from 'react';
import { styled } from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { RiMoneyCnyCircleLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import person from '../assets/person.jpg';
import { closeNav, openNav } from '../store/navReducer';
import { formatCurrency } from '../utils/funcs';

const TabContainer = ({ title = '', children }) => {
	const navOpened = useSelector((state) => state.nav.navOpened);
	const dispatch = useDispatch();

	return (
		<Container>
			<div className="tab-topbar">
				<div className="icon-title">
					{navOpened ? (
						<span
							className="icon nav-icon"
							onClick={() => dispatch(closeNav())}
						>
							<AiOutlineMenuFold />
						</span>
					) : (
						<span
							className="icon nav-icon"
							onClick={() => dispatch(openNav())}
						>
							<AiOutlineMenuUnfold />
						</span>
					)}
					<span className="tab-title">{title}</span>
				</div>

				<div className="right-top">
					<div className="earnings">
						<div className="icon earnings-icon">
							<RiMoneyCnyCircleLine />
						</div>

						<div>
							<p className="subtitle">{formatCurrency(10000)}</p>
							<p className="title">Last Week Earnings</p>
						</div>
					</div>

					<div className="user-icon">
						<img src={person} alt="person" />
					</div>
				</div>
			</div>

			<div className="tab-content">{children}</div>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 60px 1fr;
	overflow: auto;
	background: #f7f7f7;

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 30px;
		transition: all 0.2s linear;
		cursor: pointer;

		svg {
			font-size: 20px;
		}
	}

	.tab-topbar {
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 20px;
		border-bottom: 2px solid #efefef;
		.icon-title {
			display: flex;
			align-items: center;
			gap: 10px;
			.nav-icon {
				&:hover {
					background: #ebebeb;
				}
			}
		}

		.tab-title {
			font-size: 23px;
		}

		.right-top {
			display: flex;
			align-items: center;
			gap: 20px;

			.earnings {
				display: flex;
				align-items: center;
				gap: 10px;
				.earnings-icon {
					font-size: 240px;
					color: #a58d04;
					background: #f3d6333b;
				}
				div {
					display: flex;
					flex-direction: column;
					gap: 2px;

					.title {
						font-size: 12px;
						font-weight: 400;
						opacity: 0.7;
					}
					.subtitle {
						font-size: 18px;
						font-weight: 600;
						color: #d2b201;
					}
				}
			}

			.user-icon {
				width: 40px;
				height: 40px;
				border-radius: 20px;
				overflow: hidden;
				border: 2px solid #bcbcbc;

				img {
					height: 100%;
					width: 100%;
				}
			}
		}
	}
	.tab-content {
		padding: 20px;
		height: 100%;
		overflow-y: auto;
	}
`;

export default TabContainer;
