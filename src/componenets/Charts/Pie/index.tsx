import React from 'react';
import { PieChart, Pie as RechartsPie, ResponsiveContainer } from 'recharts';

import { dataStr, dataStr1 } from '../../../utilities/helper';

const Bar: React.FC = () => (
  <React.Fragment>
    <ResponsiveContainer width={'100%'}>
    <PieChart barSize={100}>
      <RechartsPie data={dataStr} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      <RechartsPie data={dataStr} dataKey="pv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    </PieChart>
    </ResponsiveContainer>
    <ResponsiveContainer width={'100%'}>
    <PieChart barSize={100}>
      <RechartsPie data={dataStr1} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      <RechartsPie data={dataStr1} dataKey="pv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    </PieChart>
    </ResponsiveContainer>
  </React.Fragment>
  );

export default Bar;