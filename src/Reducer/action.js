import { ADD_INFOS,ADD_ALL_DATAS,GET_FILTER_DATA } from "./type";

export const addInfos=(info)=>{
    return {
        type:ADD_INFOS,
        payload:info
    }
}
export const addAllDatas=(data)=>{
    return {
        type:ADD_ALL_DATAS,
        payload:data
    }
}
export const getFilterData=(dataa)=>{
    return {
        type:GET_FILTER_DATA,
        payload:dataa
    }
}