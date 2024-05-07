import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";


export const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export const get_reservation = async (req, res, next) => {
  const reservationName = req.params.name; // Assuming reservation name is passed as a parameter
  try {
    // Attempt to find the reservation by name in the database
    const reservation = await Reservation.findOne({ name: reservationName });
    
    // If no reservation is found, return a 404 error
    if (!reservation) {
      return next(new ErrorHandler("Reservation not found", 404));
    }
    
    // If the reservation is found, send a success response with the reservation data
    res.status(200).json({
      success: true,
      reservation,
    });
  } catch (error) {
    // Handle errors that occur during the database query or validation

    // If the error is a validation error (e.g., invalid data), return a 400 error
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    
    // If the error is not a validation error, it may be a database error or an unexpected error
    // Return the error and pass it to the error handling middleware
    return next(error);
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
};


export default send_reservation; get_reservation;

