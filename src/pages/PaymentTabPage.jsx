import React from 'react';
import { styled } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppBtn from '../components/AppBtn';
import FormItem from '../components/FormItem';
import colors from '../config/colors';

const PaymentTabPage = () => {
	return (
		<Formik
			initialValues={{
				beneficiaryName: '',
				accountName: '',
				ifscCode: '',
				swiftCode: '',
				bankName: '',
				country: '',
			}}
			validationSchema={Yup.object({
				beneficiaryName: Yup.string().required('Name is required'),
				accountName: Yup.string().required('Account Name is required'),
				ifscCode: Yup.string().required('Code is required'),
				swiftCode: Yup.string().required('Code is required'),
				bankName: Yup.string().required('Bank Name is required'),
				country: Yup.string().required('Country is required'),
			})}
			onSubmit={(values) => {
				// TODO: Handle update here
			}}
		>
			{({
				errors,
				values,
				touched,
				handleBlur,
				handleChange,
				handleSubmit,
			}) => (
				<form onSubmit={handleSubmit}>
					<Container>
						<h3>Billing Details</h3>

						<div className="form-inputs">
							<FormItem
								label="Beneficiary Name"
								name="beneficiaryName"
								placeholder="Enter your Account Name"
								value={values.beneficiaryName}
								error={errors.beneficiaryName}
								onChange={handleChange('beneficiaryName')}
								onBlur={handleBlur('beneficiaryName')}
								touched={touched.beneficiaryName}
							/>
							<FormItem
								label="Account Number"
								name="accountName"
								inputType="tel"
								placeholder="Enter your account number"
								value={values.accountName}
								error={errors.accountName}
								onChange={handleChange('accountName')}
								onBlur={handleBlur('accountName')}
								touched={touched.accountName}
							/>
							<FormItem
								label="IFSC CODE"
								name="ifscCode"
								inputType="tel"
								placeholder="Enter your IFSC CODE"
								value={values.ifscCode}
								error={errors.ifscCode}
								onChange={handleChange('ifscCode')}
								onBlur={handleBlur('ifscCode')}
								touched={touched.ifscCode}
							/>
							<FormItem
								label="SWIFT CODE"
								name="swiftCode"
								inputType="tel"
								placeholder="Enter your Swift Code"
								value={values.swiftCode}
								error={errors.swiftCode}
								onChange={handleChange('swiftCode')}
								onBlur={handleBlur('swiftCode')}
								touched={touched.swiftCode}
							/>
							<FormItem
								label="Bank Name"
								name="bankName"
								placeholder="Enter your Bank Name"
								value={values.bankName}
								error={errors.bankName}
								onChange={handleChange('bankName')}
								onBlur={handleBlur('bankName')}
								touched={touched.bankName}
							/>

							<FormItem
								label="Country"
								name="country"
								placeholder="Enter your country"
								select={[{ val: 'India', label: 'India' }]}
								value={values.country}
								error={errors.country}
								onChange={handleChange('country')}
								onBlur={handleBlur('country')}
								touched={touched.country}
							/>
						</div>

						<AppBtn btnType="submit" className="save-changes-btn">
							Save Changes
						</AppBtn>
					</Container>
				</form>
			)}
		</Formik>
	);
};

const Container = styled.div`
	background: #fff;
	width: 100%;
	padding: 25px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	.form-inputs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 20px;
	}

	.save-changes-btn {
		max-width: fit-content;
		margin-left: auto;
	}

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

export default PaymentTabPage;
