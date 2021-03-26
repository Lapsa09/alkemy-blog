import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/create">
          New Post
        </Link>
      </div>
    </>
  );
}

export default Header;
