import React from 'react';
import { styled } from 'styled-components';

import colors from '../config/colors';

const AppBtn = ({ children, className, onClick }) => {
	return (
		<Container className={className} onClick={onClick}>
			{children}
		</Container>
	);
};

const Container = styled.button`
	font-size: 15px;
	gap: 6px;
	border: none;
	background: ${colors.blueDark};
	color: #fff;
	padding: 8px 15px;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s linear;
	width: 100%;
	text-align: center;

	&:hover {
		background: ${colors.blueDarker};
	}
	&:active {
		transform: translate(0px, 2px) scaleX(0.99);
	}
	/* font-size: 15px;
	display: flex;
	align-items: center;
	gap: 6px;
	border: none;
	background: ${colors.yellow};
	padding: 8px 15px;
	border-radius: 8px;
	box-shadow: 3px 3px ${colors.green};
	cursor: pointer;
	transition: all 0.1s linear;
	width: fit-content;
	&:hover {
		transform: translate(-1px, -1px);
		box-shadow: 5px 5px ${colors.green};
	}
	&:active {
		transform: translate(2px, 2px);
		box-shadow: 1px 1px ${colors.green};
	} */
`;

export default AppBtn;
