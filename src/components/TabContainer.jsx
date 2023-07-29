import React, { useState } from 'react';
import { styled } from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { IoCaretDown, IoSettingsOutline } from 'react-icons/io5';

import { closeNav, openNav } from '../store/reducers/navReducer';
import { formatCurrency, getInitials } from '../utils/funcs';
import colors from '../config/colors';

const TabContainer = ({ title = '', children }) => {
	const navOpened = useSelector((state) => state.nav.navOpened);
	const dispatch = useDispatch();

	const user = { name: 'Rishav Raina', email: 'rishavraina@gmail.com' };

	const [userInfo, setUserInfo] = useState(false);

	const closeUserInfo = () => setUserInfo(false);
	const toggleUserInfo = () => setUserInfo(!userInfo);

	return (
		<Container userInfo={userInfo}>
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

					{/* <span className="settings-icon">
						<IoSettingsOutline />
					</span> */}

					<span className="user-icon" onMouseLeave={closeUserInfo}>
						<span className="initials" onClick={toggleUserInfo}>
							{getInitials(user.name)}
						</span>

						<div className="user-info">
							<div className="top">
								<span className="user-name">{user.name}</span>
								<span className="user-email">{user.email}</span>
							</div>
						</div>
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
					color: ${colors.blueDark};
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

			.user-icon {
				background: ${colors.blueLight};
				position: relative;
				width: 40px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 30px;
				cursor: pointer;

				.initials {
					color: ${colors.primaryDark};
					font-weight: 600;
				}

				.user-info {
					position: absolute;
					display: ${({ userInfo }) => (userInfo ? 'block' : 'none')};
					background: #fff;
					padding: 18px;
					box-shadow: 2px 1px 10px rgba(240, 240, 240, 0.7);
					border-radius: 10px;
					border: 0.5px solid #e5e5e5;
					bottom: 0;
					right: 0;
					transform: translateY(90%);
					.top {
						display: flex;
						flex-direction: column;
						gap: 3px;
						font-size: 15px;
						letter-spacing: 0.2px;
						opacity: 0.8;
						.user-name {
							font-weight: 600;
						}
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
