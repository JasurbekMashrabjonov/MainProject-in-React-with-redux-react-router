import { createAction } from "@reduxjs/toolkit";

// export const fetched = (data) => ({ type: "FETCHED", payload: data });
// export const getItem = (item) => ({ type: "GET_ITEM", payload: item });
// export const getCategory = (category) => ({type: "GETCATEGORY",payload: category});
// export const getIdItem =(id) =>({type:'GET_ID_ITEM',payload:id})
// export const remove = (item) => ({ type: "REMOVE", payload: item });
// export const getLike = (item) => ({ type: "GET_LIKE", payload: item });
// export const removeLike =(item) =>({type:'REMOVE_LIKE',payload:item});
// export const plus =(item) =>({type:'PLUS',payload:item});
// export const minus =(item) =>({type:'MINUS',payload:item});
// export const getOrderServer =(data) =>({type:'GETORDERSERVER',payload:data});
// export const serverPostFunc =(date1) =>({type:"SERVER_POST",payload:date1});
// export const changeState = ()=>({type:"CHANGE_STATE"});
// export const changeStateLikeBox =()=>({type:"CHANGE_STATE_Like_Box"});
// export const changeStateOldOrderBox =()=>({type:"CHANGE_STATE_OLDORDER_BOX"});
// export const changeStateRegistration =()=>({type:"CHANGE_STATE_REGISTRATION"});
// export const setServerPost =()=>({type:'SET_SERVER_POST'});

// --------------------------------------//

export const fetched = createAction("FETCHED");
// -------
export const getItem = createAction("GET_ITEM");
// ------
export const getCategory = createAction("GETCATEGORY");
export const getIdItem = createAction("GET_ID_ITEM");
export const remove = createAction("REMOVE");
export const getLike = createAction("GET_LIKE");
export const removeLike = createAction("REMOVE_LIKE");
// // ----------
export const plus = createAction("PLUS");
export const minus = createAction("MINUS");
// // -----------
export const getOrderServer = createAction("GETORDERSERVER");
export const changeState = createAction("CHANGE_STATE");
export const changeStateLikeBox = createAction("CHANGE_STATE_Like_Box");
export const changeStateOldOrderBox = createAction("CHANGE_STATE_OLDORDER_BOX");
export const changeStateRegistration = createAction(
  "CHANGE_STATE_REGISTRATION"
);
export const setServerPost = createAction("SET_SERVER_POST");
export const setServerLike = createAction("SET_SERVER_LIKE");
