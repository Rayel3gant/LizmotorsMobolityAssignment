
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarGraph = (props) => {
    const graphData=props.graphData;
    console.log(graphData)
  return (
    <div>

    
      <div className='w-full'>
                <Bar
                    data={{
                        labels: graphData.labels,
                        datasets: [
                            {
                                label: graphData.datasets[0].label,
                                data: graphData.datasets[0].data,
                                backgroundColor: graphData.datasets[0].backgroundColor,
                                borderColor: graphData.datasets[0].borderColor,
                                borderWidth: 0.5,
                            },
                        ],
                    }}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                        legend: {
                            labels: {
                                fontSize: 15,
                            },
                        },
                    }}
                />
            </div>
    </div>
  )
}

export default BarGraph