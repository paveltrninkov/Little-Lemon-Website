import React from 'react'

const BookingsContext = React.createContext();

export function useBookingsContext() {
    return React.useContext(BookingsContext);
}

export default BookingsContext