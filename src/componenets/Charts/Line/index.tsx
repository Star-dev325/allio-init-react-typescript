import React from 'react';
import { LineChart, Line as RechartsLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { dataStr, dataStr1 } from '../../../utilities/helper';

const Line: React.FC = () => (
<React.Fragment>
<ResponsiveContainer width={'100%'}>
  <LineChart
      width={500}
      height={300}
      data={dataStr}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <RechartsLine
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        activeDot={{
 r: 8 
}}
      />
      <RechartsLine type="basis" dataKey="pv" stroke="#82ca9d" />
      <RechartsLine type="basisClosed" dataKey="amt" stroke="#2253daw" />
    </LineChart>
    </ResponsiveContainer>
    <ResponsiveContainer>
    <LineChart
      width={500}
      height={300}
      data={dataStr1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <RechartsLine
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        activeDot={{
 r: 8 
}}
      />
      <RechartsLine type="basis" dataKey="pv" stroke="#82ca9d" />
      <RechartsLine type="basisClosed" dataKey="amt" stroke="#2253daw" />
    </LineChart>
</ResponsiveContainer>
</React.Fragment>
);

export default Line;