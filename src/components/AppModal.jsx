import React from 'react';
import Modal from 'react-modal';
import { styled } from 'styled-components';

const AppModal = ({ isOpen = false, closeModal, style, children }) => {
	return (
		<Container onClick={closeModal}>
			<Modal
				className="app-modal"
				isOpen={isOpen}
				onRequestClose={closeModal}
				appElement={document.getElementById('root')}
			>
				<div
					className="app-modal-inner"
					style={{
						height: '100vh',
						minHeight: 'fit-content',
						overflow: 'auto',
						padding: 20,
						...style,
					}}
				>
					{children}
				</div>
			</Modal>
		</Container>
	);
};

const Container = styled.div`
	min-height: fit-content;

	.app-modal {
		.app-modal-inner {
			width: 100%;
		}
	}
`;

export default AppModal;
