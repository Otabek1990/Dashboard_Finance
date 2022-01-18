import React,{useState,useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
// import AllInfos from "../../allmaps/datas/apidatas.json"
import { useSelector } from "react-redux";

function Chartt({infos,regInfos,uzb}) {
const [datas, setDatas] = useState([3000])
const allInfos = useSelector(state => state.regionsSlice.allInfos);
console.log( allInfos)
console.log( uzb)
//   const allInfos=useSelector(state=>state.regionsSlice.allInfos)


  useEffect(() => {
    if(!uzb){
      allInfos?.map(item=> {
        setDatas([Number(item.maqullangan),Number(item.radEtilgan),Number(item.muddatiTugagan)])
      })
   }
  
    if(uzb){
    infos?.map(item=> {
      setDatas([item.maqullangan,item.radEtilgan,item.muddatiTugagan])
   })}
    
  }, [allInfos])
  console.log(datas)
const state = {
  labels: [
   
    // "Maqullangan",
    // "Rad etilgan",
    // "Muddati tugagan",
  
  ],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["royalblue", "red", "#2FDE00", ],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "black",
      ],
      data:datas
    },
  ],
};
    return (
      <div style={{ marginTop: "10px" }}>
      {/* {!uzb && allInfos?.map(item=>(
<h2 style={{paddingLeft:"40px"}}>
Tuman nomi:<span style={{color:"royalblue"}}>{item.tumanNomi}</span>
</h2>
      ))} */}
     <h2 style={{marginLeft:"30px"}}>Tumanlar kesimida ma'lumotlar</h2>
      <Doughnut
        style={{height: "140px",width:"400px",
        marginLeft: "30px",
        marginTop:"-40px",
      padding:"50px"
     }}
        data={state}
        options={
          
          {
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize:"65",
          },
          legend: {
            display: true,
            position: "right",
          },
      
      
        }}
      />
    </div>
    );
  
}
export default Chartt;
