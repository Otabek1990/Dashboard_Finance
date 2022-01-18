import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { maxWidth } from "@mui/system";
import { FinanceContext } from "../../Context/context";
import { addInfos } from "../../Reducer/action";
export default function ProgrammeSelect() {
  const [programmeId, setprogrammeId] = useState("");
  const { state, dispatch } = useContext(FinanceContext);

  const handleChange = (event) => {
    setprogrammeId(event.target.value);
    
  };
  const programmes = [
    {
      id: 1,
      name: "Bolali oilalar uchun nafaqa (0-14)",
      programmeID: "1",
    },
    {
      id: 2,
      name: "Moddiy yordam",
      programmeID: "2",
    },
    {
      id: 3,
      name: "Bolaga qarash bo'yicha nafaqa (0-2)",
      programmeID: "3",
    },
    {
      id: 4,
      name: "Bola 2 yoshga to’lguncha uni parvarishlash bo’yicha kompensatsiya",
      programmeID: "4",
    },
    {
      id: 5,
      name: "Kam ta'minlangan oilalarga kompensatsiya",
      programmeID: "5",
    },
    {
      id: 6,
      name: "14 yoshgacha bolalari bo’lgan oilalarga kompensatsiya",
      programmeID: "6",
    },
    {
      id: 7,
      name: "Kam ta'minlangan oilalarga bolalar nafaqasi",
      programmeID: "7",
    },
    {
      id: 8,
      name: "Kam ta'minlangan oilalarga moddiy yordam",
      programmeID: "8",
    },
    {
      id: 9,
      name: "Kam ta'minlanganligi to'g'risida ma'lumotnoma",
      programmeID: "9",
    },
  ];
  useEffect(() => {
    const newObj = {
      ...state.financeInfos,
      programmeID: programmeId,
    };
    dispatch(addInfos(newObj));
  }, [programmeId]);
  return (
    <Box sx={{ maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Dastur turi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={programmeId}
          label="Dastur"
          onChange={handleChange}
        >
          {programmes.map((item) => (
            <MenuItem value={item.programmeID}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
