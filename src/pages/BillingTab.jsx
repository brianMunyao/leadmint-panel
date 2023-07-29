import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { IoCash } from 'react-icons/io5';
import { styled } from 'styled-components';

import TabContainer from '../components/TabContainer';
import DashStat from '../components/DashStat';
// import AppsListPage from './AppsListPage';
import TopAppsTable from '../components/TopAppsTable';

const BillingTab = () => {
	const apps = useSelector((state) => state.apps.apps);

	return (
		<Container>
			<TabContainer title="Billing">
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
				</div>

				<div className="history-con">
					<h3>Transaction History</h3>

					<TopAppsTable title="" data={apps} />
				</div>
			</TabContainer>
		</Container>
	);
};
const Container = styled.div`
	height: 100%;
	.dash-stats-con {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		& > div {
			height: 120px;
			width: 300px;
		}
	}
	.history-con {
		margin-top: 25px;
		h3 {
			margin-bottom: 10px;
		}
	}
`;

export default BillingTab;
