import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ChartPage: React.FC = () => {
  const data = [
    { week: 'Week 1', gmDollars: 1200, gmPercentage: 0.35 },
    { week: 'Week 2', gmDollars: 1500, gmPercentage: 0.40 },
    // More data
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="week" />
      <YAxis />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Bar dataKey="gmDollars" fill="#8884d8" />
      <Bar dataKey="gmPercentage" yAxisId="right" fill="#82ca9d" />
    </BarChart>
  );
};

export default ChartPage;
