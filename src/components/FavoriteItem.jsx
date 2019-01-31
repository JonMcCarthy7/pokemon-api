import React from "react";

export default function FavortieItem({ pokemon, changeSelected }) {
  const itemStyle = { padding: "0px" };
  return (
    <li
      className="collection-item valign-wrapper"
      style={itemStyle}
      onClick={() => changeSelected(pokemon)}
    >
      <img
        src={pokemon.sprites.front_default}
        alt="fav item"
        className="responsive-img"
      />
      <h5 className="title">
        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
      </h5>
    </li>
  );
}
