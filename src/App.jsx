
import './App.css'
import { Homepage } from './assets/pages/HomePage'
import {CheckoutPage} from './assets/pages/CheckoutPage'
import {OrderPage} from './assets/pages/OrderPage'
import { Route,Routes } from 'react-router'
function App() {

  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="checkout/" element={<CheckoutPage />}/>
      <Route path="order/" element={<OrderPage />}/>
    </Routes>
  )
}

export default App
