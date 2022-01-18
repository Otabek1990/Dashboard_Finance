import React, { useState, useContext, useRef } from "react";
import "./map.css";
import { uzbDatas } from "../../datas/uzbDatas";
import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { FinanceContext } from "../../Context/context";
import { addInfos } from "../../Reducer/action";
import Tooltip from '@mui/material/Tooltip';

function Map() {
  const [name, setName] = useState(null);
  let navigate = useNavigate();
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
  // -------------------------
  // useEffect(() => {
  //   const newObj={
  //     ...state.financeInfos,
  //     regionName:name
  //   }
  //  dispatch(addInfos(newObj))
  // }, [name]);
  // ------------------
  // ---------------------------------------------------------
  const doubleClick = (id,name) => {
    navigate(`/regionData/${id}`);
    const newObj = {
      ...state.financeInfos,
      regionID: id,
      regionName: name,
      districtName:""
    };
    dispatch(addInfos(newObj));
  };
  return (
    <div style={{ marginLeft: "40px" }} className="regions">
    

      <div className="uzbmap">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 264.05408 171.97914"
          version="1.1"
          id="uzbekistan"
          stroke="white"
          stroke-width="0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <sodipodi
            id="namedview204"
            pagecolor="#505050"
            bordercolor="#eeeeee"
            borderopacity="1"
            showgrid="false"
            width="264.05408mm"
            height="240mm"
            fit-margin-top="0"
            fit-margin-left="0"
            fit-margin-right="0"
            fit-margin-bottom="0"
          />

          <g id="layer1" transform="translate(-32.388773,-30.710986)">
            {uzbDatas?.map((item) => (
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
                        0
                      );
                    },
                  },
                }}
              >
                <path
                  d={item.d}
                  name={item.name}
                  id={item.clas}
                  onDoubleClick={(id,name) => doubleClick(item.id,item.name)}
                  // onClick={(id, name) => {
                  //   togglePopup(item.id, item.name);
                  // }}
                  ref={areaRef}
                  onMouseMove={handleMouseMove}
                ></path>
              </Tooltip>
            ))}
          </g>
          <g>
            <circle cx="673.4" cy="626" id="0"></circle>
            <circle cx="637.6" cy="506" id="1"></circle>
            <circle cx="636" cy="498.9" id="2"></circle>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Map;
