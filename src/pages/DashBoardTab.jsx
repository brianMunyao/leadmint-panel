import React from 'react';
import moment from 'moment';

import TabContainer from '../components/TabContainer';
import { IoCash } from 'react-icons/io5';
import DashStat from '../components/DashStat';
import { styled } from 'styled-components';
import TopAppsTable from '../components/TopAppsTable';
import AppBarChart from '../components/AppBarChart';

const DashBoardTab = () => {
	const apps = [
		{
			id: 1,
			appID: 6093,
			logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQBRWLfRIazYbzzE5VvvuNY0p_yQlF20ROQ&usqp=CAU',
			name: 'SpinBuzz',
			platform: 'Android',
			startDate: moment('2023-10-02').toDate(),
			earningsLastMonth: 110,
			earningsThisMonth: 0,
			status: 1,
		},
		{
			id: 2,
			appID: 12093,
			logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQBRWLfRIazYbzzE5VvvuNY0p_yQlF20ROQ&usqp=CAU',
			name: 'SpinBuzz',
			platform: 'Android',
			startDate: moment('2023-10-02').toDate(),
			earningsLastMonth: 40,
			earningsThisMonth: 0,
			status: 0,
		},
		{
			id: 3,
			appID: 93,
			logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQBRWLfRIazYbzzE5VvvuNY0p_yQlF20ROQ&usqp=CAU',
			name: 'SpinBuzz',
			platform: 'Android',
			startDate: moment('2023-10-02').toDate(),
			earningsLastMonth: 100,
			earningsThisMonth: 0,
			status: 1,
		},
	];
	return (
		<Container>
			<TabContainer title="Dashboard">
				<div className="dash-stats-con">
					<DashStat
						title="Total Revenue"
						value="$612,201"
						Icon={IoCash}
					/>
					<DashStat
						title="Total Revenue"
						value="$612,201"
						Icon={IoCash}
					/>
					<DashStat
						title="Total Revenue"
						value="$612,201"
						Icon={IoCash}
					/>
				</div>

				<div className="apps-chart">
					<TopAppsTable brief data={apps} />
					<AppBarChart />
				</div>
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
	.dash-stats-con {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}
	.apps-chart {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 20px;
		margin: 20px 0;
	}
`;

export default DashBoardTab;
