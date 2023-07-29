import React from 'react';
import { styled } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppBtn from '../components/AppBtn';
import FormItem from '../components/FormItem';
import colors from '../config/colors';

const AccountTabPage = () => {
	return (
		<Formik
			initialValues={{
				appName: '',
				email: '',
				accountType: '',
				companyName: '',
				address: '',
				pincode: '',
				country: '',
			}}
			validationSchema={Yup.object({
				appName: Yup.string().required('App Name is required'),
				email: Yup.string().required('Email is required'),
				accountType: Yup.string().required('Account is required'),
				companyName: Yup.string().required('Company Name is required'),
				address: Yup.string().required('Address is required'),
				pincode: Yup.string().required('Pincode is required'),
				country: Yup.string().required('Country is required'),
			})}
			onSubmit={(values) => {
				// setAppData(values);
				// moveToPage2();
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
						<h3>Update User Details</h3>

						<div className="form-inputs">
							<FormItem
								label="Name"
								name="appName"
								placeholder="Enter App Name"
								tooltip="Name"
								value={values.appName}
								error={errors.appName}
								onChange={handleChange('appName')}
								onBlur={handleBlur('appName')}
								touched={touched.appName}
							/>
							<FormItem
								label="Email"
								name="email"
								placeholder="Enter your email"
								value={values.email}
								error={errors.email}
								onChange={handleChange('email')}
								onBlur={handleBlur('email')}
								touched={touched.email}
							/>

							<FormItem
								label="Account Type"
								name="accountType"
								placeholder="Enter your account type"
								select={[
									{ val: 'Float', label: 'Float' },
									{ val: 'Float2', label: 'Float2' },
								]}
								value={values.accountType}
								error={errors.accountType}
								onChange={handleChange('accountType')}
								onBlur={handleBlur('accountType')}
								touched={touched.accountType}
							/>

							<FormItem
								label="Company Name"
								name="companyName"
								placeholder="Enter your company name"
								value={values.companyName}
								error={errors.companyName}
								onChange={handleChange('companyName')}
								onBlur={handleBlur('companyName')}
								touched={touched.companyName}
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

export default AccountTabPage;
