/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const initialState = {
  amount:0,
  items: data,
  total:0
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    clearCart :(state) => {
      state.items =[]
    },
    inc: (state, {payload}) => {
      const tmpItem = state.items.find((item) => item.id == payload.id);
      tmpItem.amount = tmpItem.amount + 1
    } ,
    dec: (state, {payload}) => {
      const tmpItem = state.items.find((item) => item.id == payload.id);
      tmpItem.amount = tmpItem.amount - 1
    } ,
    removeItem: (state, actions) => {
      state.items = state.items.filter((item) => item.id !==actions.payload);
    
    } ,
    calcTotal:(state) =>{
      let amount = 0;
      let total = 0;
      state.items.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount=amount;
      state.total=total;
    }
  }
})
export const {clearCart,inc, dec,removeItem,calcTotal} = cartSlice.actions;

export default cartSlice.reducer;