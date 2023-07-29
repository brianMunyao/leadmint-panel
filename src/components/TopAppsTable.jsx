import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../config/colors';
import { formatCurrency } from '../utils/funcs';
import AppBtn from './AppBtn';
import TableToolbar from './TableToolbar';

const TopAppsTable = ({
	title = 'Top Apps',
	data = [],
	allowExport = true,
	addAppBtn,
	brief,
	rowsPerPage = 10,
}) => {
	const columnsBrief = [
		{
			field: 'appID',
			headerName: 'App ID',
			type: 'number',
			width: 70,
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
		},
		{
			field: 'revenue',
			headerName: 'Revenue',
			flex: 1,
			type: 'number',
			renderCell: (params) => {
				return formatCurrency(params.row.revenue);
			},
		},
		{
			field: 'click',
			headerName: 'Click',
			flex: 1,
			type: 'number',
		},
		{
			field: 'conversion',
			headerName: 'Conversion',
			flex: 1,
			type: 'number',
		},
		{
			field: 'users',
			headerName: 'Users',
			flex: 1,
			type: 'number',
		},
	];

	const columns = [
		{
			field: 'appID',
			headerName: 'App ID',
			type: 'number',
			width: 70,
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
		},
		{
			field: 'revenue',
			headerName: 'Revenue',
			type: 'number',
			flex: 1,
			renderCell: (params) => {
				return formatCurrency(params.row.revenue);
			},
		},
		{
			field: 'click',
			headerName: 'Click',
			type: 'number',
			flex: 1,
		},
		{
			field: 'conversion',
			headerName: 'Conversion',
			type: 'number',
			flex: 1,
		},
		{
			field: 'users',
			headerName: 'Users',
			flex: 1,
			type: 'number',
		},
		{
			field: 'edit',
			headerName: '',
			sortable: false,
			flex: 1,
			disableClickEventBubbling: true,
			renderCell: (params) => {
				return (
					<Link to={`/manage-apps/edit-app/${params.row.id}`}>
						<AppBtn className="edit-btn">Edit</AppBtn>
					</Link>
				);
			},
		},
	];

	const handleRowClick = (params) => {
		console.log(params);
	};

	return (
		<Container>
			<DataGrid
				rows={data}
				columns={brief ? columnsBrief : columns}
				disableRowSelectionOnClick
				disableColumnMenu
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: rowsPerPage },
					},
				}}
				pageSizeOptions={5}
				style={{ background: '#fff' }}
				onRowDoubleClick={handleRowClick}
				slots={{
					toolbar: () => (
						<TableToolbar
							addAppBtn={addAppBtn}
							allowExport={allowExport}
							title={title}
						/>
					),
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

	.table-app-logo {
		position: relative;
		width: 100%;
		height: 100%;
		img {
			height: 70%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
		}
	}
	.add-app-btn {
		padding: 8px 10px;
		border-radius: 4px;
		width: fit-content;
		font-size: 14px;
		margin-left: 10px;
	}
	.edit-btn {
		background: dodgerblue;
		color: #fff;
		border: none;
		padding: 5px 10px;
		border-radius: 4px;

		&:hover {
			background: #167fe7;
		}
		&:active {
			background: #1072d3;
		}
	}
	.app-status {
		font-weight: 500;
		font-size: 13px;
		padding: 3px 6px;
		border-radius: 3px;

		&.status-green {
			color: ${colors.success};
			background: ${colors.successLight};
		}

		&.status-red {
			color: ${colors.danger};
			background: ${colors.dangerLight};
		}
	}
`;

export default TopAppsTable;
