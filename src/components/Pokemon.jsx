import React, { Component } from "react";

export default class Pokemon extends Component {
  render() {
    const headerStyles = { paddingBottom: "0px", marginBottom: "0px" };
    return (
      <div className="row">
        {this.props.pokemon ? (
          <ul className="collection with-header">
            <li className="collection-header row" style={headerStyles}>
              <span className="col s2">
                <img
                  className="responsive-img"
                  src={this.props.pokemon.sprites.front_default}
                  alt="Pokemon"
                />
              </span>
              <h3 className="col s4">
                {this.props.pokemon.name[0].toUpperCase() +
                  this.props.pokemon.name.slice(1)}
              </h3>
              <span className="col s6">
                <span
                  onClick={() => this.props.addFavorite(this.props.pokemon)}
                  className="btn-floating btn-large waves-effect waves-light red right "
                >
                  <i className="material-icons">add</i>
                </span>
              </span>
            </li>
            <li className="collection-item">
              <h5> Base Experinece: {this.props.pokemon.base_experience}</h5>
            </li>
            <li className="collection-item">
              <h5> Ability: {this.props.pokemon.abilities[0].ability.name}</h5>
            </li>
            <li className="collection-item">
              <h5>Weight: {this.props.pokemon.weight} lbs</h5>
            </li>
          </ul>
        ) : (
          <div className="center-align">
            <h1 className="red-text accent-3">
              Look up any pokemon by Name or ID number! (1-800)
            </h1>
          </div>
        )}
      </div>
    );
  }
}
