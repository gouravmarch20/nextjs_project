import React, { useRef, useEffect } from "react";

const useOutsideClick = (cb: () => void) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
 
    const handleOutsideClick = (e: MouseEvent) => {
        console.log("deb_452" , e.target)
      if (
        elementRef.current &&
        !elementRef.current.contains(e.target as Node)
      ) {
        cb();
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [elementRef, cb]);

  return { elementRef };
};

export default useOutsideClick;
