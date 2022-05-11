import * as React from "react";

const GridWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-stretch gap-4 text-katsu">
      {children}
    </div>
  );
};

export default GridWrapper;
