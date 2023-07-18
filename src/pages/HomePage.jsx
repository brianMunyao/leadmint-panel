import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { TbLogout2 } from 'react-icons/tb';

import DashBoardTab from './DashBoardTab';
import leadmint from '../assets/leadmint.png';
import leadmintMini from '../assets/leadmint-mini.png';
import BillingTab from './BillingTab';
import colors from '../config/colors';
import NavItem from '../components/NavItem';
import data from '../config/data.json';

const HomePage = () => {
	const location = useLocation();
	const navigate = useNavigate()
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [separatorPos, setSeparatorPos] = useState(
		window.innerWidth <= data.navSnapWidth ? 70 : 200
	);
	const navPages = [
		{
			Icon: BiSolidDashboard,
			navTitle: 'DashBoard',
			TabComponent: DashBoardTab,
			to: '/',
		},
		{
			Icon: BsFillFileEarmarkTextFill,
			navTitle: 'Billing',
			TabComponent: BillingTab,
			to: '/billing',
		},
	];

	const logoutUser = () =>{
		navigate('/login')
	}

	useEffect(() => {
		window.addEventListener('resize', () => {
			setScreenWidth(window.innerWidth);
			setSeparatorPos(window.innerWidth <= data.navSnapWidth ? 70 : 200);
		});
	}, []);

	return (
		<Container separatorPos={separatorPos}>
			<nav>
				<img
					className="logo-img"
					src={
						window.innerWidth <= data.navSnapWidth
							? leadmintMini
							: leadmint
					}
					alt="leadmint-logo"
				/>

				<div className="nav-links">
					{navPages.map((link, i) => (
						<Link to={link.to}>
							<NavItem
								key={i}
								isActive={link.to === location.pathname}
								label={link.navTitle}
								Icon={link.Icon}
								screenWidth={screenWidth}
							/>
						</Link>
					))}
				</div>

				<NavItem
					logout
					// isActive={link.to === location.pathname}
					label="Logout"
					Icon={TbLogout2}
					screenWidth={screenWidth}
					onClick={logoutUser}
				/>
			</nav>

			<main>
				<Outlet />
			</main>
		</Container>
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
		background: ${colors.white};
		width: ${({ separatorPos }) => `${separatorPos}px`};
		border-right: 2px solid #efefef;
	}
	main {
		background: #fafafa;
		left: ${({ separatorPos }) => `${separatorPos}px`};
		right: 0;
	}

	//inner styles
	nav {
		padding: 30px 10px 10px;
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
		/* min-width: 500px; */
	}

	@media (max-width: 400px) {
		nav {
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
		}
	}
`;

export default HomePage;
