import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { styled } from 'styled-components';

const AppLineChart = ({ data, margin }) => {
	return (
		<Container style={{ margin }}>
			<h4 className="title">Earnings for Past 7 days</h4>
			<ResponsiveContainer width="95%" height={280}>
				<LineChart
					// width={500}
					// height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="amount"
						stroke="#8884d8"
						strokeWidth={2}
						activeDot={{ r: 8 }}
					/>
					{/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
				</LineChart>
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

export default AppLineChart;
