import React, { Component } from "react";

export default class Pokemon extends Component {
  render() {
    const headerStyles = { paddingBottom: "0px", marginBottom: "0px" };
    return (
      <div className="row">
        {this.props.pokemon ? (
          <ul className="collection with-header">
            <li className="collection-header row" style={headerStyles}>
              <h3 className="col s3">{this.props.pokemon.name}</h3>
              <span className="col s3">
                <img
                  className="responsive-img"
                  src={this.props.pokemon.sprites.front_default}
                  alt="Pokemon"
                />
              </span>
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
          // <div
          //   className="col sm4"
          //   className="btn-floating btn-large waves-effect waves-light"
          //   style={{ width: "100px", height: "100px" }}
          // >
          //   <img
          //     className="left responsive-img"
          //     src={this.props.pokemon.sprites.front_default}
          //     alt="Pokemon"
          //   />
          // </div>
          ""
        )}
      </div>
    );
  }
}
