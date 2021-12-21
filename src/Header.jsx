import React from "react";
import "./Header.css";

function Header({ view, setView }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Cal</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
        </ul>
      </nav>
      <button className="view-toggler" onClick={() => setView(!view)}>
        View
      </button>
    </header>
  );
}

export default Header;
