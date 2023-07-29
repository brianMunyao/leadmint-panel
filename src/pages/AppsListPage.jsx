import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { LuEdit3 } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import AppTable from '../components/AppTable';
import { formatCurrency } from '../utils/funcs';

const AppsListPage = () => {
	const apps = useSelector((state) => state.apps.apps);

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
			renderCell: (params) => (
				<Link
					to={`/manage-apps/edit-app/${params.row.id}`}
					style={{ margin: 'auto' }}
				>
					<LuEdit3 />
				</Link>
			),
		},
	];

	return (
		<Container>
			<AppTable
				title="My Apps"
				// allowExport={false}
				// addAppBtn={false}
				data={apps}
				// TopToolbar={() => <div>hello</div>}
				columns={historyColumns}
			/>
		</Container>
	);
};

const Container = styled.div``;

export default AppsListPage;
