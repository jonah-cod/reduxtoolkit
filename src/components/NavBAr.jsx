import React from 'react';
import { useSelector} from 'react-redux'

const NavBAr = () => {
      const { quantity } = useSelector((state)=>state)
  return (
    <div className='navbar'>
      <h4>Redux Toolkit</h4>
      <div className="counter">
      <i class="fas fa-shopping-cart"></i>
            <span>{quantity}</span>
      </div>
    </div>
  )
}

export default NavBAr