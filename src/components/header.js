import * as React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <h1 className="mt-4 mb-8 text-center font-garamond text-h1 font-black text-katsu">
        {title.toLowerCase()}
      </h1>
    </div>
  );
};

export default Header;
