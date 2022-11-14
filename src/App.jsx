import NavBAr from './components/NavBAr';
import './App.css';
import CartItemsContainer from './components/cartItemsContainer';
import { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { useSelector} from 'react-redux'

import {  calculateTotals, getAllcartItems } from './redux/features/cart'
 
function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state)=>state)
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  
  useEffect(() => {
    dispatch(getAllcartItems({id:"1", name:"smith",age:10}))
  }, [])

  
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBAr/>
      </header>
      <CartItemsContainer />
    </div>
  );
}

export default App;
