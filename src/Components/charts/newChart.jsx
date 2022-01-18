import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';
import Datas from "./dataa.json";

const DemoColumn = () => {
  const [data, setData] = useState(Datas);

//   useEffect(() => {
//     asyncFetch();
//   }, []);
//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/antfincdn/mor%26R5yBI9/stack-group-column.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };
//   console.log(data)
//   console.log(Datas)

  const config = {
    data,
    xField: 'product_type',
    yField: 'order_amt',
    isGroup: true,
    isStack: true,
    seriesField: 'product_sub_type',
    groupField: 'sex',
    tooltip: {
      formatter: (datum) => ({
        name: `${datum.product_sub_type} ${datum.sex === 'man' ? '👦' : '👧'}`,
        value: datum.order_amt,
      }),
    },
  };

  return <Column  {...config} />;
};

export default DemoColumn;