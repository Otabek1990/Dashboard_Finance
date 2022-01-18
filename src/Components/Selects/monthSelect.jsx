import React,{useState,useEffect,useContext} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { maxWidth } from '@mui/system';
import {FinanceContext} from "../../Context/context";
import { addInfos } from '../../Reducer/action';

export default function MonthSelect() {
  const [oy, setOy] = useState('');
  const {state,dispatch} = useContext(FinanceContext)

  const handleChange = (event) => {
    setOy(event.target.value);
  };
  useEffect(() => {
    const newObj={
      ...state.financeInfos,
      paymentMonth:oy
    }
   dispatch(addInfos(newObj))
  }, [oy]);
// const months=[
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
 
// ]
const months=[
  {
    monthId:"1",
    monthName:"Yanvar"
  },
  {
    monthId:"2",
    monthName:"Fevral"
  },
  {
    monthId:"3",
    monthName:"Mart"
  },
  {
    monthId:"4",
    monthName:"Aprel"
  },
  {
    monthId:"5",
    monthName:"May"
  },
  {
    monthId:"6",
    monthName:"Iyun"
  },
  {
    monthId:"7",
    monthName:"Iyul"
  },
  {
    monthId:"8",
    monthName:"Avgust"
  },
  {
    monthId:"9",
    monthName:"Sentabr"
  },
  {
    monthId:"10",
    monthName:"Oktabr"
  },
  {
    monthId:"11",
    monthName:"Noyabr"
  },
  {
    monthId:"12",
    monthName:"Dekabr"
  },
]
  return (
    <Box sx={{ maxWidth:200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Oy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={oy}
          label="Yil"
          onChange={handleChange}
        >
          {months.map((item,index)=>(
            <MenuItem key={index} value={item.monthId}>{item.monthName}</MenuItem>

          ))}
      
        </Select>
      </FormControl>
    </Box>
  );
}
