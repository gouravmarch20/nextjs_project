import React from "react";
type accordianType = {
  description: string;
};
const AccordianItem: React.FC<accordianType> = ({ description }) => {
  return (
    <>
      <div className="bg-amber-400">{description}</div>
    </>
  );
};
export default AccordianItem;
