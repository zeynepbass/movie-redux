import React from "react";

import { fetchMemory,fetchDelete,fetchPost,fetchUpdate } from '../../api';
export const memory = () => (dispatch) => {
  fetchMemory()
    .then((response) => {
      dispatch({ type: "YAZI_LISTESI_GETIR", payload: response.data });

    })
    .catch(() => {
     
    });
};
export const memoryEkle=(post)=>(dispatch)=>{
  fetchPost(post)
  .then((response)=>{
    dispatch({type:"MEMORY_EKLE",payload:response.data})
  })
  .catch(() => {
   
  });
};
export const memoryDelete=(id)=>(dispatch)=>{
  fetchDelete(id)
  .then((response)=>{
    dispatch({type:"MEMORY_SIL",payload:id})
  })
  .catch(() => {
   
  });
};
export const memoryUpdate=(id,post)=>(dispatch)=>{
  fetchUpdate(id,post)
  .then((response)=>{
    dispatch({type:"MEMORY_UPDATE",payload:response.data})
  })
  .catch(() => {
   
  });

}
