import { ADD_INFOS,ADD_ALL_DATAS,GET_FILTER_DATA} from "./type";

export const initialState = {
  allDatas:[],
  financeInfos: {
    districtID: "",
    districtName: "",
    regionID: "11",
    regionName: "ТОШКЕНТ ВИЛОЯТИ",
    paymentYear: "",
    paymentMonth: "",
    programmeID: "",
  },
  filterData:[]
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ALL_DATAS:
      return (state = {
        ...state,
        allDatas:[...action.payload]
      });
    case ADD_INFOS:
      return (state = {
        ...state,
        financeInfos: action.payload,
      });
    case GET_FILTER_DATA:
      return (state = {
        ...state,
        filterData:[...action.payload]
      });
    default:
      return state;
  }
};
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_DISTRICT_NAME:
//       return state={
//           ...state,
//             financeInfos:{
//                 ...state.financeInfos,
//                 districtName:action.payload
//       }}
//     case ADD_DISTRICT_ID:
//       return state={
//           ...state,
//             financeInfos:{
//                 ...state.financeInfos,
//                 districtID:action.payload
//       }}
//     case ADD_REGION_NAME:
//       return state={
//           ...state,
//             financeInfos:{
//                 ...state.financeInfos,
//                 regionName:action.payload
//       }}
//     case ADD_REGION_ID:
//       return state={
//           ...state,
//             financeInfos:{
//                 ...state.financeInfos,
//                 regionID:action.payload
//       }}
//     case ADD_PAYMENT_YEAR:
//       return state={
//           ...state,
//             financeInfos:{
//                 ...state.financeInfos,
//                 paymentYear:action.payload
//       }}
//     case ADD_PAYMENT_MONTH:
//       return state={
//           ...state,
//             financeInfos:{
//                 ...state.financeInfos,
//                 paymentMonth:action.payload
//       }}
//     case ADD_PROGRAMME_ID:
//       return state={
//           ...state,
//             financeInfos:{
//                 ...state.financeInfos,
//                 programmeID:action.payload
//       }}

//     default:
//       return state;
//   }
// };
// export default reducer;
