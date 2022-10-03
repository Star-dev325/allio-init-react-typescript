import React from 'react';
import { ComposedChart, Area, Line, Bar as RechartsBar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { dataStr, dataStr1 } from '../../../utilities/helper';

const Bar: React.FC = () => (
  <React.Fragment>
    <ResponsiveContainer width={'100%'}>
    <ComposedChart width={730} height={250} data={dataStr}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <RechartsBar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
    </ResponsiveContainer>
    <ResponsiveContainer width={'100%'}>
    <ComposedChart width={730} height={250} data={dataStr1}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <RechartsBar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
    </ResponsiveContainer>
  </React.Fragment>
  );

export default Bar;