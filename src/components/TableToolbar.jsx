import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch } from 'react-redux';

import AppBtn from './AppBtn';
import { openAddAppModal } from '../store/reducers/appsReducer';
import { styled } from 'styled-components';

const TableToolbar = ({
	title = 'Top Apps',
	allowExport = true,
	addAppBtn = true,
}) => {
	const dispatch = useDispatch();

	return (
		<Container>
			<GridToolbarContainer
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '13px 15px 0',
				}}
			>
				<h3 style={{ marginTop: 5, marginLeft: 5 }}>{title}</h3>

				<div className="top-right">
					{allowExport && <GridToolbarExport />}
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
		</Container>
	);
};

const Container = styled.div`
	.top-right {
		display: flex;
		align-items: center;
		gap: 20px;
	}
`;

export default TableToolbar;
