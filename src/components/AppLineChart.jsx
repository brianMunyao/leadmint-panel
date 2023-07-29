import React from 'react';
import {
	Area,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	CartesianGrid,
} from 'recharts';
import { styled } from 'styled-components';

const AppLineChart = ({ data, margin }) => {
	return (
		<Container style={{ margin }}>
			<h4 className="title">Earnings for Past 7 days</h4>
			<ResponsiveContainer width="95%" height={280}>
				<AreaChart
					data={data}
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient
							id="colorPv"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#114edc"
								stopOpacity={0.2}
							/>
							<stop
								offset="95%"
								stopColor="#82ca9d"
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid
						strokeDasharray="10 3 5"
						horizontal={true}
						vertical={false}
						strokeOpacity={0.6}
					/>
					<Tooltip />

					<Area
						type="monotone"
						dataKey="amount"
						stroke="#114edc"
						strokeWidth={3}
						fillOpacity={1}
						fill="url(#colorPv)"
					/>
				</AreaChart>
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

	.title {
		margin-bottom: 15px;
	}

	@media (max-width: 530px) {
	}
`;

export default AppLineChart;
