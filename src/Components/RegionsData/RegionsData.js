import React, { useState, useEffect, useContext,useRef } from "react";
import "./regionsData.css";
import { allDatas } from "../../datas/allDatas";
import { useParams } from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {addRegionsInfos} from "../../redux/regionsSlice";
import { FinanceContext } from "../../Context/context";
import { addInfos } from "../../Reducer/action";
// import data from "../../datas/apidatas.json";
import Tooltip from '@mui/material/Tooltip';

function RegionsData() {
  const [categories, setcategories] = useState([]);
  const { id } = useParams();
  const { state, dispatch } = useContext(FinanceContext);
  // USE refs for tooltip-------------------
  const positionRef = useRef({
    x: 0,
    y: 0,
  });
  const popperRef = useRef(null);
  const areaRef = useRef(null);
// ----------------------------------------------------
  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  const filteredDatas = allDatas.filter((item) => item.id === id);
  useEffect(() => {
    filteredDatas.map((item) => setcategories(item.infos));
  }, []);

  const getDatas = (id, name) => {
   
    const newObj = {
      ...state.financeInfos,
      districtID: id,
      districtName: name,
    };
    dispatch(addInfos(newObj));
  };

  return (
    <div className="region">
      {filteredDatas.map((itemm) => (
        <svg
          id={itemm.name}
          className={itemm.regionClas}
          baseprofile="tiny"
          width="100%"
          height="100%"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          version="1.2"
          viewbox="0 0 1000 652"
        >
          <svg>
            {categories?.map((item) => (
                 <Tooltip
                 title={item.name}
                 placement="bottom"
                 arrow
                 PopperProps={{
                   popperRef,
                   anchorEl: {
                     getBoundingClientRect: () => {
                       return new DOMRect(
                         positionRef.current.x,
                         areaRef.current.getBoundingClientRect().y,
                         0,
                         0,
                       );
                     },
                   },
                 }}
               >
              <path
                onClick={(id, name) => {
                  getDatas(item.id, item.name);
                }}
                id={item.id}
                className={item.clas}
                d={item.d}
                ref={areaRef}
                onMouseMove={handleMouseMove}
              />
            </Tooltip>
            ))}
          </svg>
       
     
     
          <circle cx="673.4" cy="626" id="0"></circle>
          <circle cx="637.6" cy="506" id="1"></circle>
          <circle cx="636" cy="498.9" id="2"></circle>
        </svg>
      ))}
    </div>
  );
}

export default RegionsData;
