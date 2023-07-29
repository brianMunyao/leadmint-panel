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
		addAppModalOpen: false,
		filterModalOpen: false,
	},
	reducers: {
		setApps: (state, action) => {
			state.apps = action.payload;
		},
		openAddAppModal: (state) => {
			state.addAppModalOpen = true;
		},
		closeAddAppModal: (state) => {
			state.addAppModalOpen = false;
		},
		openFilterModal: (state) => {
			state.filterModalOpen = true;
		},
		closeFilterModal: (state) => {
			state.filterModalOpen = false;
		},
	},
});

export const {
	setApps,
	openAddAppModal,
	closeAddAppModal,
	openFilterModal,
	closeFilterModal,
} = appsSlice.actions;
export default appsSlice.reducer;
