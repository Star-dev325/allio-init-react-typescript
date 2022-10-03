import React from 'react';
import { RadarChart, Radar as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts';

import { dataStr, dataStr1 } from '../../../utilities/helper';

const Bar: React.FC = () => (
  <React.Fragment>
    <ResponsiveContainer width={'100%'}>
    <RadarChart outerRadius={90} width={730} height={250} data={dataStr}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <RechartsRadar name="uv" dataKey="uv" stroke="#000000" fill="#8884d8" fillOpacity={0.6} />
      <RechartsRadar name="pv" dataKey="pv" stroke="#787878" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
    </ResponsiveContainer>
    <ResponsiveContainer width={'100%'}>
    <RadarChart outerRadius={90} width={730} height={250} data={dataStr1}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <RechartsRadar name="v1" dataKey="uv" stroke="#9b3636" fill="#ced884" fillOpacity={0.6} />
      <RechartsRadar name="v2" dataKey="pv" stroke="#ff0000" fill="#8284ca" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
    </ResponsiveContainer>
  </React.Fragment>
  );

export default Bar;