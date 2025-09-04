"use client";
import React, { useState, useRef, useEffect } from "react";
const SIZE = 6;

const OtpPage = () => {
  const [otpInput, setOtpInput] = useState<string[]>(
    Array.from({ length: SIZE })
  );
  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const handleFocus = (ind: number) => {
    const el = inputRefs.current?.[ind];
    el?.focus();
  };

  const focusNext = (ind: number) => {
    if (ind < SIZE - 1) handleFocus(ind + 1);
  };

  const focusPrev = (ind: number) => {
    if (ind > 0) handleFocus(ind - 1);
  };

  useEffect(() => {
    inputRefs.current?.[0]?.focus();
  }, []);
  return (
    <div>
      <h1>dsfa</h1>
      <div className="flex gap-2">
        {otpInput?.map((optI, ind) => (
          <div key={ind}>
            {" "}
            <input
              type="text"
              className={`h-20 w-20 rounded-2xl  border-2 border-amber-500  opt-input `}
              value={otpInput[ind]}
              onChange={(e) => {
                const val = e.target.value;

                const newOtp = [...otpInput];
                newOtp[ind] = val.slice(-1); // takes last char
                setOtpInput(newOtp);
                if (val) {
                  focusNext(ind);
                }
              }}
              ref={(el) => (inputRefs.current[ind] = el)}
              onKeyDown={(e) => {
                console.log("deub", e.key);
                if (e.key == "ArrowRight") {
                  handleFocus(ind);
                } else if (e.key == "ArrowLeft") {
                  focusPrev(ind);
                } else if (e.key === "Backspace" && !otpInput[ind]) {
                  focusPrev(ind);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtpPage;
