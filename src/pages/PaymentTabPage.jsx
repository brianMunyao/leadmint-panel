import React from 'react';
import { styled } from 'styled-components';

import FormItemAlt from '../components/FormItemAlt';
import AppBtn from '../components/AppBtn';

const PaymentTabPage = () => {
	return (
		<Container>
			<div className="user-form-con">
				<h3>Update Payment Details</h3>

				<div className="form-inputs">
					<FormItemAlt
						name="company_name"
						placeholder="Company Name"
						value=""
					/>
					<FormItemAlt
						name="fullname"
						value=""
						placeholder="Enter fullname"
					/>
					<FormItemAlt
						name="email"
						value=""
						placeholder="Enter your email address"
						inputType="email"
						disabled
					/>
					<FormItemAlt
						name="phone_no"
						value=""
						placeholder="Enter your phone number"
						inputType="tel"
					/>

					<FormItemAlt
						name="country"
						value=""
						placeholder="Country"
						inputType="country"
					/>
				</div>

				<AppBtn secondary className="save-changes-btn">
					Save Changes
				</AppBtn>
			</div>
		</Container>
	);
};

const Container = styled.div`
	/* height: 100%; */
	overflow-y: visible;
	.user-form-con {
		background: #fff;
		max-width: 400px;
		width: 100%;
		padding: 25px;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		box-shadow: 2px 2px 10px rgba(230, 230, 230, 0.2);

		.form-inputs {
			display: flex;
			flex-direction: column;
			gap: 2px;
		}

		.save-changes-btn {
			max-width: fit-content;
			margin-left: auto;
		}
	}
`;

export default PaymentTabPage;
