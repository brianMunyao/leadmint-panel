import { configureStore } from '@reduxjs/toolkit';

import navReducer from './reducers/navReducer';
import appsReducer from './reducers/appsReducer';

const store = configureStore({
	reducer: {
		nav: navReducer,
		apps: appsReducer,
	},
});

export default store;
