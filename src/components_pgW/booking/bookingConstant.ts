import { Seat } from "./bookingType";
export const initialSeats: Seat[] = [
  { seatNumber: "A1", isBooked: false, price: 500, type: "VIP" },
  { seatNumber: "A2", isBooked: true, price: 500, type: "VIP" },
  { seatNumber: "A3", isBooked: false, price: 500, type: "VIP" },
  { seatNumber: "A4", isBooked: false, price: 500, type: "VIP" },
  { seatNumber: "A5", isBooked: true, price: 500, type: "VIP" },
  { seatNumber: "A6", isBooked: false, price: 500, type: "VIP" },

  { seatNumber: "B1", isBooked: false, price: 300, type: "Regular" },
  { seatNumber: "B2", isBooked: false, price: 300, type: "Regular" },
  { seatNumber: "B3", isBooked: true, price: 300, type: "Regular" },
  { seatNumber: "B4", isBooked: false, price: 300, type: "Regular" },
  { seatNumber: "B5", isBooked: false, price: 300, type: "Regular" },
  { seatNumber: "B6", isBooked: false, price: 300, type: "Regular" },

  { seatNumber: "C1", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "C2", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "C3", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "C4", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "C5", isBooked: true, price: 200, type: "Economy" },
  { seatNumber: "C6", isBooked: false, price: 200, type: "Economy" },

  { seatNumber: "D1", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "D2", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "D3", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "D4", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "D5", isBooked: false, price: 200, type: "Economy" },
  { seatNumber: "D6", isBooked: false, price: 200, type: "Economy" },
];
