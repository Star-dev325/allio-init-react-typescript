import React from 'react';
import { BarChart, Bar as RechartsBar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { dataStr, dataStr1 } from '../../../utilities/helper';

const Bar: React.FC = () => (
  <React.Fragment>
    <ResponsiveContainer width={'100%'}>
    <BarChart data={dataStr}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <RechartsBar dataKey="nv" fill="#8884d8" />
      <RechartsBar dataKey="pv" fill="#82ca9d" />
      <RechartsBar dataKey="amt" fill="#cbf416" />
    </BarChart>
    </ResponsiveContainer>
    <ResponsiveContainer width={'100%'}>
    <BarChart data={dataStr1}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <RechartsBar dataKey="nv" fill="#ee0d0d" />
      <RechartsBar dataKey="pv" fill="#0b2ef6" />
      <RechartsBar dataKey="amt" fill="#ff0fdb" />
    </BarChart>
    </ResponsiveContainer>
  </React.Fragment>
  );

export default Bar;