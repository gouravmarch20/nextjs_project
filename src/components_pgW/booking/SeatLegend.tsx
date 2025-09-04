const SeatLegend = () => (
  <div className="flex gap-4 mb-4 text-sm">
    {[
      { color: "yellow-200", border: "yellow-500", label: "VIP" },
      { color: "blue-200", border: "blue-500", label: "Regular" },
      { color: "gray-200", border: "gray-500", label: "Economy" },
      { color: "green-400", border: "green-700", label: "Selected" },
      { color: "red-500", border: "red-500", label: "Booked" },
    ].map((item) => (
      <div key={item.label} className="flex items-center gap-1">
        <div
          className={`w-5 h-5 bg-${item.color} border border-${item.border}`}
        ></div>
        {item.label}
      </div>
    ))}
  </div>
);

export default SeatLegend;
