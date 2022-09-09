import { createSlice } from "@reduxjs/toolkit";

const clothes = createSlice({
    name:'clothes',
    initialState:{posts:[], loadingStatus: "loading",},
    reducers:{
        fetched:(state,action)=>{
            state.loadingStatus = "Pending";
            state.posts = action.payload
        }
    }
})
const {reducer,actions} = clothes;
export default reducer;
export const {fetched} = actions;