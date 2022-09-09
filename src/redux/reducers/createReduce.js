import { createReducer } from "@reduxjs/toolkit";
import { fetched } from "../actions/actions";

const initialState = {
  posts: [],
  order: [],
  orderLike: [],
  isOpen: false,
  isOpenLike: false,
  isOpenOldOrder: false,
  isOpenRegistration: false,
  loadingStatus: "loading",
  addClassBuy: "",
  category: [],
  idState: [],
  orderServer: [],
  serverPost: [],
  ucerName: "",
  ucerPassword: "",
  ucerName2: "",
  ucerPassword2: "",
};
export const createReduce = createReducer(initialState, (builder) => {
    builder
      .addCase(fetched, (state, action) => {     
        state.loadingStatus = "Pending";
        state.posts = action.payload;
      })
      
  })