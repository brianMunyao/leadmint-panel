import React from 'react';

import TabContainer from '../components/TabContainer';
import AppLineChart from '../components/AppLineChart';
import TopAppsTable from '../components/TopAppsTable';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import AppBtn from '../components/AppBtn';
import { openFilterModal } from '../store/reducers/appsReducer';

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
	const dispatch = useDispatch();

	return (
		<Container>
			<TabContainer title="Reports">
				<div className="reports-inner">
					<div className="filter-btn-con">
						<AppBtn
							style={{ width: 100 }}
							onClick={() => dispatch(openFilterModal())}
						>
							Filter
						</AppBtn>
					</div>
					<AppLineChart data={data} />

					<TopAppsTable data={apps} />
				</div>
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
	.reports-inner {
		display: flex;
		flex-direction: column;
		gap: 30px;

		.filter-btn-con {
			display: flex;
			justify-content: flex-end;
		}
	}
`;

export default ReportsTab;
