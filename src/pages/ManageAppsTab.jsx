import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import TabContainer from '../components/TabContainer';
import TopAppsTable from '../components/TopAppsTable';
import { styled } from 'styled-components';

const ManageAppsTab = () => {
	const [addAppForm, setAddAppForm] = useState(false);
	const openAddAppForm = () => setAddAppForm(true);
	const closeAddAppForm = () => setAddAppForm(false);

	const apps = useSelector((state) => state.apps.apps);
	return (
		<Container>
			<TabContainer title="Manage Apps">
				{/* <TopAppsTable data={apps} addAppBtn={openAddAppForm} /> */}
				<Outlet />
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
`;

export default ManageAppsTab;
