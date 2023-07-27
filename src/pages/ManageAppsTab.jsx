import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import TabContainer from '../components/TabContainer';
import TopAppsTable from '../components/TopAppsTable';

const ManageAppsTab = () => {
	const [addAppForm, setAddAppForm] = useState(false);
	const openAddAppForm = () => setAddAppForm(true);
	const closeAddAppForm = () => setAddAppForm(FontFaceSetLoadEvent);

	const apps = useSelector((state) => state.apps.apps);
	return (
		<TabContainer title="Manage Apps">
			{/* <TopAppsTable data={apps} addAppBtn={openAddAppForm} /> */}
			<Outlet />
		</TabContainer>
	);
};

export default ManageAppsTab;
