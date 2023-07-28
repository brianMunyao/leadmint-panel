import React from 'react';
import { styled } from 'styled-components';

// import FormItemAlt from '../components/FormItemAlt';
import AppBtn from '../components/AppBtn';
import FormItem from '../components/FormItem';
import colors from '../config/colors';

const TaxFormTabPage = () => {
	return (
		<Container>
			{/* <div className="user-form-con"> */}
			<h3>Tax Details</h3>

			<div className="form-inputs">
				<FormItem
					label="Tax ID"
					name="taxID"
					placeholder="GST Number"
					value=""
				/>
				<FormItem
					label="Address"
					name="address"
					value=""
					placeholder="Enter your address"
					error=""
				/>
				<FormItem
					label="Pin Code"
					name="pincode"
					inputType="tel"
					value=""
					placeholder="Pin Code"
					error=""
				/>

				<FormItem
					label="Country"
					name="country"
					value=""
					placeholder="Enter your country"
					select={[{ val: 'India', label: 'India' }]}
				/>
			</div>

			<AppBtn className="save-changes-btn">Save Changes</AppBtn>
			{/* </div> */}
		</Container>
	);
};

const Container = styled.div`
	/* .user-form-con { */
	background: #fff;
	/* max-width: 400px; */
	width: 100%;
	padding: 25px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	/* box-shadow: 2px 2px 10px rgba(230, 230, 230, 0.2); */

	.form-inputs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		/* flex-direction: column; */
		gap: 20px;
	}

	.save-changes-btn {
		max-width: fit-content;
		margin-left: auto;
	}
	/* } */

	.select-con {
		display: flex;
		flex-direction: column;
		gap: 4px;
		label {
			font-size: 14.5px;
		}
		div {
			position: relative;
			width: 100%;
			height: 42px;
			/* border: 1.5px solid
				${({ error }) => (error ? 'rgba(217, 84, 79, 0.58)' : '#dfdfdf')}; */
			border-radius: 6px;
			overflow: hidden;
			* {
				position: absolute;
			}
			select {
				border: none;
				background: none;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				padding: 2px 10px;
				/* background: ${({ error }) =>
					error ? 'rgba(217, 84, 79, 0.158)' : '#fbfbfb'}; */

				&:disabled {
					cursor: not-allowed;
					background: #f5f5f5;
				}
			}
		}
		&:has(:focus) {
			div {
				border: 1.7px solid ${colors.blueDark};
			}
		}
	}
`;

export default TaxFormTabPage;
