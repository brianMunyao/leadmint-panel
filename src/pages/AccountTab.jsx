import React from 'react';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

import TabContainer from '../components/TabContainer';
import MiniTabs from '../components/MiniTabs';

const AccountTab = () => {
	return (
		<Container>
			<TabContainer title="My Account">
				<MiniTabs
					tabs={[
						{ name: 'Account Details', to: '/account' },
						{
							name: 'Payment Details',
							to: '/account/payment-details',
						},
					]}
					style={{ marginBottom: 20 }}
				/>
				<Outlet />
			</TabContainer>
		</Container>
	);
};

const Container = styled.div``;

export default AccountTab;
