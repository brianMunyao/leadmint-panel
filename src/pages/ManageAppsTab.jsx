import React from 'react';

import TabContainer from '../components/TabContainer';
import TopAppsTable from '../components/TopAppsTable';
import moment from 'moment';

const ManageAppsTab = () => {
	const apps = [
		{
			id: 1,
			appID: 6093,
			logo: 'https://png2.cleanpng.com/sh/a829b83ddd21d84e67e786291205ae63/L0KzQYm3VMA5N5txfZH0aYP2gLBuTfdwd5hxfZ91b3fyPcb1igRmbF54jNN9ZYOwdLbqgfwub5D0f95uLYDvhcS0VfFkQZNnfKo8MEmzcYG1WMc4OmU2Tas6NUK2QYi3UsY1OWo9UZD5bne=/kisspng-google-logo-united-states-decal-google-plus-5ac9bbd83090a0.8772415915231702641989.png',
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
			logo: 'https://png2.cleanpng.com/sh/a829b83ddd21d84e67e786291205ae63/L0KzQYm3VMA5N5txfZH0aYP2gLBuTfdwd5hxfZ91b3fyPcb1igRmbF54jNN9ZYOwdLbqgfwub5D0f95uLYDvhcS0VfFkQZNnfKo8MEmzcYG1WMc4OmU2Tas6NUK2QYi3UsY1OWo9UZD5bne=/kisspng-google-logo-united-states-decal-google-plus-5ac9bbd83090a0.8772415915231702641989.png',
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
			logo: 'https://png2.cleanpng.com/sh/a829b83ddd21d84e67e786291205ae63/L0KzQYm3VMA5N5txfZH0aYP2gLBuTfdwd5hxfZ91b3fyPcb1igRmbF54jNN9ZYOwdLbqgfwub5D0f95uLYDvhcS0VfFkQZNnfKo8MEmzcYG1WMc4OmU2Tas6NUK2QYi3UsY1OWo9UZD5bne=/kisspng-google-logo-united-states-decal-google-plus-5ac9bbd83090a0.8772415915231702641989.png',
			name: 'SpinBuzz',
			platform: 'Android',
			startDate: moment('2023-10-02').toDate(),
			earningsLastMonth: 100,
			earningsThisMonth: 0,
			status: 1,
		},
	];
	return (
		<TabContainer title="Manage Apps">
			<TopAppsTable data={apps} />
		</TabContainer>
	);
};

export default ManageAppsTab;
