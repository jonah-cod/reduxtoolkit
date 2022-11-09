import React from 'react';
import { useDispatch } from 'react-redux'
import { increaseAmount, decreaseAmount, removeItem } from '../redux/features/cart';

export const CartItem = ({ id, title, img, amount, price }) => {

      const dispatch = useDispatch()


      return (
            <div className='cartitem'>
                  <div className="itemimage">
                        <img src={img} alt="" />
                  </div>
                  <div className="details">
                        <h6>{title}</h6>
                        <span>Price: ${price}</span>
                        <button onClick={()=>dispatch(removeItem(id))}>remove</button>
                  </div>
                  <div className="actions">
                        <i class="fas fa-chevron-up" onClick={()=>dispatch(increaseAmount(id))}></i>
                        <span>{amount}</span>
                        <i class="fas fa-chevron-down" onClick={()=>{
                              if (amount === 1) {
                                    return dispatch(removeItem(id))
                              }
                              dispatch(decreaseAmount(id))
                        }}></i>
                  </div>
            </div>
      )
}
