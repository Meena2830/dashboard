import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '6/30/2024 - 7/6/2024',
    orders: 4,
    sales: 1404,
    avgOrderValue: 351,
  },
  {
    name: '7/7/2024 - 7/13/2024',
    orders: 2,
    sales: 702,
    avgOrderValue: 351,
  },
  {
    name: '7/14/2024 - 7/20/2024',
    orders: 2,
    sales: 702,
    avgOrderValue: 351,
  },
];

const LineChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="orders" stroke="#ff7300" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="sales" stroke="#387908" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
