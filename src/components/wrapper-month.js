import * as React from "react";

const MonthWrapper = ({ month, children }) => {
  return (
    <div className="flex grow flex-wrap gap-4 rounded-lg bg-katsu bg-opacity-5 px-4 py-8 desktop:p-8">
      <p className="m-2 self-center font-garamond text-h2 font-black">
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
