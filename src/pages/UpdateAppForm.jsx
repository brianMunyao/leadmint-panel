import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FormItemAlt from '../components/FormItemAlt';
import AppBtn from '../components/AppBtn';
import colors from '../config/colors';

const UpdateAppForm = () => {
	const { id } = useParams();
	const apps = useSelector((state) => state.apps.apps);
	const [appData, setAppData] = useState(null);

	const [step, setStep] = useState(1);
	const moveToPage1 = () => setStep(1);
	const moveToPage2 = () => setStep(2);

	const handleFormSubmit = (values) => {
		const fullDetails = { ...appData, ...values };
		console.log(fullDetails);
	};

	useEffect(() => {
		try {
			if (id) {
				const app = apps.filter((ap) => ap.id === Number(id));
				if (app.length === 1) setAppData(app[0]);
			}
		} catch (e) {}
	}, [apps, id]);

	return (
		<>
			<Container>
				<div className="inner">
					<div className="form-top">
						<div
							className={`form-step ${
								step === 1 ? 'active' : ''
							}`}
							onClick={moveToPage1}
						>
							<span className="no">1</span>
							<span>Basic Information</span>
						</div>
						<div className="form-progress">
							<div
								style={{ width: `${(step / 2) * 100}%` }}
							></div>
						</div>
						<div
							className={`form-step ${
								step === 2 ? 'active' : ''
							}`}
						>
							<span className="no">2</span>
							<span>Advanced Information</span>
						</div>
					</div>
					<div className="form-content">
						{step === 1 && (
							<div className="form-con">
								<h2 className="form-title">
									Update Basic Information
								</h2>
								<p className="form-subtitle">
									Let's start with some visuals. You can make
									our offerwall look just like you want it to.
									Adding custom colors will improve your user
									experience, too!
								</p>

								<Formik
									initialValues={{
										appName: '',
										packageName: '',
										link: '',
									}}
									validationSchema={Yup.object({
										appName:
											Yup.string().required(
												'Name is required'
											),
										packageName: Yup.string().required(
											'Package Name is required'
										),
										link: Yup.string().required(
											'App link is required'
										),
									})}
									onSubmit={(values) => {
										setAppData(values);
										moveToPage2();
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
											<div className="form-page form-page1">
												<label htmlFor="appName">
													App Name
												</label>
												<FormItemAlt
													name="appName"
													placeholder="Your app's name"
													value={values.appName}
													error={errors.appName}
													onChange={handleChange(
														'appName'
													)}
													onBlur={handleBlur(
														'appName'
													)}
													touched={touched.appName}
												/>

												<label htmlFor="packageName">
													Package Name
												</label>
												<FormItemAlt
													name="packageName"
													placeholder="Package name"
													value={values.packageName}
													error={errors.packageName}
													onChange={handleChange(
														'packageName'
													)}
													onBlur={handleBlur(
														'packageName'
													)}
													touched={
														touched.packageName
													}
												/>

												<label htmlFor="Link">
													Link
												</label>
												<FormItemAlt
													name="link"
													placeholder="Enter your app play store link here"
													value={values.link}
													error={errors.link}
													onChange={handleChange(
														'link'
													)}
													onBlur={handleBlur('link')}
													touched={touched.link}
												/>
											</div>
											<AppBtn
												rounded
												style={{
													width: 'fit-content',
													padding: '10px 20px',
													marginLeft: 'auto',
												}}
												btnType="submit"
											>
												Next
											</AppBtn>
										</form>
									)}
								</Formik>
							</div>
						)}

						{step === 2 && (
							<div className="form-con">
								<h2 className="form-title">
									Updated Advanced Information
								</h2>
								<p className="form-subtitle">
									Let's start with some visuals. You can make
									our offerwall look just like you want it to.
									Adding custom colors will improve your user
									experience, too!
								</p>

								<Formik
									initialValues={{
										postback: '',
										currencyName: '',
										currencyValue: '',
										currencyIcon: '',
										topBanner: '',
									}}
									validationSchema={Yup.object({
										postback: Yup.string().required(
											'Postback is required'
										),
										currencyName: Yup.string().required(
											'Currency Name is required'
										),
										currencyValue: Yup.string().required(
											'Currency Value is required'
										),
										currencyIcon: Yup.string().required(
											'Currency Icon is required'
										),
										topBanner: Yup.string().required(
											'Top Banner is required'
										),
									})}
									onSubmit={(values) => {
										handleFormSubmit(values);
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
											<div className="form-page form-page1">
												<label htmlFor="postback">
													Postback
												</label>
												<FormItemAlt
													name="postback"
													placeholder="Postback link"
													value={values.postback}
													error={errors.postback}
													onChange={handleChange(
														'postback'
													)}
													onBlur={handleBlur(
														'postback'
													)}
													touched={touched.postback}
												/>

												<label htmlFor="currencyName">
													Currency Name
												</label>
												<FormItemAlt
													name="currencyName"
													placeholder="Your reward currency name"
													value={values.currencyName}
													error={errors.currencyName}
													onChange={handleChange(
														'currencyName'
													)}
													onBlur={handleBlur(
														'currencyName'
													)}
													touched={
														touched.currencyName
													}
												/>

												<label htmlFor="currencyValue">
													Currency Value
												</label>
												<FormItemAlt
													name="currencyValue"
													placeholder="1$ = 1000"
													value={values.currencyValue}
													error={errors.currencyValue}
													onChange={handleChange(
														'currencyValue'
													)}
													onBlur={handleBlur(
														'currencyValue'
													)}
													touched={
														touched.currencyValue
													}
												/>

												<label htmlFor="currencyIcon">
													Currency Value
												</label>
												<FormItemAlt
													name="currencyIcon"
													placeholder="Browser"
													value={values.currencyIcon}
													error={errors.currencyIcon}
													onChange={handleChange(
														'currencyIcon'
													)}
													onBlur={handleBlur(
														'currencyIcon'
													)}
													touched={
														touched.currencyIcon
													}
												/>

												<label htmlFor="topBanner">
													Top Banner
												</label>
												<FormItemAlt
													name="topBanner"
													placeholder="Browser"
													value={values.topBanner}
													error={errors.topBanner}
													onChange={handleChange(
														'topBanner'
													)}
													onBlur={handleBlur(
														'topBanner'
													)}
													touched={touched.topBanner}
												/>
											</div>
											<AppBtn
												rounded
												style={{
													width: 'fit-content',
													padding: '10px 20px',
													marginLeft: 'auto',
												}}
												btnType="submit"
											>
												Create
											</AppBtn>
										</form>
									)}
								</Formik>
							</div>
						)}
					</div>
				</div>
			</Container>
		</>
	);
};

