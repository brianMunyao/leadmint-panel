import React from 'react';
import { useSelector } from 'react-redux';
import { IoCash } from 'react-icons/io5';

import TabContainer from '../components/TabContainer';
import DashStat from '../components/DashStat';
import { styled } from 'styled-components';
import TopAppsTable from '../components/TopAppsTable';
import AppBarChart from '../components/AppBarChart';

const DashBoardTab = () => {
	const apps = useSelector((state) => state.apps.apps);

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
