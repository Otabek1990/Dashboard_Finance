import React from "react";
import {Chart,Bars,Dots,Lines} from "rumble-charts";

export default function Chart2() {

  const series = [
    {
      data: [1, 2, 3],
    },
    {
      data: [5, 7, 11],
    },
    {
      data: [13, 17, 19],
    },
  ];

  return (
    <div style={{margin:"0 60px"}}>
        <h2>Moliya statiskasi</h2>
      <Chart width={500} height={320} series={series} minY={0} maxY={20}>
        <Bars innerPadding={5} groupPadding={10} />
        <Lines />
        <Dots />
      </Chart>
      ;
    </div>
  );
}
