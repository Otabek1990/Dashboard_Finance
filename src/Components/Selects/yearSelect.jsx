import React,{useState,useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { maxWidth } from '@mui/system';
import {FinanceContext} from "../../Context/context";
import { addInfos } from '../../Reducer/action';
export default function YearSelect() {
  const [yil, setYil] = useState('');
const {state,dispatch} = useContext(FinanceContext)
  const handleChange = (event) => {
    setYil(event.target.value);
  };
  useEffect(() => {
    const newObj={
      ...state.financeInfos,
      paymentYear:yil
    }
   dispatch(addInfos(newObj))
  }, [yil]);
 
const years=[
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
]
  return (
    <Box sx={{ maxWidth:200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Yil</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={yil}
          label="Yil"
          onChange={handleChange}
        >
          {years.map((year,index)=>(
            <MenuItem key={index} value={year}>{year}</MenuItem>

          ))}
      
        </Select>
      </FormControl>
    </Box>
  );
}
