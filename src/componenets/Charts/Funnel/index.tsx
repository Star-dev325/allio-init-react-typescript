import React from 'react';
import { FunnelChart, Funnel as RechartsFunnel, LabelList, Tooltip, ResponsiveContainer } from 'recharts';

import { dataStr, dataStr1 } from '../../../utilities/helper';

const Bar: React.FC = () => (
  <React.Fragment>
    <ResponsiveContainer width={'100%'}>
      <FunnelChart width={730} height={250}>
      <Tooltip />
      <RechartsFunnel
        dataKey="name"
        data={dataStr}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </RechartsFunnel>
      </FunnelChart>
    </ResponsiveContainer>
    <ResponsiveContainer width={'100%'}>
    <FunnelChart width={730} height={250}>
      <Tooltip />
      <RechartsFunnel
        dataKey="name"
        data={dataStr1}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </RechartsFunnel>
      </FunnelChart>
    </ResponsiveContainer>
  </React.Fragment>
  );

export default Bar;