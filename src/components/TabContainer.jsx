import React from 'react';
import { styled } from 'styled-components';

import person from '../assets/person.jpg';

const TabContainer = ({ title = '', children }) => {
	return (
		<Container>
			<div className="tab-topbar">
				<span className="tab-title">{title}</span>

				<div className="user-icon">
					<img src={person} alt="person" />
				</div>
			</div>

			<div className="tab-content">{children}</div>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 60px 1fr;
	overflow: auto;
	background: #f7f7f7;

	.tab-topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 20px;
		border-bottom: 2px solid #efefef;

		.tab-title {
			font-size: 23px;
		}

		.user-icon {
			width: 40px;
			height: 40px;
			border-radius: 20px;
			overflow: hidden;
			border: 2px solid #bcbcbc;

			img {
				height: 100%;
				width: 100%;
			}
		}
	}
	.tab-content {
		padding: 20px;
		height: 100%;
	}
`;

export default TabContainer;
