import {
	DataGrid,
	GridCell,
	GridRow,
	GridToolbarContainer,
	GridToolbarExport,
	GridToolbarExportContainer,
} from '@mui/x-data-grid';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { styled } from 'styled-components';

import colors from '../config/colors';
import { formatCurrency } from '../utils/funcs';
import AppBtn from './AppBtn';

const TopAppsTable = ({ data = [] }) => {
	const [newAppModal, setNewAppModal] = useState(false);

	const openNewAppModal = () => setNewAppModal(true);
	const closeNewAppModal = () => setNewAppModal(false);

	const columns = [
		{
			field: 'appID',
			headerName: 'App ID',
			disableColumnMenu: true,
			type: 'number',
			width: 80,
		},
		{
			field: 'logo',
			headerName: 'Logo',
			disableColumnMenu: true,
			renderCell: (params) => {
				return (
					<div className="table-app-logo">
						<img src={params.row.logo} alt={params.row.name} />
					</div>
				);
			},
		},
		{
			field: 'name',
			headerName: 'Name',
			disableColumnMenu: true,
		},
		{
			field: 'platform',
			headerName: 'Platform',
			disableColumnMenu: true,
		},
		{
			field: 'startDate',
			headerName: 'Start Date',
			type: 'date',
			disableColumnMenu: true,
			renderCell: (params) => {
				return moment(params.row.startDate).format('MMM DD, YYYY');
			},
		},
		{
			field: 'earningsLastMonth',
			headerName: 'Earnings Last Month',
			width: 120,
			type: 'number',
			disableColumnMenu: true,
			renderCell: (params) => {
				return formatCurrency(params.row.earningsLastMonth);
			},
		},
		{
			field: 'earningsThisMonth',
			headerName: 'Earnings This Month',
			width: 120,
			type: 'number',
			disableColumnMenu: true,
			renderCell: (params) => {
				return formatCurrency(params.row.earningsThisMonth);
			},
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 100,
			disableColumnMenu: true,
			renderCell: (params) => {
				return (
					<span
						className={`app-status ${
							params.row.status === 0
								? 'status-red'
								: 'status-green'
						}`}
					>
						{params.row.status === 0 ? 'Inactive' : 'Active'}
					</span>
				);
			},
		},
		{
			field: 'edit',
			headerName: '',
			sortable: false,
			width: 65,
			disableColumnMenu: true,
			disableClickEventBubbling: true,
			renderCell: (params) => {
				const onClick = (e) => {
					const currentRow = params.row;
					return alert(JSON.stringify(currentRow, null, 4));
				};

				return (
					<button className="edit-btn" onClick={onClick}>
						Edit
					</button>
				);
			},
		},
	];

	const handleRowClick = (params) => {
		console.log(params);
	};

	const CustomToolbar = () => {
		return (
			<GridToolbarContainer>
				<GridToolbarExport />
			</GridToolbarContainer>
		);
	};

	const EmptyRowsMessage = () => {
		return <GridRow>kjs</GridRow>;
	};

	return (
		<Container>
			<div className="top-bar">
				<span className="title">Top Apps</span>

				<AppBtn onClick={openNewAppModal}>Add New App</AppBtn>
			</div>
			<DataGrid
				rows={data}
				columns={columns}
				disableRowSelectionOnClick
				initialState={
					{
						// pagination: {
						// 	paginationModel: { page: 0, pageSize: 5 },
						// },
					}
				}
				pageSizeOptions={5}
				style={{ background: '#fff' }}
				onRowDoubleClick={handleRowClick}
				slots={{
					toolbar: CustomToolbar,
					noRowsOverlay: EmptyRowsMessage,
				}}
			/>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	overflow-y: auto;

	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 30px 0 15px;

		& > * {
			width: fit-content;
		}
		.title {
			font-size: 18px;
			font-weight: 600;
		}
	}

	.table-app-logo {
		position: relative;
		width: 100%;
		height: 100%;
		img {
			width: 100%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
		}
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
