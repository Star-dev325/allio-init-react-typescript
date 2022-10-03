import React, { useState } from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiPaper from '@mui/material/Paper';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';

import { SideBar, ChartShower, MainBoard } from './AppStyles';
import { showStyles } from './utilities/helper';
import Charts from './componenets/Charts';

function App() {

  const [param, setParam] = useState(window.location.pathname.slice(1));
  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setParam(nextView);
  };

  return (
    <MainBoard>
      <Router>
        <SideBar>
          <MuiToggleButtonGroup
            size='large'
            orientation='vertical'
            value={param}
            exclusive
            onChange={handleChange}
          >
            {
              showStyles.map((factor: string, idx: number) => (<MuiToggleButton
              key={idx}
              component={Link}
              to={`/${factor.split(' ').join('').toLowerCase()}`}
              value={factor.split(' ').join('').toLowerCase()}
              sx={{
                textTransform: 'none' 
              }} >{factor}</MuiToggleButton>))
            }
          </MuiToggleButtonGroup>
        </SideBar>
        <ChartShower>
          <MuiPaper
          sx = {{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '100px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          elevation={3}>
              <Routes>
                <Route path='/' element={<Navigate to='/bar' replace />} />
                <Route path='/bar' element={<Charts.Bar />} />
                <Route path='/line' element={<Charts.Line />} />
                <Route path='/area' element={<Charts.Area />} />
                <Route path='/stackedbar' element={<Charts.StackedBar />} />
                <Route path='/circleguage' element={<Charts.CircleGuage />} />
                <Route path='/halfcircleguage' element={<Charts.HalfCircleGuage />} />
                <Route path='/composedchart' element={<Charts.Composed />} />
                <Route path='/pie' element={<Charts.Pie />} />
                <Route path='/Radar' element={<Charts.Radar />} />
                <Route path='/funnel' element={<Charts.Funnel />} />
              </Routes>
          </MuiPaper>
        </ChartShower>
      </Router>
    </MainBoard>
  );
}

export default App;
