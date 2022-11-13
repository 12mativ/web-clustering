import * as React from 'react';
import Paper from '@mui/material/Paper';
import {ArgumentAxis, Chart, ScatterSeries, ValueAxis,} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';

import {dataGenerator} from './data';
import {Box, Typography} from "@mui/material";

export default class Clusters extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: dataGenerator(500),
      count: 5,
      clusters: []
    };
  }
  // componentDidMount() {
  //   for(let i = 1; i <= this.state.count; i++) {
  //     this.setState({ clusters: [...this.state.clusters,
  //         <ScatterSeries key={i} valueField={`val${i}`} argumentField={`arg${i}`}/>] })
  //   }
  // }

  render() {
    for(let i = 1; i <= this.state.count; i++) {
      this.setState({
        clusters: [...this.state.clusters,
          <ScatterSeries key={i} valueField={`val${i}`} argumentField={`arg${i}`}/>]
      })
    }

    const onChangeHandler = (e) => {
      this.setState({count: e.target.value})
    }
    const { data: chartData } = this.state;
    return (
        <Box sx={{height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Typography component={'h1'} variant={'h3'} sx={{fontWeight: '500'}}>Результат кластеризации</Typography>
          <Paper sx={{width: '1000px'}}>
            <Chart
                data={chartData}
            >
              <ArgumentAxis showGrid />
              <ValueAxis />
              {this.state.clusters}
              <Animation />
            </Chart>
          </Paper>
          <label>Количество кластеров</label>
          <input value={this.state.count} onChange={(e) => onChangeHandler(e)}/>
        </Box>

    );
  }
}


// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//     Chart,
//     ScatterSeries,
//     ArgumentAxis,
//     ValueAxis,
// } from '@devexpress/dx-react-chart-material-ui';
// import {Animation} from '@devexpress/dx-react-chart';
//
// import {dataGenerator} from './data';
// import {Box, Button} from "@mui/material";
// import {NavLink} from "react-router-dom";
// import {useState} from "react";
//
// export const Clusters = () => {
//     const [data, setData] = useState([])
//     setData(dataGenerator(100))
//     const {data: chartData} = data;
//
//     return (
//         <Box>
//             <Paper>
//                 <Chart
//                     data={chartData}
//                 >
//                     <ArgumentAxis showGrid/>
//                     <ValueAxis/>
//                     <ScatterSeries
//                         valueField="val1"
//                         argumentField="arg1"
//                     />
//                     <ScatterSeries
//                         valueField="val2"
//                         argumentField="arg2"
//                     />
//                     <Animation/>
//                 </Chart>
//             </Paper>
//         </Box>
//
//     );
// }
