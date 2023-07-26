import { createSlice } from '@reduxjs/toolkit';

const apps = [
	{
		id: 1,
		appID: 1092,
		name: 'RewardX',
		revenue: 1000,
		click: 100,
		conversion: 110,
		users: 160,
	},
	{
		id: 2,
		appID: 1092,
		name: 'RewardX',
		revenue: 1000,
		click: 100,
		conversion: 110,
		users: 160,
	},
	{
		id: 3,
		appID: 1092,
		name: 'RewardX',
		revenue: 1000,
		click: 100,
		conversion: 110,
		users: 160,
	},
];

const appsSlice = createSlice({
	name: 'apps',
	initialState: {
		apps: apps,
		addAppModal: false,
	},
	reducers: {
		setApps: (state, action) => {
			state.apps = action.payload;
		},
		openAddAppModal: (state) => {
			state.addAppModal = true;
		},
		closeAddAppModal: (state) => {
			state.addAppModal = false;
		},
	},
});

export const { setApps, openAddAppModal, closeAddAppModal } = appsSlice.actions;
export default appsSlice.reducer;
