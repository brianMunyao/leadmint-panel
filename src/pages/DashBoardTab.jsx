import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoCash } from 'react-icons/io5';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { styled } from 'styled-components';

import TabContainer from '../components/TabContainer';
import DashStat from '../components/DashStat';
import TopAppsTable from '../components/TopAppsTable';
// import AppBarChart from '../components/AppBarChart';
import AppLineChart from '../components/AppLineChart';
import ErrorComponent from '../components/ErrorComponent';

const weekData = [
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

const DashBoardTab = () => {
	const apps = useSelector((state) => state.apps.apps);
	const [pageError, setPageError] = useState(
		'Due to bank holiday in india all the payment will be cleared on Monday'
	);

	return (
		<Container>
			<TabContainer title="Dashboard">
				{pageError && (
					<div className="notifications">
						<p className="notification-title">Notifications</p>
						<ErrorComponent errorMessage={pageError} />
					</div>
				)}
				<div className="dash-stats-con">
					<DashStat
						title="Total Revenue"
						value="$25k"
						difference="+$8.700"
						Icon={IoCash}
					/>
					<DashStat
						title="Today Conversion"
						value="$1,000"
						difference="+212"
						Icon={BsFillBoxSeamFill}
					/>
					<DashStat
						title="Today Users"
						value="$100k"
						difference="-$212"
						negativeDiff
						Icon={BsFillBoxSeamFill}
					/>
					<DashStat
						title="Today Click"
						value="$10k"
						difference="+$212"
						Icon={BsFillBoxSeamFill}
					/>
				</div>

				<div className="apps-chart">
					{/* <AppBarChart /> */}
					<AppLineChart data={weekData} />
					<TopAppsTable brief data={apps} />
				</div>
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
	.notifications {
		margin-bottom: 25px;
		p.notification-title {
			font-weight: 500;
			margin-bottom: 15px;
		}
	}
	.dash-stats-con {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-auto-rows: 120px;
		gap: 15px;
	}
	.apps-chart {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 20px;
		margin: 30px 0 20px;
	}
`;

export default DashBoardTab;
