import react, { useState, useEffect } from 'react'
import { useBookingsContext } from '../BookingsContext';

const BookingForm = () => {
    const [resDate, resDateSet] = useState();
    const [resTime, resTimeSet] = useState();
    const [numOfGuests, numOfGuestsSet] = useState();
    const [occasion, occasionSet] = useState();
    const { availableTimes, dispatch } = useBookingsContext();
    const [errors, errorsSet] = useState([])

    const handleDateChange = (event) => {
        resDateSet(event.target.value)
        dispatch({ type: 'Date', date: event.target.value })
    }

    const SubmitForm = (event) => {
        event.preventDefault();
        errorsSet([])
        let valid = true;
        if (!resDate) {
            errorsSet(errors => errors = [...errors, "Please select a date. Thank you."])
            //errorsSet(errors => errors.push("Please select a date. Thank you."))
            valid = false;
        }
        if (Date.parse(resDate) - Date.parse(new Date()) < 0) {
            errorsSet(errors => errors = [...errors, "Date cannot be set in the past. Please pick today's date or later. Thank you."])
            valid = false;
        }
        if (!resTime) {
            errorsSet(errors => errors = [...errors, "Booking time must be selected. Please select a booking time available. Thank you."])
            valid = false
        }
        if (numOfGuests < 1) {
            errorsSet(errors => errors = [...errors, "Number of guests cannot be below 1. Please choose between 1 - 10. Thank you."])
            valid = false;
        }
        else if (numOfGuests > 10) {
            errorsSet(errors => errors = [...errors, "Number of guests cannot be above 10. Please choose between 1 - 10. Thank you."])
            valid = false;
        }
        if (!occasion) {
            errorsSet(errors => errors = [...errors, "Occasion must be selected. Please select an occasion. Thank you."])
            valid = false
        }
        if (valid) {
            window.location.href = "/bookingConfirmed"
        }
    }
    return (
        <main className='BookingForm' onSubmit={SubmitForm}>
            {errors.map(error => {
                return <p>{error}</p>
            })}
            <form method='post'>
                <htmlLabel htmlFor='res-date'>
                    Choose Date:
                </htmlLabel>
                <input min={new Date()} type="date" id='res-date'
                    onChange={handleDateChange} />

                <htmlLabel htmlFor='res-time'>
                    Choose Time:
                </htmlLabel>
                <select id='res-time' onChange={(event) => { resTimeSet(event.target.value) }}>
                    <option value="">Select...</option>
                    {
                        availableTimes.map(time => {
                            return <option value={time}>{time}</option>
                        })
                    }
                </select>
                <htmlLabel htmlFor="guests">Number of Guests:</htmlLabel>
                <input id="guests" type="number" placeholder='1' min={1} max={10} onChange={(event) => { numOfGuestsSet(event.target.value) }}></input>
                <htmlLabel htmlFor='occasion'>Occasion:</htmlLabel>
                <select id='occasion' onChange={(event) => { occasionSet(event.target.value) }}>
                    <option value="">Select...</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input id='submit' type='submit' value={"Make Your Reservation"} />
            </form>
        </main>
    )
}

export default BookingForm