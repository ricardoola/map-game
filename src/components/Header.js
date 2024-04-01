import React from "react";

const Header = ({ header }) => {
  return (
    <header className="w-full h-12 border-b-2 border-b-border_blue font-bold">
      <h1 className="ml-4 text-3xl">{header}</h1>
    </header>
  );
};

export default Header;
