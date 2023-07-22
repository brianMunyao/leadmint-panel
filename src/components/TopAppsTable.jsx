import {
	DataGrid,
	GridRow,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid';
import moment from 'moment';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';

import colors from '../config/colors';
import { formatCurrency } from '../utils/funcs';
import AppBtn from './AppBtn';
import AppModal from './AppModal';
import AddAppModal from './AddAppModal';
import { openAddAppModal } from '../store/reducers/appsReducer';

const TopAppsTable = ({ data = [], addAppBtn, brief }) => {
	const dispatch = useDispatch();

	const columnsBrief = [
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
			sortable: false,
			width: 60,
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
		// {
		// 	field: 'platform',
		// 	headerName: 'Platform',
		// 	disableColumnMenu: true,
		// },
		// {
		// 	field: 'startDate',
		// 	headerName: 'Start Date',
		// 	type: 'date',
		// 	disableColumnMenu: true,
		// 	renderCell: (params) => {
		// 		return moment(params.row.startDate).format('MMM DD, YYYY');
		// 	},
		// },
		{
			field: 'earningsLastMonth',
			headerName: 'Last Month Earnings',
			width: 120,
			type: 'number',
			disableColumnMenu: true,
			renderCell: (params) => {
				return formatCurrency(params.row.earningsLastMonth);
			},
		},
		{
			field: 'earningsThisMonth',
			headerName: 'This Month Earnings',
			width: 120,
			type: 'number',
			disableColumnMenu: true,
			renderCell: (params) => {
				return formatCurrency(params.row.earningsThisMonth);
			},
		},
		// {
		// 	field: 'status',
		// 	headerName: 'Status',
		// 	width: 100,
		// 	disableColumnMenu: true,
		// 	renderCell: (params) => {
		// 		return (
		// 			<span
		// 				className={`app-status ${
		// 					params.row.status === 0
		// 						? 'status-red'
		// 						: 'status-green'
		// 				}`}
		// 			>
		// 				{params.row.status === 0 ? 'Inactive' : 'Active'}
		// 			</span>
		// 		);
		// 	},
		// },
		// {
		// 	field: 'edit',
		// 	headerName: '',
		// 	sortable: false,
		// 	width: 65,
		// 	disableColumnMenu: true,
		// 	disableClickEventBubbling: true,
		// 	renderCell: (params) => {
		// 		const onClick = (e) => {
		// 			const currentRow = params.row;
		// 			return alert(JSON.stringify(currentRow, null, 4));
		// 		};

		// 		return (
		// 			<button className="edit-btn" onClick={onClick}>
		// 				Edit
		// 			</button>
		// 		);
		// 	},
		// },
	];

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
			sortable: false,
			width: 60,
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
			<GridToolbarContainer
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '5px 10px 0',
				}}
			>
				<h3 style={{ marginTop: 5, marginLeft: 5 }}>Top Apps</h3>

				<div>
					{!brief && <GridToolbarExport />}
					{addAppBtn && (
						<AppBtn
							onClick={() => dispatch(openAddAppModal())}
							className="add-app-btn"
						>
							Add New App
						</AppBtn>
					)}
				</div>
			</GridToolbarContainer>
		);
	};

	const EmptyRowsMessage = () => {
		return <GridRow>kjs</GridRow>;
	};

	return (
		<Container>
			<DataGrid
				rows={data}
				columns={brief ? columnsBrief : columns}
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
				hideFooter={brief}
			/>
		</Container>
	);
};

const Container = styled.div`
	/* background: #fff;
	padding: 20px;
	box-shadow: 2px 1px 4px rgba(240, 240, 240, 0.7);
	border-radius: 10px; */
	width: 100%;
	height: fit-content;
	/* overflow-y: auto; */

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
