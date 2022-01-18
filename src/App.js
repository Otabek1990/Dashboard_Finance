import React, { useEffect,useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import HearderComponent from "./Components/Header/HearderComponent";
import { Api } from "./utils/https";
import {FinanceContext} from './Context/context';
import {reducer,initialState} from './Reducer/reducer';
import {addAllDatas} from "./Reducer/action";
function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {

     Api({
      method: "get",
      url: "/GetPaymentByYearMonthProgramRegionDistrict",
      header: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
      .then((res) =>{
        dispatch(addAllDatas(res.data)) 
        const mini=res.data.filter(item=>item.districtName=="Нурафшон" )
        console.log(mini)
      } )
      .catch((err) => console.log(err.message));

  }, []);


  return (
    <FinanceContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <HearderComponent />;
      <Footer />
    </BrowserRouter>
    </FinanceContext.Provider>
  );
}

export default App;
