import { createSlice } from '@reduxjs/toolkit';

const apps = [
	{
		id: 1,
		appID: 1092,
		name: 'RewardX',
		revenue: 100,
		click: 64,
		conversion: 311,
		users: 160,
		status: 'Android',
		date: new Date('10-02-2023'),
	},
	{
		id: 2,
		appID: 92,
		name: 'RewardX 2',
		revenue: 1080,
		click: 100,
		conversion: 110,
		users: 63,
		status: 'Android',
		date: new Date('11-10-2023'),
	},
	{
		id: 3,
		appID: 292,
		name: 'RewardX 4',
		revenue: 3100,
		click: 110,
		conversion: 11,
		users: 10,
		status: 'Android',
		date: new Date('09-12-2023'),
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
