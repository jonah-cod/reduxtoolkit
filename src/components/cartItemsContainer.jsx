import React from 'react';
import { CartItem } from './cartItem'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearcart } from '../redux/features/cart';

const CartItemsContainer = () => {
      const dispatch = useDispatch()
      const {cartItems, total, quantity, isLoading, error} = useSelector(state=>state)
      
      if (isLoading) {
            return (<div>
              <h2>Loading...</h2>
            </div>)
          }

          if (!isLoading && error.trim()) {
            return (<div>
              <h2>{error}</h2>
            </div>)
          }
  return (
    <div className='cartItemsContainer'>
      <h2>Your Cart</h2>
      {!quantity &&  <h4>your cart is empty</h4>
      }
      <div className="cartItems">
            {cartItems.map(cartItem=><CartItem key={cartItem.id} {...cartItem}/>)}
      </div>
      { quantity?  <div className="clearcart">
            <button className='btn' onClick={()=>dispatch(clearcart())}>clear cart</button>
      </div> : ""}
      <hr />
      
      <div className="totals">
            <h6>Total</h6>
            <span>${total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartItemsContainer