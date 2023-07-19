import React from 'react';
import { styled } from 'styled-components';
import {
	IoBusinessOutline,
	IoCallOutline,
	IoFlagOutline,
	IoMailOutline,
	IoPersonOutline,
} from 'react-icons/io5';

import TabContainer from '../components/TabContainer';
import FormItem from '../components/FormItem';
import AppBtn from '../components/AppBtn';

const AccountTab = () => {
	return (
		<Container>
			<TabContainer title="My Account">
				<div className="user-form-con">
					<h3>User Details</h3>

					<div className="form-inputs">
						<FormItem
							name="company_name"
							label="Company Name"
							placeholder="Company Name"
							value=""
							Icon={IoBusinessOutline}
						/>
						<FormItem
							name="fullname"
							value=""
							placeholder="Enter fullname"
							label="Fullname"
							Icon={IoPersonOutline}
						/>
						<FormItem
							name="email"
							value=""
							placeholder="Enter your email address"
							label="Email Address"
							Icon={IoMailOutline}
							inputType="email"
							disabled
						/>
						<FormItem
							name="phone_no"
							value=""
							placeholder="Enter your phone number"
							label="Phone No."
							Icon={IoCallOutline}
							inputType="tel"
						/>

						<FormItem
							name="country"
							value=""
							placeholder="Country"
							label="Country"
							Icon={IoFlagOutline}
							inputType="country"
						/>
					</div>

					<AppBtn secondary className="save-changes-btn">
						Save Changes
					</AppBtn>
				</div>
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
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
			gap: 18px;
		}

		.save-changes-btn {
			max-width: fit-content;
			margin-left: auto;
		}
	}
`;

export default AccountTab;
