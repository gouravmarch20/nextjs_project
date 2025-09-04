"use client";
import React, { useState } from "react";

const ReactForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    lastVisit: "",
    condition: "",
    gender: "male",
    dateOfVisit: "",
    watchMovie: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelect = (e) => {
    console.log("handleSelect", {
      val: e.target.value,
      name: e.target.name,
    });
    const value = e.target.value;
    let tempMovie = [...watchMovie];
    const isIncludes = watchMovie.include((m) => m == value);
    if (isIncludes) {
      tempMovie = tempMovie.filter((m) => m != value);
    } else {
      tempMovie = tempMovie;
    }
    

    // formValue.
  };
  // ! 👉 This is invalid because <input> must be written as a self-closing tag.
  return (
    <div>
      <div>
        <label htmlFor="name"> Name</label>

        <input
          name="name"
          value={formValue.name}
          id="name"
          type="text"
          placeholder="enter name"
          onChange={(e) => handleChange(e)}
          className="border "
        />
      </div>
      <div>
        <label htmlFor="age"> Age</label>

        <input
          name="age"
          type="number"
          value={formValue.age}
          id="age"
          placeholder="enter age"
          onChange={(e) => handleChange(e)}
          className="border "
        />
      </div>

      <div>
        <label htmlFor="condition"> </label>

        <textarea
          name="condition"
          value={formValue.condition}
          id="condition"
          placeholder="enter condition"
          onChange={(e) => handleChange(e)}
          className="border "
        />
      </div>

      <div>
        <label htmlFor="lastVisit"> </label>

        <input
          name="lastVisit"
          type="date"
          value={formValue.lastVisit}
          id="lastVisit"
          placeholder="enter lastVisit data"
          onChange={(e) => handleChange(e)}
          className="border "
        />
      </div>

      <div>
        Gender
        <label htmlFor="male">Male</label>
        <input
          id="male"
          name="gender"
          type="radio"
          value={"male"}
          onChange={(e) => handleChange(e)}
          checked={formValue.gender === "male"}    

        />
        <label htmlFor="male">Female</label>
        <input
          name="gender"
          value={"female"}
          type="radio"
          onChange={(e) => handleChange(e)}
          checked={formValue.gender === "female"}    

        />
      </div>
      <div>
        Day of visit
        <select
          value={formValue.dateOfVisit}
          onChange={(e) => handleChange(e)}
          name="dateOfVisit"
        >
          <option name="dateOfVisit" value={"today"}>
            Today
          </option>
          <option name="dateOfVisit" value={"yesterday"}>
            yesterday
          </option>
          <option name="dateOfVisit" value={"nextWeek"}>
            Next Week
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="haveSeen">Movie</label>
        <input
          type="checkbox"
          value={"i2"}
          name="watchMovie"
          onChange={(e) => handleSelect(e)}
        />
        <input
          type="checkbox"
          value={"vi"}
          name="watchMovie"
          onChange={(e) => handleSelect(e)}
        />
        <input
          type="checkbox"
          value={"aizen"}
          name="watchMovie"
          onChange={(e) => handleSelect(e)}
        />
      </div>
    </div>
  );
};

export default ReactForm;
