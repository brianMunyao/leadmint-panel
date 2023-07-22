import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { TbLogout2, TbReportAnalytics } from 'react-icons/tb';
import { FaUserCog } from 'react-icons/fa';

import DashBoardTab from './DashBoardTab';
import leadmint from '../assets/leadmint.png';
import leadmintMini from '../assets/leadmint-mini.png';
import BillingTab from './BillingTab';
import colors from '../config/colors';
import NavItem from '../components/NavItem';
import data from '../config/data.json';
import ManageAppsTab from './ManageAppsTab';
import ReportsTab from './ReportsTab';
import AccountTab from './AccountTab';
import { useDispatch, useSelector } from 'react-redux';
import { closeNav, openNav } from '../store/reducers/navReducer';
import AddAppModal from '../components/AddAppModal';
import { closeAddAppModal } from '../store/reducers/appsReducer';

const HomePage = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const navPages = [
		{
			Icon: BiSolidDashboard,
			navTitle: 'DashBoard',
			TabComponent: DashBoardTab,
			to: '/',
		},
		{
			Icon: MdOutlineAppRegistration,
			navTitle: 'Manage Apps',
			TabComponent: ManageAppsTab,
			to: '/manage-apps',
		},
		{
			Icon: BsFillFileEarmarkTextFill,
			navTitle: 'Billing',
			TabComponent: BillingTab,
			to: '/billing',
		},
		{
			Icon: TbReportAnalytics,
			navTitle: 'Reports',
			TabComponent: ReportsTab,
			to: '/reports',
		},
		{
			Icon: FaUserCog,
			navTitle: 'My Account',
			TabComponent: AccountTab,
			to: '/account',
		},
	];

	const dispatch = useDispatch();
	const navOpened = useSelector((state) => state.nav.navOpened);
	const addAppModal = useSelector((state) => state.apps.addAppModal);

	const logoutUser = () => {
		navigate('/login');
	};

	useEffect(() => {
		window.addEventListener('load', () => {
			window.innerWidth <= data.navSnapWidth
				? dispatch(closeNav())
				: dispatch(openNav());
		});
		window.addEventListener('resize', () => {
			window.innerWidth <= data.navSnapWidth
				? dispatch(closeNav())
				: dispatch(openNav());
		});
	}, []);

	return (
		<>
			<Container separatorPos={navOpened ? 200 : 60}>
				<nav>
					<img
						className="logo-img"
						src={!navOpened ? leadmintMini : leadmint}
						alt="leadmint-logo"
					/>

					<div className="nav-links">
						{navPages.map((link, i) => (
							<Link to={link.to}>
								<NavItem
									key={i}
									isActive={
										link.to.length > 1
											? location.pathname.includes(
													link.to
											  )
											: location.pathname.length === 1
											? true
											: false
									}
									label={link.navTitle}
									Icon={link.Icon}
									navOpened={navOpened}
								/>
							</Link>
						))}
					</div>

					<NavItem
						logout
						// isActive={link.to === location.pathname}
						label="Logout"
						Icon={TbLogout2}
						navOpened={navOpened}
						onClick={logoutUser}
					/>
				</nav>

				<main>
					<div className="inner-main">
						<Outlet />
					</div>
				</main>
			</Container>

			<AddAppModal
				isModalOpen={addAppModal}
				closeModal={() => dispatch(closeAddAppModal())}
			/>
		</>
	);
};

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	/* overflow: hidden; */

	//positioning styles
	nav,
	main {
		position: absolute;
		top: 0;
		bottom: 0;
		transition: all 0.2s linear;
	}
	nav {
		z-index: 10;
		background: ${colors.white};
		width: ${({ separatorPos }) => `${separatorPos}px`};
		/* border-right: 2px solid #efefef; */
		overflow: hidden;
	}
	main {
		background: #fafafa;
		left: ${({ separatorPos }) => `${separatorPos}px`};
		right: 0;
	}

	//inner styles
	nav {
		padding: 30px 8px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;

		.logo-img {
			height: 25px;
			margin: 0 0 25px;
		}
		.nav-links {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 8px;
			a {
				width: 100%;
			}
		}
	}
	main {
		.inner-main {
			position: relative;
			height: 100%;
			overflow-y: auto;
		}
		/* min-width: 500px; */
	}

	@media (max-width: 400px) {
		/* nav {
			bottom: 0;
			height: 70px;
			left: 0;
			width: 100%;
			top: initial;
			border-top: 2px solid #efefef;
			border-right: none;
			padding: 10px 20px;
			align-items: flex-start;
			flex-direction: row;
			justify-content: flex-start;

			.logo-img {
				display: none;
			}
			.nav-links {
				display: flex;
				flex-direction: row;
				width: fit-content;
				gap: 30px;
			}
		}
		main {
			top: 0;
			left: 0;
			right: 0;
			bottom: 70px;
		} */
	}
`;

export default HomePage;
