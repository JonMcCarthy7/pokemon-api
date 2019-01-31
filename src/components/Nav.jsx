import React from "react";

export default function Nav({ switchPage, searchPage, favCount }) {
  const badgeStyle = { float: "none", margin: "0px" };

  return (
    <div>
      <nav>
        <div className="nav-wrapper red accent-3">
          <div className="container">
            <span className="brand-logo">Poke-Search</span>
            <ul className="right hide-on-med-and-down">
              {searchPage ? (
                <li onClick={switchPage}>
                  <span>
                    Favorites
                    <span style={badgeStyle} className="badge">
                      {favCount()}
                    </span>
                  </span>
                </li>
              ) : (
                <li onClick={switchPage}>
                  <span>Search Pokemon</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
