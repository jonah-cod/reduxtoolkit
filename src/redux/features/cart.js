import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
const initialState = {
      cartItems: [],
      quantity: 0,
      total: 0,
      isLoading: false,
      error: ""
}

// action types
// callback
// lifecycles
      //pending, fulfilled and rejected
const url = "https://course-api.com/react-useReducer-cart-project"

export const getAllcartItems = createAsyncThunk("cartItems/getall", async()=>{
      
      return await fetch(url ).then(res=>res.json()).then(data=>data)
})



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
      },
      extraReducers:{
            [getAllcartItems.pending]:(state)=>{
                  state.isLoading = true;
            },
            [getAllcartItems.fulfilled]: (state, action)=>{
                  state.isLoading = false;
                  state.cartItems = action.payload
            },
            [getAllcartItems.rejected]: (state, action)=>{
                  state.isLoading = false;
                  state.error = action.error.message
                  console.log(action)
            }

      }
})


export const { increaseAmount, clearcart, decreaseAmount, removeItem, calculateTotals } = cart.actions

export default cart.reducer
