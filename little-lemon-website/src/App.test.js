import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './Components/Booking/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Tests date label in BookingForm', () => {
  render(<BookingForm/>);
  const dateLabel = screen.getByText("Choose Date:");
  expect(dateLabel).toBeInTheDocument();
})

test('Tests time label in BookingForm', () => {
  render(<BookingForm/>);
  const timeLabel = screen.getByText("Choose Time:");
  expect(timeLabel).toBeInTheDocument();
})

test('Tests # of guests label in BookingForm', () => {
  render(<BookingForm/>);
  const numOfGuests = screen.getByText("Number of Guests:");
  expect(numOfGuests).toBeInTheDocument();
})

test('Tests Occasion label in BookingForm', () => {
  render(<BookingForm/>);
  const occasionLabel = screen.getByText("Occasion:");
  expect(occasionLabel).toBeInTheDocument();
})

test('Tests updateTimes reducer function', () => {
  render(<BookingForm/>)
  const reducerCall = jest.fn();
  const dateInput = screen.getAllByLabelText("Choose Date:")
  expect(reducerCall).toHaveBeenCalledWith({target: {type: 'Date', date: new Date()}})
  fireEvent.change(dateInput,{ target: {value: Date.now}})
  expect(reducerCall).toHaveBeenCalledWith({target: {type: 'Date', date: new Date()}})
})

test('Tests date input function, fail', () => {
  const badDate = new Date(new Date().setDate(new Date().getDate() - 1));
  render(<BookingForm/>)
  const submitButton = screen.getByRole('submit');
  const dateInput = screen.getByLabelText("Choose Date:");
  fireEvent.change(dateInput, {target: {value: badDate}})
  const dateError = screen.getByTestId("errorDate")
  fireEvent.click(submitButton)
  expect(dateError).toBe("Date cannot be set in the past. Please pick today's date or later. Thank you.")
})

test('Tests time input function, fail', () => {
  render(<BookingForm/>)
  const submitButton = screen.getByRole('submit');
  const timeError = screen.getByTestId("errorTime")
  fireEvent.click(submitButton)
  expect(timeError).toBe("Booking time must be selected. Please select a booking time available. Thank you.")
})

test('Tests guests input function, fails', () => {
  render(<BookingForm/>)
  const submitButton = screen.getByRole('submit');
  const guestInput = screen.getByLabelText("Number of Guests:");
  fireEvent.change(guestInput, {target: {value: -1}})
  const guestError = screen.getByTestId("errorGuests")
  fireEvent.click(submitButton)
  expect(guestError).toBe("Number of guests cannot be below 1. Please choose between 1 - 10. Thank you.")
  fireEvent.change(guestInput, {target: {value: 11}})
  fireEvent.click(submitButton)
  expect(guestError).toBe("Number of guests cannot be above 10. Please choose between 1 - 10. Thank you.")
})

test('Tests occasion input function, fail', () => {
  render(<BookingForm/>)
  const submitButton = screen.getByRole('submit');
  const occasionError = screen.getByTestId("errorOccasion")
  fireEvent.click(submitButton)
  expect(occasionError).toBe("Occasion must be selected. Please select an occasion. Thank you.")
})
