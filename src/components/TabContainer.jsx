import React from 'react';
import { styled } from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { closeNav, openNav } from '../store/reducers/navReducer';
import { formatCurrency } from '../utils/funcs';
import { IoSettingsOutline } from 'react-icons/io5';

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
					<div className="amount-con">
						<p className="subtitle">{formatCurrency(10000)}</p>
						<p className="title">This Month</p>
					</div>
					<div className="separator"></div>
					<div className="amount-con">
						<p className="subtitle">{formatCurrency(10000)}</p>
						<p className="title">Last Month</p>
					</div>
					<div className="separator"></div>
					<span className="user-email">risahvraina@gmail.com</span>
					<span className="settings-icon">
						<IoSettingsOutline />
					</span>
				</div>
			</div>

			<div className="tab-content">{children}</div>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 60px 1fr;
	overflow: auto;
	background: #f7f7f7;
	flex: 1;

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
		position: sticky;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
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
			gap: 14px;

			.separator {
				height: 20px;
				width: 2px;
				background: #cecece;
				border-radius: 10px;
			}

			/* .earnings {
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
			} */

			/* .user-icon {
				width: 40px;
				height: 40px;
				border-radius: 20px;
				overflow: hidden;
				border: 2px solid #bcbcbc;

				img {
					height: 100%;
					width: 100%;
				}
			} */
			.amount-con {
				display: flex;
				align-items: center;
				gap: 10px;
				.title {
					font-size: 13px;
					font-weight: 400;
					opacity: 0.7;
				}
				.subtitle {
					font-size: 18px;
					font-weight: 600;
				}
			}
			.settings-icon {
				svg {
					cursor: pointer;
					font-size: 22px;
					&:hover {
						transform: rotate(10deg);
					}
				}
			}
		}
	}
	.tab-content {
		padding: 20px;
		height: 100%;
		/* overflow-y: auto; */
	}
`;

export default TabContainer;
