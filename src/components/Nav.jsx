import React from "react";

export default function Nav({ switchPage, searchPage }) {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <span className="brand-logo">Pokemon</span>
            <ul className="right hide-on-med-and-down">
              {searchPage ? (
                <li onClick={switchPage}>
                  <div>Favorites</div>
                </li>
              ) : (
                <li onClick={switchPage}>
                  <div>Search Pokemon</div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
