import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
const initialState = {
      cartItems: cartItems,
      quantity: 0,
      total: 0,
      isLoading: true
}

const cart = createSlice({
      name: 'cart',
      initialState,
      reducers: {
            clearcart:(state)=>{
                  state.cartItems=[]
            },
            increaseAmount: (state, {payload})=>{
                  console.log(state)
                  let singleItem = state.cartItems.find((item)=>item.id === payload)
                  singleItem.amount= singleItem.amount + 1
                  
            },
            decreaseAmount: (state, {payload})=>{
                  console.log(state)
                  let singleItem = state.cartItems.find((item)=>item.id === payload)
                  singleItem.amount= singleItem.amount - 1
                  
                  
            },

            removeItem: (state, {payload})=>{
                  state.cartItems = state.cartItems.filter((item)=>item.id !==payload)
            },
            calculateTotals: (state)=>{
                  state.quantity = state.cartItems.reduce((sum, item)=>sum + item.amount, 0)
                  state.total = state.cartItems.reduce((sum, item)=>sum + (item.amount * item.price), 0)
            }
      }
})


export const { increaseAmount, clearcart, decreaseAmount, removeItem, calculateTotals } = cart.actions

export default cart.reducer
