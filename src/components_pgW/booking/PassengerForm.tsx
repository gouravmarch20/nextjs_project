import { PassengerInfo } from "./bookingType";

type PassengerFormProps = {
  selectedSeat: string[];
  passengerInfo: PassengerInfo[];
  onPassengerChange: (seatNumber: string, field: "name" | "age", value: string) => void;
};

const PassengerForm: React.FC<PassengerFormProps> = ({ selectedSeat, passengerInfo, onPassengerChange }) => {
  if (selectedSeat.length === 0)
    return <p className="text-gray-500 italic mb-4">Please select seats to enter passenger information.</p>;

  return (
    <>
      {selectedSeat.map((seatNum) => {
        const info = passengerInfo.find((p) => p.seatNumber === seatNum);

        return (
          <div key={seatNum} className="mb-2 border p-2 rounded shadow">
            <h4 className="font-semibold">Passenger for Seat {seatNum}</h4>
            <input
              type="text"
              placeholder="Name"
              value={info?.name || ""}
              onChange={(e) => onPassengerChange(seatNum, "name", e.target.value)}
              className="border p-1 mr-2"
            />
            <input
              type="number"
              placeholder="Age"
              value={info?.age || ""}
              onChange={(e) => onPassengerChange(seatNum, "age", e.target.value)}
              className="border p-1 w-20"
            />
          </div>
        );
      })}
    </>
  );
};

export default PassengerForm;