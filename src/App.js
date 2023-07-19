import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import BillingTab from './pages/BillingTab';
import DashBoardTab from './pages/DashBoardTab';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ManageAppsTab from './pages/ManageAppsTab';
import ReportsTab from './pages/ReportsTab';
import AccountTab from './pages/AccountTab';

const router = createBrowserRouter([
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
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
			},
			{
				path: '/reports',
				element: <ReportsTab />,
			},
			{
				path: '/account',
				element: <AccountTab />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
