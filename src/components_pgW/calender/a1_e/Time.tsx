"use client";
import React from "react";
 import TimeList from "./TimeList";
export default function Calender() {
  // !m1
  //   const time = new Array(24).fill(0).map((i, ind) => ind + 1);
  const time = Array.from({ length: 24 }, (_, ind) => ind );

  console.log("time", time);
  return (
    <>
     {
        time?.map((t : number) => <TimeList t={t} key={t}/>)
     }
    </>
  );
}
