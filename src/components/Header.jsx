import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Steve's Awesome News</h1>
      </Link>
      <p>Your daily dose of awesome news!</p>
    </header>
  );
};

export default Header;
