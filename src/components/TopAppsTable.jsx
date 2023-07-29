import {
	DataGrid,
	GridRow,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid';
// import moment from 'moment';
import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import colors from '../config/colors';
import { formatCurrency } from '../utils/funcs';
import AppBtn from './AppBtn';
// import AppModal from './AppModal';
import { openAddAppModal } from '../store/reducers/appsReducer';
// import {
// 	openAddAppModal,
// 	closeAddAppModal,
// } from '../store/reducers/appsReducer';

const TopAppsTable = ({ title = 'Top Apps', data = [], addAppBtn, brief }) => {
	// const [addAppForm, setAddAppForm] = useState(true);
	// const openAddAppForm = () => setAddAppForm(true);
	// const closeAddAppForm = () => setAddAppForm(false);

	const dispatch = useDispatch();

	const columnsBrief = [
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
			renderCell: (params) => {
				return formatCurrency(params.row.revenue);
			},
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
			// width: 100,
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

	const columns = [
		{
			field: 'appID',
			headerName: 'App ID',
			disableColumnMenu: true,
			type: 'number',
			width: 100,
		},
		{
			field: 'name',
			headerName: 'Name',
			disableColumnMenu: true,
		},
		{
			field: 'revenue',
			headerName: 'Revenue',
			disableColumnMenu: true,
			type: 'number',
			renderCell: (params) => {
				return formatCurrency(params.row.revenue);
			},
		},
		{
			field: 'click',
			headerName: 'Click',
			disableColumnMenu: true,
			type: 'number',
			width: 130,
		},
		{
			field: 'conversion',
			headerName: 'Conversion',
			type: 'number',
			disableColumnMenu: true,
			width: 130,
		},
		{
			field: 'users',
			headerName: 'Users',
			width: 120,
			type: 'number',
			disableColumnMenu: true,
		},
		{
			field: 'edit',
			headerName: '',
			sortable: false,
			width: 100,
			disableColumnMenu: true,
			disableClickEventBubbling: true,
			renderCell: (params) => {
				// const onClick = (e) => {
				// 	const currentRow = params.row;
				// 	return alert(JSON.stringify(currentRow, null, 4));
				// };

				return (
					<Link to={`/manage-apps/edit-app/${params.row.id}`}>
						<button className="edit-btn">Edit</button>
					</Link>
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
				<h3 style={{ marginTop: 5, marginLeft: 5 }}>{title}</h3>

				<div>
					{!brief && <GridToolbarExport />}
					{addAppBtn && (
						<AppBtn
							className="add-app-btn"
							onClick={() => dispatch(openAddAppModal())}
						>
							Add New App
						</AppBtn>
					)}
				</div>
			</GridToolbarContainer>
		);
	};
	/* <Link to={'/manage-apps/add-app'}> */
	/* </Link> */

	const EmptyRowsMessage = () => {
		return <GridRow>kjs</GridRow>;
	};

	return (
		<>
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
		</>
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
