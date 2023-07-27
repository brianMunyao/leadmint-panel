import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import BillingTab from './pages/BillingTab';
import DashBoardTab from './pages/DashBoardTab';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import ManageAppsTab from './pages/ManageAppsTab';
import ReportsTab from './pages/ReportsTab';
import AccountTab from './pages/AccountTab';
import AccountTabPage from './pages/AccountTabPage';
import PaymentTabPage from './pages/PaymentTabPage';
import NewLoginPage from './pages/NewLoginPage';
import NewRegisterPage from './pages/NewRegisterPage';
import store from './store/store';
import ResetPasswordPage from './pages/ResetPasswordPage';
import AddAppForm from './pages/AddAppForm';
import AppsListPage from './pages/AppsListPage';
import UpdateAppForm from './pages/UpdateAppForm';

const router = createBrowserRouter([
	{
		path: '/register',
		element: <NewRegisterPage />,
	},
	{
		path: '/login',
		element: <NewLoginPage />,
	},
	{
		path: '/reset-password',
		element: <ResetPasswordPage />,
	},
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <DashBoardTab />,
			},
			{
				path: '/billing',
				element: <BillingTab />,
			},
			{
				path: '/manage-apps',
				element: <ManageAppsTab />,
				children: [
					{
						path: '/manage-apps',
						element: <AppsListPage />,
					},
					{
						path: '/manage-apps/add-app',
						element: <AddAppForm />,
					},
					{
						path: '/manage-apps/edit-app/:id',
						element: <UpdateAppForm />,
					},
				],
			},
			{
				path: '/reports',
				element: <ReportsTab />,
			},
			{
				path: '/account',
				element: <AccountTab />,
				children: [
					{
						path: '/account',
						element: <AccountTabPage />,
					},
					{
						path: '/account/payment-details',
						element: <PaymentTabPage />,
					},
				],
			},
		],
	},
]);

const App = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
};

export default App;
