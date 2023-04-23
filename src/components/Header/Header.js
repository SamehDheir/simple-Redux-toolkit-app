import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  const { name } = useSelector((state) => state.user);
  return (
    <div className="header">
      <h1>Sameh</h1>
      <p>Hello {name}</p>
    </div>
  );
}

export default Header;
