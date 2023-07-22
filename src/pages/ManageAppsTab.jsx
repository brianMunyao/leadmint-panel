import React from 'react';
import { useSelector } from 'react-redux';

import TabContainer from '../components/TabContainer';
import TopAppsTable from '../components/TopAppsTable';

const ManageAppsTab = () => {
	const apps = useSelector((state) => state.apps.apps);
	return (
		<TabContainer title="Manage Apps">
			<TopAppsTable data={apps} addAppBtn />
		</TabContainer>
	);
};

export default ManageAppsTab;
