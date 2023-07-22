import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import colors from '../config/colors';

const MiniTabs = ({ tabs = [], style }) => {
	const location = useLocation();
	return (
		<Container style={style}>
			<div className="mini-tabs">
				{tabs.map((tab, i) => (
					<Link to={tab.to} key={i}>
						<div
							className={`tab ${
								location.pathname === tab.to ? 'active' : ''
							}`}
						>
							{tab.name}
						</div>
					</Link>
				))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	.mini-tabs {
		display: flex;
		.tab {
			/* background: ${colors.blueDarkLight}; */
			border-bottom: 2px solid #fff0;
			padding: 10px 15px;
			font-weight: 500;
			transition: all 0.2s linear;
			color: grey;
		}
		.tab.active {
			color: ${colors.blueDark};
			background: ${colors.blueDarkLight};
			border-bottom: 2px solid ${colors.blueDark};
		}
	}
`;

export default MiniTabs;
