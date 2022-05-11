import * as React from "react";

const YearWrapper = ({ year, children }) => {
  return (
    <div className="flex flex-wrap gap-4 rounded-lg bg-katsu bg-opacity-5 px-4 py-8 desktop:p-8">
      <p className="m-4 self-center font-garamond text-h1 font-black">{year}</p>
      {children}
    </div>
  );
};

export default YearWrapper;
