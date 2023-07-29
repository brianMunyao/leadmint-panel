import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { styled } from 'styled-components';
// import { Link } from 'react-router-dom';

import colors from '../config/colors';
import { formatCurrency } from '../utils/funcs';
// import AppBtn from './AppBtn';
import TableToolbar from './TableToolbar';

const defaultColumns = [
	{
		field: 'appID',
		headerName: 'App ID',
		disableColumnMenu: true,
		type: 'number',
		width: 70,
	},
	{
		field: 'name',
		headerName: 'Name',
		width: 90,
		disableColumnMenu: true,
	},
	{
		field: 'revenue',
		headerName: 'Revenue',
		width: 100,
		disableColumnMenu: true,
		type: 'number',
		renderCell: (params) => formatCurrency(params.row.revenue),
	},
	{
		field: 'click',
		headerName: 'Click',
		width: 70,
		disableColumnMenu: true,
		type: 'number',
	},
	{
		field: 'conversion',
		headerName: 'Conversion',
		type: 'number',
		disableColumnMenu: true,
	},
	{
		field: 'users',
		headerName: 'Users',
		width: 65,
		type: 'number',
		disableColumnMenu: true,
	},
];

const AppTable = ({
	columns = defaultColumns,
	title = 'Top Apps',
	data = [],
	allowExport = true,
	addAppBtn,
	brief,
	rowsPerPage = 10,
	TopToolbar,
	TopToolbarShown = true,
}) => {
	const handleRowClick = (params) => {
		console.log(params);
	};

	const DefaultToolbar = () => (
		<TableToolbar
			addAppBtn={addAppBtn}
			allowExport={allowExport}
			title={title}
		/>
	);

	return (
		<Container>
			<DataGrid
				rows={data}
				columns={columns}
				disableRowSelectionOnClick
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: rowsPerPage },
					},
				}}
				disableColumnMenu={true}
				pageSizeOptions={5}
				style={{ background: '#fff' }}
				onRowDoubleClick={handleRowClick}
				slots={{
					toolbar: TopToolbarShown
						? DefaultToolbar
						: TopToolbar
						? TopToolbar
						: () => <div></div>,
					noRowsOverlay: () => <div>No data</div>,
				}}
				hideFooter={brief}
			/>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: fit-content;
	border-radius: 10px;
	overflow: hidden;
	padding: 10px;
`;

export default AppTable;
