import * as React from "react";

const PageWrapper = ({ children }) => {
  return <div className="mx-auto grid gap-1 tablet:w-[75ch]">{children}</div>;
};

export default PageWrapper;
