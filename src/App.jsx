
import './App.css'
import { Homepage } from './assets/pages/HomePage'
import { CheckoutPage } from './assets/pages/CheckoutPage'
import { OrderPage } from './assets/pages/OrderPage'
import { TrackingPage } from './assets/pages/TrackingPage'
import { Route, Routes } from 'react-router'
function App() {

  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="checkout/" element={<CheckoutPage />} />
      <Route path="order/" element={<OrderPage />} />
      <Route path="tracking/" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
