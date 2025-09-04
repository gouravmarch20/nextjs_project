"use client";
import React, { useState, useRef, useEffect } from "react";

const SIZE = 6;

const OtpPage = () => {
  const [otpInput, setOtpInput] = useState<string[]>(
    Array.from({ length: SIZE }, () => "")
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFocus = (ind: number) => {
    const el = inputRefs.current[ind];
    el?.focus();
  };

  const focusNext = (ind: number) => {
    if (ind < SIZE - 1) handleFocus(ind + 1);
  };

  const focusPrev = (ind: number) => {
    if (ind > 0) handleFocus(ind - 1);
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div>
      <h1>dsfa</h1>
      <div className="flex gap-2">
        {otpInput.map((val, ind) => (
          <div key={ind}>
            <input
              type="text"
              maxLength={1}
              className="h-20 w-20 rounded-2xl border-2 border-amber-500 opt-input text-center text-2xl"
              value={val}
              onChange={(e) => {
                const inputVal = e.target.value;
                const newOtp = [...otpInput];
                newOtp[ind] = inputVal.slice(-1); // only last char
                setOtpInput(newOtp);
                if (inputVal) focusNext(ind);
              }}
              ref={(el) => {
                inputRefs.current[ind] = el;
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  focusNext(ind);
                } else if (e.key === "ArrowLeft") {
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