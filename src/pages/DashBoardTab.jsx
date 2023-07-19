import React from 'react';

import TabContainer from '../components/TabContainer';
import { IoCash } from 'react-icons/io5';
import DashStat from '../components/DashStat';
import { styled } from 'styled-components';
import TopAppsTable from '../components/TopAppsTable';

const DashBoardTab = () => {
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

				<TopAppsTable />
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
	.dash-stats-con {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}
`;

export default DashBoardTab;
