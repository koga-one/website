import * as React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <h1 className="mt-32 mb-12 text-center font-garamond text-h2 font-black dark:text-kami tablet:mb-20 tablet:text-h1 desktop:my-28 desktop:text-d3">
        {title}
      </h1>
    </div>
  );
};

export default Header;
