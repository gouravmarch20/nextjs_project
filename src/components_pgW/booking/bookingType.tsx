type SeatType = "Regular" | "VIP" | "Economy";

export interface Seat {
  seatNumber: string;
  isBooked: boolean;
  price: number;
  type: SeatType;
}

export type PassengerInfo = {
  seatNumber: string;
  name: string;
  age: number;
};
