import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

import { dataStr1 } from '../../../utilities/helper';

const dataStr = [
  {
    'name': '18-24',
    'uv': 31.47,
    'pv': 2400,
    'fill': '#8884d8'
  },
  {
    'name': '25-29',
    'uv': 26.69,
    'pv': 4567,
    'fill': '#83a6ed'
  },
  {
    'name': '30-34',
    'uv': -15.69,
    'pv': 1398,
    'fill': '#8dd1e1'
  },
  {
    'name': '35-39',
    'uv': 8.22,
    'pv': 9800,
    'fill': '#82ca9d'
  },
  {
    'name': '40-49',
    'uv': -8.63,
    'pv': 3908,
    'fill': '#a4de6c'
  },
  {
    'name': '50+',
    'uv': -2.63,
    'pv': 4800,
    'fill': '#d0ed57'
  },
  {
    'name': 'unknow',
    'uv': 6.67,
    'pv': 4800,
    'fill': '#ffc658'
  }
];

const HalfCircleGugage: React.FC = () => (
<React.Fragment>
  <ResponsiveContainer width={'100%'}>
    <RadialBarChart 
      width={730} 
      height={250} 
      innerRadius="10%" 
      outerRadius="80%" 
      data={dataStr}
      startAngle={0} 
      endAngle={180}
    >
      <RadialBar label={{
    fill: '#666', position: 'insideStart' 
    }} background dataKey='uv' />
      <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
      <Tooltip />
    </RadialBarChart>
  </ResponsiveContainer>
  <ResponsiveContainer width={'100%'}>
    <RadialBarChart 
      width={730} 
      height={250} 
      innerRadius="10%" 
      outerRadius="80%" 
      data={dataStr1} 
      startAngle={0} 
      endAngle={180}
    >
      <RadialBar label={{
        fill: '#666', position: 'insideStart' 
        }} background dataKey='nv' />
      <Legend iconSize={10} width={240} height={280} layout='vertical' verticalAlign='middle' align="right" />
      <Tooltip />
    </RadialBarChart>
  </ResponsiveContainer>
</React.Fragment>);

export default HalfCircleGugage;