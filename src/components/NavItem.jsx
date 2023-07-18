import React from 'react';
import { styled } from 'styled-components';
import { BsQuestionCircle } from 'react-icons/bs';

import colors from '../config/colors';
import data from '../config/data.json';

const NavItem = ({
	logout = false,
	onClick,
	isActive = false,
	label = '',
	Icon = BsQuestionCircle,
	screenWidth,
	style,
}) => {
	return (
		<Container
			isActive={isActive}
			title={label}
			screenWidth={screenWidth}
			onClick={onClick && onClick}
			style={style}
			logout={logout}
		>
			<Icon />
			<span className="inner">{label}</span>
			<span className="outer">{label}</span>
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
	justify-content: ${({ screenWidth }) =>
		screenWidth <= data.navSnapWidth ? 'center' : 'flex-start'};
	gap: 5px;
	transition: all 0.2s linear;
	color: ${({ isActive, logout }) =>
		isActive ? '#fff' : logout ? colors.danger : '#3d3d3d'};
	background: ${({ isActive, logout }) =>
		isActive
			? logout
				? colors.danger
				: colors.blueDark
			: logout
			? colors.dangerLight
			: '#fff'};

	margin-top: ${({ logout }) => (logout ? 'auto' : 'initial')};

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
		display: ${({ screenWidth }) =>
			screenWidth <= data.navSnapWidth ? 'none' : 'block'};
	}
	svg {
		font-size: ${({ screenWidth }) =>
			screenWidth <= data.navSnapWidth ? '22px' : 'initial'};
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
