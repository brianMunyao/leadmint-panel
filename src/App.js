import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import BillingTab from './pages/BillingTab';
import DashBoardTab from './pages/DashBoardTab';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

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
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
