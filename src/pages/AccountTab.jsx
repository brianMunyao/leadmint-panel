import React from 'react';
import { styled } from 'styled-components';
import { Link, Outlet, useLocation } from 'react-router-dom';

import TabContainer from '../components/TabContainer';
// import MiniTabs from '../components/MiniTabs';

const AccountTab = () => {
	const location = useLocation();
	return (
		<Container>
			<TabContainer title="My Account">
				<div className="tab-inner">
					{/* <MiniTabs
						tabs={[
							{ name: 'Account Details', to: '/account' },
							{
								name: 'Payment Details',
								to: '/account/payment-details',
							},
						]}
						style={{ marginBottom: 20 }}
					/> */}
					<div className="tab-inner-top">
						{[
							{ name: 'Account Details', to: '/account' },
							{
								name: 'Billing',
								to: '/account/payment-details',
							},
							{
								name: 'Tax Form',
								to: '/account/tax-form',
							},
						].map((tab, i) => (
							<Link to={tab.to} key={i}>
								<div
									className={`tab ${
										location.pathname === tab.to
											? 'active'
											: ''
									}`}
								>
									{tab.name}
								</div>
							</Link>
						))}
					</div>

					<div className="tab-inner-content">
						<Outlet />
					</div>
				</div>
			</TabContainer>
		</Container>
	);
};

const Container = styled.div`
	.tab-inner {
		background: #fff;
		padding: 20px;
		box-shadow: 2px 1px 4px rgba(240, 240, 240, 0.7);
		border-radius: 10px;
		width: fit-content;
		min-width: 600px;

		.tab-inner-top {
			border-bottom: 1.5px solid #adadad68;
			display: flex;
			gap: 10px;
			.tab {
				padding: 5px 10px 15px 10px;
				color: #b3b3b3;
				&.active {
					color: #1f1f1f;
				}
			}
		}
	}
`;

export default AccountTab;
