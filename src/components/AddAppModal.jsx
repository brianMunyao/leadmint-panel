import React, { useState } from 'react';
import Modal from 'react-modal';
import { styled } from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';

import FormItemAlt from './FormItemAlt';
import AppBtn from './AppBtn';

const AddAppModal = ({ isModalOpen, closeModal }) => {
	const [page, setPage] = useState(1);

	const moveToPage1 = () => setPage(1);
	const moveToPage2 = () => setPage(2);

	return (
		<Container onClick={closeModal}>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				style={{ zIndex: 999 }}
				className="modal-con"
			>
				<div
					className="modal-inner"
					onClick={(e) => e.stopPropagation()}
				>
					<h2 className="modal-title">Add New App</h2>

					{page === 1 && (
						<>
							<div>
								<FormItemAlt
									name="app_name"
									value=""
									placeholder="Enter App Name"
								/>
								<FormItemAlt
									name="app_link"
									value=""
									placeholder="Enter App Link"
								/>
								<FormItemAlt
									name="app_package"
									value=""
									placeholder="Enter App Package"
								/>
							</div>

							<div className="add-app-btns">
								<AppBtn negative onClick={closeModal}>
									Cancel
								</AppBtn>
								<AppBtn onClick={moveToPage2}>Next</AppBtn>
							</div>
						</>
					)}
					{page === 2 && (
						<>
							<div>
								<div className="go-back">
									<div onClick={moveToPage1}>
										<IoArrowBack /> <span>Go Back</span>
									</div>
								</div>

								<FormItemAlt
									name="postback_url"
									value=""
									placeholder="Enter Postback URL"
								/>
								<FormItemAlt
									name="reward_text"
									value=""
									placeholder="Enter Reward Text"
								/>
								<FormItemAlt
									name="conversion_rate"
									value=""
									placeholder="Enter the conversion rate"
								/>
							</div>

							<div className="add-app-btns">
								<AppBtn negative onClick={closeModal}>
									Cancel
								</AppBtn>
								<AppBtn>Add App</AppBtn>
							</div>
						</>
					)}
				</div>
			</Modal>
		</Container>
	);
};

const Container = styled.div`
	/* .modal-con {
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
		.modal-innerr {
			background: red !important;
			width: 1 !important;
		}
	} */
`;

export default AddAppModal;
