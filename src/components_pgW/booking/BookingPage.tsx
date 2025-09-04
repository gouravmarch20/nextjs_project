import React, { useState } from "react";
import { Seat, PassengerInfo } from "./bookingType";
import { initialSeats } from "./bookingConstant";
import SeatLegend from "./SeatLegend";
import SeatGrid from "./SeatGrid";
import PassengerForm from "./PassengerForm";

const SeatBookingPage = () => {
  const [seats, setSeats] = useState<Seat[]>(initialSeats);
  const [selectedSeat, setSelectedSeat] = useState<string[]>([]);
  const [passengerInfo, setPassengerInfo] = useState<PassengerInfo[]>([]);

  const handleSeatClick = (seat: Seat) => {
    if (seat.isBooked) {
      alert("Seat already booked!");
      return;
    }
    if (selectedSeat.includes(seat.seatNumber)) {
      setSelectedSeat((prev) => prev.filter((p) => p !== seat.seatNumber));
      setPassengerInfo((prev) => prev.filter((p) => p.seatNumber !== seat.seatNumber));
    } else {
      setSelectedSeat((prev) => [...prev, seat.seatNumber]);
      setPassengerInfo((prev) => [...prev, { seatNumber: seat.seatNumber, name: "", age: 0 }]);
    }
  };

  const getBgClass = (seat: Seat) => {
    if (seat.isBooked) return "bg-red-400";
    if (selectedSeat.includes(seat.seatNumber)) return "bg-green-400";
    switch (seat.type) {
      case "VIP": return "bg-yellow-300";
      case "Regular": return "bg-blue-300";
      case "Economy": return "bg-gray-300";
      default: return "bg-slate-700";
    }
  };

  const totalPrice = seats
    .filter((seat) => selectedSeat.includes(seat.seatNumber))
    .reduce((sum, seat) => sum + seat.price, 0);

  const confirmBooking = () => {
    if (selectedSeat.length === 0) {
      alert("Please select a seat first.");
      return;
    }
    for (const info of passengerInfo) {
      if (!info.name.trim() || info.age <= 0) {
        alert(`Please enter valid details for seat ${info.seatNumber}`);
        return;
      }
    }
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        selectedSeat.includes(seat.seatNumber)
          ? { ...seat, isBooked: true }
          : seat
      )
    );
    alert(`Seats booked successfully: ${selectedSeat.join(", ")}`);
    setSelectedSeat([]);
    setPassengerInfo([]);
  };

  const handlePassengerChange = (seatNumber: string, field: "name" | "age", value: string) => {
    setPassengerInfo((prev) =>
      prev.map((p) =>
        p.seatNumber === seatNumber
          ? { ...p, [field]: field === "age" ? Number(value) : value }
          : p
      )
    );
  };

  return (
    <>
      <h2>Flight Seat Booking</h2>
      <SeatLegend />
      {
        console.log("debug_p" ,seats)
      }
      <SeatGrid
        seats={seats}
        selectedSeat={selectedSeat}
        onSeatClick={handleSeatClick}
        getBgClass={getBgClass}
      />
      <p className="mb-2">Total Seats Selected: {selectedSeat.length}</p>
      <p className="mb-2 text-lg font-medium">Total Price: ₹{totalPrice}</p>

      <PassengerForm
        selectedSeat={selectedSeat}
        passengerInfo={passengerInfo}
        onPassengerChange={handlePassengerChange}
      />

      <div className="space-x-2">
        <button
          onClick={confirmBooking}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
        >
          Confirm Booking
        </button>
        <button
          onClick={() => { setSelectedSeat([]); setPassengerInfo([]); }}
          className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded shadow"
        >
          Clear Selection
        </button>
      </div>

      {passengerInfo.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold">Passenger Summary:</h4>
          {passengerInfo.map((p) => (
            <p key={p.seatNumber}>
              Seat {p.seatNumber}: {p.name || "N/A"}, Age: {p.age || "N/A"}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default SeatBookingPage;