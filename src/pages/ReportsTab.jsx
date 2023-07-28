import React from 'react';

import TabContainer from '../components/TabContainer';
import AppLineChart from '../components/AppLineChart';
import TopAppsTable from '../components/TopAppsTable';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const data = [
	{
		name: 'Mon',
		amount: 2400,
	},
	{
		name: 'Tue',
		amount: 2210,
	},
	{
		name: 'Wed',
		amount: 2290,
	},
	{
		name: 'Thur',
		amount: 2000,
	},
	{
		name: 'Fri',
		amount: 2181,
	},
	{
		name: 'Sat',
		amount: 2500,
	},
	{
		name: 'Sun',
		amount: 2100,
	},
];

const ReportsTab = () => {
	const apps = useSelector((state) => state.apps.apps);

	return (
		<Container>
			<TabContainer title="Reports">
				<div className="reports-inner">
					<AppLineChart data={data} />

					<TopAppsTable data={apps} />
				</div>
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
	.reports-inner {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
`;

export default ReportsTab;
