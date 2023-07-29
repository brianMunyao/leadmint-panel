import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import TabContainer from '../components/TabContainer';

const ManageAppsTab = () => {
	return (
		<Container>
			<TabContainer title="Manage Apps">
				<Outlet />
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
`;

export default ManageAppsTab;
