import React from 'react';
import { styled } from 'styled-components';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{
		name: 'Mon',
		amount: 2400,
	},
	{
		name: 'Tue',
		amount: 2210,
	},
	{
		name: 'Wed',
		amount: 2290,
	},
	{
		name: 'Thur',
		amount: 2000,
	},
	{
		name: 'Fri',
		amount: 2181,
	},
	{
		name: 'Sat',
		amount: 2500,
	},
	{
		name: 'Sun',
		amount: 2100,
	},
];

const AppBarChart = ({ margin }) => {
	return (
		<Container style={{ margin }}>
			<h4 className="title">Earnings for Past 7 days</h4>
			<ResponsiveContainer width="95%" height={280}>
				<BarChart
					barSize={20}
					// width="100%"
					// height={300}
					barGap={10}
					data={data}
					margin={
						{
							// top: 5,
							// right: 30,
							// left: 20,
							// bottom: 5,
						}
					}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar
						dataKey="amount"
						fill="#7c76ea"
						radius={[4, 4, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	background: #fff;
	padding: 15px;
	box-shadow: 2px 1px 4px rgba(240, 240, 240, 0.7);
	border-radius: 10px;
	width: 100%;
	border: 1px solid #ebebeb;

	.title {
		margin-bottom: 15px;
		/* color: #a1a1a1; */
	}

	@media (max-width: 530px) {
	}
`;

export default AppBarChart;
