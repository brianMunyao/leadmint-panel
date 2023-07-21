import { configureStore } from '@reduxjs/toolkit';

import navReducer from './navReducer';

const store = configureStore({
	reducer: {
		nav: navReducer,
	},
});

export default store;
