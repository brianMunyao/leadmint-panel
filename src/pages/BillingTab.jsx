import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { IoCash } from 'react-icons/io5';
import { styled } from 'styled-components';

import TabContainer from '../components/TabContainer';
import DashStat from '../components/DashStat';
import AppTable from '../components/AppTable';
import AppBtn from '../components/AppBtn';
import { formatCurrency } from '../utils/funcs';

const BillingTab = () => {
	const apps = useSelector((state) => state.apps.apps);

	const downloadInvoice = (id) => {
		console.log('Handle download here', id);
	};

	const historyColumns = [
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
		{
			field: 'edit',
			headerName: '',
			sortable: false,
			width: 100,
			flex: 1,
			disableColumnMenu: true,
			disableClickEventBubbling: true,
			renderCell: (params) => {
				return (
					<AppBtn
						style={{
							fontSize: 14,
							width: 'fit-content',
							margin: 'auto',
							padding: '5px 10px',
							borderRadius: 5,
						}}
						onClick={() => downloadInvoice(params.row.id)}
					>
						Download
					</AppBtn>
				);
			},
		},
	];

	return (
		<Container>
			<TabContainer title="Payments">
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

					<AppTable
						title=""
						allowExport={false}
						addAppBtn={false}
						data={apps}
						TopToolbar={() => <div>hello</div>}
						columns={historyColumns}
					/>
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
	.edit-btn {
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 30px;
		}
	}
`;

export default BillingTab;
