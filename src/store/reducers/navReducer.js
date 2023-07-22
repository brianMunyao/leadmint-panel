import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
	name: 'nav',
	initialState: {
		navOpened: true,
		navMinimized: false,
	},
	reducers: {
		openNav: (state) => {
			state.navOpened = true;
		},
		closeNav: (state) => {
			state.navOpened = false;
		},
	},
});

export const { openNav, closeNav } = navSlice.actions;
export default navSlice.reducer;
