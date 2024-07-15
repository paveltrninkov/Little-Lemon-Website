import react, {useReducer, useEffect} from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Booking/Header'
import BookingForm from '../Components/Booking/BookingForm'
import Footer from '../Components/Footer'
import BookingsContext from '../Components/BookingsContext'
import {fetchAPI, submitAPI} from '../Util/api'

const updateTimes = (state, action) => {
  if (action.type === 'Date') {
    state = fetchAPI(new Date(action.date))
  }
  else {
    state = ["17:00", "18:00", "20:00", "22:00"]
  }
  return state
}

const initializeTimes = (date) => {
  console.log(date)
  const availableTimes = fetchAPI(date)
  return availableTimes
}

const Booking = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, new Date(), initializeTimes)

    const availableTimesState = {
        availableTimes,
        dispatch
    }

    return (
        <BookingsContext.Provider value={availableTimesState}>
            <Nav></Nav>
            <Header></Header>
            <BookingForm></BookingForm>
            <Footer></Footer>
        </BookingsContext.Provider>
    )
}

export default Booking