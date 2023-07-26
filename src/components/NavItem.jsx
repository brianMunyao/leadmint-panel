import React from 'react';
import { styled } from 'styled-components';
import { BsQuestionCircle } from 'react-icons/bs';

import colors from '../config/colors';

const NavItem = ({
	logout = false,
	onClick,
	isActive = false,
	label = '',
	Icon = BsQuestionCircle,
	style,
	navOpened = true,
}) => {
	return (
		<Container
			isActive={isActive}
			title={label}
			onClick={onClick && onClick}
			style={style}
			logout={logout}
			navOpened={navOpened}
		>
			<Icon />
			<span className="inner">{label}</span>
			{/* <span className="outer">{label}</span> */}
		</Container>
	);
};

const Container = styled.div`
	cursor: pointer;
	width: 100%;
	padding: 10px;
	border-radius: 7px;
	display: flex;
	align-items: center;
	justify-content: ${({ navOpened }) =>
		!navOpened ? 'center' : 'flex-start'};
	gap: 5px;
	transition: all 0.2s linear;
	color: ${({ isActive, logout }) =>
		isActive ? '#fff' : logout ? colors.danger : '#fff'};
	background: ${({ isActive, logout }) =>
		isActive
			? logout
				? colors.danger
				: colors.blueDark
			: logout
			? colors.dangerLight
			: '#fff0'};

	margin-top: ${({ logout }) => (logout ? '20px' : 'initial')};

	&:hover {
		background: ${({ isActive, logout }) =>
			isActive
				? colors.blueDarker
				: logout
				? colors.danger
				: colors.blueDarkLight};
		color: ${({ isActive, logout }) =>
			isActive ? '#fff' : logout ? '#fff' : colors.blueDarker};
	}
	.outer {
		display: none;
	}

	.inner {
		font-weight: 300;
		font-size: 15px;
		letter-spacing: 0.2px;
		display: ${({ navOpened }) => (!navOpened ? 'none' : 'block')};
	}
	svg {
		font-size: ${({ navOpened }) => (!navOpened ? '22px' : 'initial')};
	}

	@media (max-width: 400px) {
		flex-direction: column;
		.outer {
			display: flex;
			position: absolute;
			bottom: 0;
			color: #000;
			font-size: 13.5px;
		}
	}
`;

export default NavItem;
