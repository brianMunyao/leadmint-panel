import React from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import TabContainer from '../components/TabContainer';
import AppLineChart from '../components/AppLineChart';
// import TopAppsTable from '../components/TopAppsTable';
import AppBtn from '../components/AppBtn';
import { openFilterModal } from '../store/reducers/appsReducer';
import AppTable from '../components/AppTable';
import { formatCurrency } from '../utils/funcs';

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

const reportColumns = [
	{
		field: 'appID',
		headerName: 'App ID',
		width: 75,
		type: 'number',
	},
	{
		field: 'name',
		headerName: 'Name',
		width: 100,
		flex: 1,
	},
	{
		field: 'status',
		headerName: 'Status',
		// width: 100,
		flex: 1,
	},
	{
		field: 'date',
		headerName: 'Date',
		// width: 0,
		flex: 1,
		type: 'date',
	},
	{
		field: 'revenue',
		headerName: 'Earnings This Month',
		// width: 0,
		flex: 1,
		type: 'number',
		renderCell: (params) => formatCurrency(params.row.revenue),
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
						<span>App Reports</span>

						<AppBtn
							style={{ width: 100 }}
							onClick={() => dispatch(openFilterModal())}
						>
							Filter
						</AppBtn>
					</div>
					<AppLineChart data={data} />

					<AppTable
						title="Recent Data"
						allowExport={false}
						addAppBtn={false}
						data={apps}
						// TopToolbar={() => <div>hello</div>}
						columns={reportColumns}
					/>
					{/* <TopAppsTable data={apps} disableEditColumn /> */}
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
			justify-content: space-between;
			align-items: center;
			font-size: 17px;
			font-weight: 600;
		}
	}
`;

export default ReportsTab;
