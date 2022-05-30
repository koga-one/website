import * as React from "react";

const MonthWrapper = ({ month, children }) => {
  return (
    <div className="k-wrapper flex grow flex-wrap gap-4">
      <p className="m-2 self-center font-garamond text-h3 font-black">
        {months[month - 1]}
      </p>
      {children}
    </div>
  );
};

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default MonthWrapper;
