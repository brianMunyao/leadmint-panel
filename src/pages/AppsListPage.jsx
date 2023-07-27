import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

import TopAppsTable from '../components/TopAppsTable';

const AppsListPage = () => {
	const apps = useSelector((state) => state.apps.apps);

	return (
		<Container>
			<TopAppsTable addAppBtn data={apps} />
		</Container>
	);
};

const Container = styled.div``;

export default AppsListPage;
