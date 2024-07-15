import react from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const BookingConfirmation = () => {

    return(
        <>
            <Nav></Nav>
            <header>
                <h1>Booking confirmed!</h1>
            </header>
            <main>
                <p>Thank you for booking with us!</p>
            </main>
            <Footer></Footer>
        </>
    )
}

export default BookingConfirmation