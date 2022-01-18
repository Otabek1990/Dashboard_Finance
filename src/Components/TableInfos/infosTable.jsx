import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FinanceContext } from "../../Context/context";

export default function InfosTable() {
  const { state } = useContext(FinanceContext);
  const { filterData,financeInfos} = state;
  console.log(filterData)
  return (
    <TableContainer style={{ height: "500px" }} component={Paper}>
      <Table sx={{ minWidth: 150 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: "25px", fontWeight: "bold" }}>
              Viloyat{" "}
            </TableCell>
            <TableCell
              style={{ fontSize: "25px", fontWeight: "bold" }}
              align="left"
            >
              Tuman
            </TableCell>
            <TableCell
              style={{ fontSize: "25px", fontWeight: "bold" }}
              align="left"
            >
              Summa
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
    
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="data"    align="left">
                  {financeInfos.regionName}
                </TableCell>
                <TableCell align="left">{financeInfos.districtName}</TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "22px" }}
                  align="left"
                >
                  {filterData.length>0 ? <h5>{filterData[0].sumAmount}</h5>: <h5>Malumot kiritilmagan</h5>}
                </TableCell>
              </TableRow>
          
           
        </TableBody>
      </Table>
    </TableContainer>
  );
}
