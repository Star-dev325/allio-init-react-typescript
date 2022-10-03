import React from 'react';
import { Area as RechartsArea, ReferenceLine, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { dataStr, dataStr1 } from '../../../utilities/helper';

const Area: React.FC = () => (<React.Fragment>
  <ResponsiveContainer width={'100%'}>
  <AreaChart width={730} height={250} data={dataStr}
    margin={{
 top: 20, right: 30, left: 0, bottom: 0 
}}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
    <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
    <ReferenceLine label="Segment" stroke="green" strokeDasharray="3 3" segment={[{
      x: 'Page A', y: 0 
      }, {
      x: 'Page C', y: 4000 
    }]} />
    <RechartsArea type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
  </ResponsiveContainer>
  <ResponsiveContainer width={'100%'}>
  <AreaChart width={730} height={250} data={dataStr1}
    margin={{
    top: 20, right: 30, left: 0, bottom: 0 
    }}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
    <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
    <ReferenceLine label="Segment" stroke="green" strokeDasharray="3 3" segment={[{
      x: 'Page A', y: 0
      }, {
      x: 'Page C', y: 4000 
    }]} />
    <RechartsArea type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
  </ResponsiveContainer>
</React.Fragment>);

export default Area;