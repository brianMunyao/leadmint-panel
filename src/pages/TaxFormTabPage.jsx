import React from 'react';
import { styled } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppBtn from '../components/AppBtn';
import FormItem from '../components/FormItem';
import colors from '../config/colors';

const TaxFormTabPage = () => {
	return (
		<Formik
			initialValues={{
				taxID: '',
				address: '',
				pincode: '',
				country: '',
			}}
			validationSchema={Yup.object({
				taxID: Yup.string().required('Tax ID is required'),
				address: Yup.string().required('Address is required'),
				pincode: Yup.string().required('Code is required'),
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
						<h3>Tax Details</h3>

						<div className="form-inputs">
							<FormItem
								label="Tax ID"
								name="taxID"
								placeholder="GST Number"
								value={values.taxID}
								error={errors.taxID}
								onChange={handleChange('taxID')}
								onBlur={handleBlur('taxID')}
								touched={touched.taxID}
							/>
							<FormItem
								label="Address"
								name="address"
								placeholder="Enter your address"
								value={values.address}
								error={errors.address}
								onChange={handleChange('address')}
								onBlur={handleBlur('address')}
								touched={touched.address}
							/>
							<FormItem
								label="Pin Code"
								name="pincode"
								inputType="tel"
								placeholder="Pin Code"
								value={values.pincode}
								error={errors.pincode}
								onChange={handleChange('pincode')}
								onBlur={handleBlur('pincode')}
								touched={touched.pincode}
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

export default TaxFormTabPage;
