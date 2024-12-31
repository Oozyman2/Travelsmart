import React from "react";

const Header = ({ onSearch }) => (
  <header className="bg-primary text-white p-3">
    <div className="container">
      <h1 className="text-center">Travel Smart</h1>
      <input
        type="text"
        placeholder="Search..."
        className="form-control mt-3"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
    <button type="submit" onClick={onSearch}>
      Search
    </button>
  </header>
);

export default Header;
