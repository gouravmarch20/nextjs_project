import { Seat } from "./bookingType";

type SeatGridProps = {
  seats: Seat[];
  selectedSeat: string[];
  onSeatClick: (seat: Seat) => void;
  getBgClass: (seat: Seat) => string;
};

const SeatGrid: React.FC<SeatGridProps> = ({
  seats,
  selectedSeat,
  onSeatClick,
  getBgClass,
}) => (
  <div className="grid grid-cols-6 gap-2 mb-4">
    {seats.map((seat) => (
      <button
        key={seat.seatNumber}
        onClick={() => onSeatClick(seat)}
        disabled={seat.isBooked}
        className={`w-[60px] h-[60px] border-2 border-amber-800 ${getBgClass(
          seat
        )} ${
          seat.isBooked
            ? "opacity-50 cursor-not-allowed"
            : "hover:scale-105 transition"
        }`}
      >
        {seat.seatNumber}
        <br />₹{seat.price}
      </button>
    ))}
  </div>
);

export default SeatGrid;
