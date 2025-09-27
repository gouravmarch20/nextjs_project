import React, { useState, useEffect, useRef } from "react";
import { fruits } from "./fruitsConstant";
function App() {
  const [selectedFruit, setSelectedFruit] = useState([]);
  console.log("dfsselectedFruit", selectedFruit);
  // m3 :: naming overlap
  const [fruitsS, setFruitsS] = useState(fruits); // avoid render
  const handleCheck = (e, id) => {
    const { name, value, checked } = e.target;

    console.log("d415", name, checked, value == "false");

    if (checked) {
      console.log("d45", name, value);

      setSelectedFruit((prev) => [...prev, id]);
    } else {
      setSelectedFruit((prev) => prev.filter((f) => f !== id));
    }
  };
  const allSelected = selectedFruit.length === fruits.length;

  const isChecked = (id) => {
    const r = selectedFruit.includes(id) == true;

    return r;
  };
  const handleSelectAll = (e) => {
    const { name, value, checked } = e.target;
    console.log("debug", name, value, value == "false");
    if (checked) {
      setSelectedFruit(fruitsS.map((f) => f.id));
    } else {
      setSelectedFruit([]);
    }
  };
  return (
    <main className="flex flex-col">
      <div>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={(e) => handleSelectAll(e)}
        />
      </div>
      {fruitsS?.map((fruit) => (
        <div key={fruit.id}>
          <label htmlFor={`fruit-${fruit.id}`}> {fruit.name}</label>
          <input
            className="border"
            id={`fruit-${fruit.id}`}
            checked={isChecked(fruit.id)}
            onChange={(e) => handleCheck(e, fruit.id)}
            type="checkbox"
          />{" "}
        </div>
      ))}
    </main>
  );
}

export default App;
