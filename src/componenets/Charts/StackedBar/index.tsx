import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

import { dataStr, dataStr1 } from '../../../utilities/helper';

const StackedBar: React.FC = () => (
  <React.Fragment>
    <ResponsiveContainer width={'100%'}>
      <BarChart width={500} height={500} data={dataStr} >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" stackId="a" fill="#11c517" />
        <Bar dataKey="pv" stackId="a" fill="#0f3cae" />
        <Bar dataKey="amt" stackId="b" fill="#eb420e" />
      </BarChart>
    </ResponsiveContainer>
    <ResponsiveContainer width={'100%'}>
      <BarChart width={500} height={500} data={dataStr1} >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" stackId="a" fill="#11c517" />
        <Bar dataKey="pv" stackId="a" fill="#0b5cf1" />
        <Bar dataKey="amt" stackId="b" fill="#f31051" />
      </BarChart>
    </ResponsiveContainer>
    <ResponsiveContainer width={'100%'}>
      <BarChart width={500} height={500} data={dataStr} >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" stackId="a" fill="#11c517" />
        <Bar dataKey="pv" stackId="a" fill="#0b5cf1" />
        <Bar dataKey="amt" stackId="a" fill="#f31051" />
      </BarChart>
    </ResponsiveContainer>
</React.Fragment>);

export default StackedBar;