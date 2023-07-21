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
import { Outlet } from 'react-router-dom';

const AccountTab = () => {
	return (
		<Container>
			<TabContainer title="My Account">
				<a href="/account/">Account Details</a>
				<a href="/account/payment-details">Payment Details</a>
				<Outlet />
			</TabContainer>
		</Container>
	);
};

const Container = styled.div``;

export default AccountTab;
