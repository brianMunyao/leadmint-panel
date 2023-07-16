import React from 'react';
import { styled } from 'styled-components';
import { BsQuestionCircle } from 'react-icons/bs';

import colors from '../config/colors';
import data from '../config/data.json';

const NavItem = ({
	isActive = false,
	label = '',
	Icon = BsQuestionCircle,
	screenWidth,
}) => {
	return (
		<Container isActive={isActive} title={label} screenWidth={screenWidth}>
			<Icon />
			<span className="inner">{label}</span>
			<span className="outer">{label}</span>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	padding: 10px;
	border-radius: 7px;
	display: flex;
	align-items: center;
	justify-content: ${({ screenWidth }) =>
		screenWidth <= data.navSnapWidth ? 'center' : 'flex-start'};
	gap: 5px;
	transition: all 0.2s linear;
	color: ${({ isActive }) => (isActive ? '#fff' : '#3d3d3d')};
	background: ${({ isActive }) => (isActive ? colors.blueDark : '#fff')};

	&:hover {
		background: ${({ isActive }) =>
			isActive ? colors.blueDarker : colors.blueDarkLight};
		color: ${({ isActive }) => (isActive ? '#fff' : colors.blueDarker)};
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
