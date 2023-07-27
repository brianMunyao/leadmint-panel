import React from 'react';
import { styled } from 'styled-components';

import colors from '../config/colors';

const AppBtn = ({
	negative,
	rounded,
	secondary,
	children,
	className,
	onClick,
	btnType = 'button',
}) => {
	return (
		<Container
			type={btnType}
			negative={negative}
			secondary={secondary}
			className={className}
			onClick={onClick}
			style={{ borderRadius: rounded ? 100 : 8 }}
		>
			{children}
		</Container>
	);
};

const Container = styled.button`
	font-size: 15px;
	gap: 6px;
	border: none;
	background: ${({ secondary, negative }) =>
		negative ? '#fff' : secondary ? colors.blueLight : colors.primaryDark};
	color: ${({ secondary, negative }) =>
		negative ? colors.blueDark : secondary ? '#000' : '#fff'};
	border: ${({ negative }) =>
		`1px solid ${negative ? colors.blueDark : 'transparent'}`};
	padding: 8px 15px;

	cursor: pointer;
	transition: all 0.2s linear;
	width: 100%;
	text-align: center;

	&:hover {
		background: ${({ secondary, negative }) =>
			negative
				? colors.blueDark
				: secondary
				? colors.blueLightDark
				: colors.blueDarker};
		color: #fff;
	}
	&:active {
		transform: translate(0px, 2px) scaleX(0.99);
	}
`;

export default AppBtn;
