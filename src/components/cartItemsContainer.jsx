import React from 'react';
import { CartItem } from './cartItem'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearcart } from '../redux/features/cart';

const CartItemsContainer = () => {
      const dispatch = useDispatch()
      const {cartItems, total} = useSelector(state=>state)
      
  return (
    <div className='cartItemsContainer'>
      <h2>Your Cart</h2>
      <div className="cartItems">
            {cartItems.map(cartItem=><CartItem key={cartItem.id} {...cartItem}/>)}
      </div>
      <div className="clearcart">
            <button className='btn' onClick={()=>dispatch(clearcart())}>clear cart</button>
      </div>
      <hr />
      
      <div className="totals">
            <h6>Total</h6>
            <span>${total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartItemsContainer