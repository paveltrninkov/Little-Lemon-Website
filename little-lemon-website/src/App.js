import './App.css';
import {useState, useReducer} from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage'
import Booking from './Pages/Booking'
import BookingConfirmation from './Pages/BookingConfirmation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/booking' element={<Booking/>}></Route>
      <Route path='/bookingConfirmed' element={<BookingConfirmation/>}></Route>
    </Routes>
  );
}

export default App;