const Container = styled.div`
	width: 100%;
	background: #fff;
	border-radius: 8px;
	box-shadow: 2px 3px 10px #dcdcdcc2;
	.inner {
		max-width: 850px;
		width: 100%;
		margin: auto;
		.form-top {
			display: flex;
			justify-content: center;
			gap: 40px;
			padding: 30px;
			border-bottom: 1.5px solid #e8e8e8;

			.form-progress {
				margin: auto 0;
				height: 10px;
				width: 200px;
				border-radius: 10px;
				background: #e4e4e4;
				overflow: hidden;
				div {
					height: 100%;
					border-radius: 10px;
					background: ${colors.primaryDark};
				}
			}

			.form-step {
				display: flex;
				align-items: center;
				gap: 8px;
				.no {
					width: 40px;
					height: 40px;
					border-radius: 30px;
					background: #ddd;
					color: #000000;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				&.active {
					.no {
						background: ${colors.primaryDark};
						color: #fff;
					}
				}
			}
		}
		.form-content {
			padding: 30px;
			margin: auto;
			.form-page {
				display: grid;
				grid-template-columns: 120px 1fr;
				align-items: center;
				row-gap: 15px;
				column-gap: 10px;
				margin: 20px 0;
			}
		}
	}
`;

export default UpdateAppForm;
