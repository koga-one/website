import * as React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <h1 className="text-center font-garamond text-2xl font-black">
        {title.toLowerCase()}
      </h1>
    </div>
  );
};

export default Header;
