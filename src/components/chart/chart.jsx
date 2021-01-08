import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './chart.module.css';

const Chart =( {data: { confirmed, recovered, deaths }, country}) =>{
    const [ dailyData, setDailyData ] = useState({});
    
    useEffect(()=>{
        const fetchAPI = async() =>{
            setDailyData(await fetchDailyData());
        }
        //console.log(dailyData);
        fetchAPI();
    });

    const lineChart = (
        dailyData.length?
        (<Line 
            data = {{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data:  dailyData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: '#e91e63',
                    fill: true,
                }, {
                    data:  dailyData.map(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: '#673ab7',
                    backgroundColor: 'white',
                    fill: true,
                }],
                }}
        />) : null
    );

    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['#e91e63', '#9c27b0', '#673ab7'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `COVID-19 Statistics in ${country}` },
            }}
          />
        ) : null
      );
      
    return(
      <div className = { styles.container }>
          {country? barChart: lineChart}
      </div>
    )
}

export default Chart;