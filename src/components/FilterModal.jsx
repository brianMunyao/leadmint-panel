import React from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import AppModal from './AppModal';
import { closeFilterModal } from '../store/reducers/appsReducer';
import { IoClose } from 'react-icons/io5';

const FilterModal = () => {
	const { filterModalOpen, apps } = useSelector((state) => state.apps);
	const dispatch = useDispatch();

	return (
		<Container>
			<AppModal
				isOpen={filterModalOpen}
				closeModal={() => dispatch(closeFilterModal())}
				style={{
					padding: 0,
					display: 'flex',
					justifyContent: 'flex-end',
				}}
			>
				<div
					className="filter-con"
					style={{ background: '#fff', width: 250 }}
					onClick={(e) => e.stopPropagation()}
				>
					<div
						className="fc-top"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: 20,
							borderBottom: '1px solid #eee',
							fontSize: 17,
						}}
					>
						<span className="fc-title">Filter</span>
						<IoClose
							style={{ cursor: 'pointer' }}
							size={20}
							onClick={() => dispatch(closeFilterModal())}
						/>
					</div>

					<div
						className="fc-bottom"
						style={{
							display: 'flex',
							flexDirection: 'column',
							padding: 20,
						}}
					>
						<TempInput>
							<label htmlFor="date">By Date</label>
							<input name="date" id="date" type="date" />
						</TempInput>

						<TempInput>
							<label htmlFor="date">By App</label>
							<select name="byApp" id="byApp">
								<option value="" disabled hidden selected>
									Select App
								</option>
								{apps.map((app) => (
									<option value={app.appID}>
										{app.name}
									</option>
								))}
							</select>
						</TempInput>
					</div>
				</div>
			</AppModal>
		</Container>
	);
};

{
	/* <TempInput>
    <label htmlFor="date">By Date</label>
    <input name="date" id="date" type="date" />
</TempInput>

<TempInput>
    <label htmlFor="date">By App</label>
    <select name="byApp" id="byApp">
        <option value="" disabled hidden selected>
            Select App
        </option>
        {apps.map((app) => (
            <option value={app.appID}>
                {app.name}
            </option>
        ))}
    </select>
</TempInput> */
}

const TempInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-bottom: 10px;
	label {
		font-size: 15px;
	}
	input,
	select {
		border: 1.5px solid #dfdfdf;
		background: #fbfbfb;
		border-radius: 5px;
		padding: 10px 8px;
		width: 100%;
		transition: all 0.1s linear;

		&::placeholder {
			opacity: 0.8;
		}
		&:focus {
			border: 1.5px solid #114edc;
			background: #114edc10;
		}
	}
`;

const Container = styled.div`
	.filter-con {
		.fc-top {
			padding: 10px;
			border-bottom: 1px solid #eee;
			display: flex;
			align-items: center;
		}
	}
`;

export default FilterModal;
