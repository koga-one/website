import * as React from "react";

const YearWrapper = ({ year, children }) => {
  return (
    <div className="k-wrapper flex flex-wrap gap-4">
      <p className="m-4 self-center font-garamond text-h1 font-black">{year}</p>
      {children}
    </div>
  );
};

export default YearWrapper;
