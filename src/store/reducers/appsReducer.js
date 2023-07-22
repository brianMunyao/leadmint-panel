import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const apps = [
	{
		id: 1,
		appID: 6093,
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQBRWLfRIazYbzzE5VvvuNY0p_yQlF20ROQ&usqp=CAU',
		name: 'SpinBuzz',
		platform: 'Android',
		startDate: moment('2023-10-02').toDate(),
		earningsLastMonth: 110,
		earningsThisMonth: 0,
		status: 1,
	},
	{
		id: 2,
		appID: 12093,
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQBRWLfRIazYbzzE5VvvuNY0p_yQlF20ROQ&usqp=CAU',
		name: 'SpinBuzz',
		platform: 'Android',
		startDate: moment('2023-10-02').toDate(),
		earningsLastMonth: 40,
		earningsThisMonth: 0,
		status: 0,
	},
	{
		id: 3,
		appID: 93,
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQBRWLfRIazYbzzE5VvvuNY0p_yQlF20ROQ&usqp=CAU',
		name: 'SpinBuzz',
		platform: 'Android',
		startDate: moment('2023-10-02').toDate(),
		earningsLastMonth: 100,
		earningsThisMonth: 0,
		status: 1,
	},
];

const appsSlice = createSlice({
	name: 'apps',
	initialState: {
		apps: apps,
	},
	reducers: {
		setApps: (state, action) => {
			state.apps = action.payload;
		},
	},
});

export const { setApps } = appsSlice.actions;
export default appsSlice.reducer;
