import React, { Component } from "react";
import FavoriteItem from "./FavoriteItem";

export default class Favorites extends Component {
  state = {
    selected: this.props.favList[0] || null
  };
  changeSelected = el => {
    this.setState({ selected: el });
  };
  render() {
    const items = this.props.favList.map(el => {
      return (
        <FavoriteItem
          pokemon={el}
          key={el.id}
          changeSelected={this.changeSelected}
        />
      );
    });
    return (
      <div>
        <div className="row">
          <h3>Your Current Favorites</h3>
        </div>
        <div className="row">
          <div className="col s4 fav-list">
            <ul className="collection pokemon-collection">{items}</ul>
          </div>
          <div className="col s8">
            <div className="card grey darken-1">
              <div className="card-content white-text">
                <div className="row">
                  <div className="card-title col 6">
                    {this.state.selected.name[0].toUpperCase() +
                      this.state.selected.name.slice(1)}
                  </div>
                  <div
                    onClick={() => this.props.addFavorite(this.props.pokemon)}
                    className="btn-floating btn-large waves-effect waves-light red right col 6"
                  >
                    <i className="material-icons">remove</i>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <p>
                      Ability-1 {this.state.selected.abilities[0].ability.name}
                    </p>
                    <p>
                      Ability-2 {this.state.selected.abilities[1].ability.name}
                    </p>
                    <p>Base Experience {this.state.selected.base_experience}</p>
                  </div>
                  <div className="col s6">
                    <p>
                      Height {this.state.selected.height}
                      ft
                    </p>
                    <p>
                      Weight {this.state.selected.weight}
                      lbs
                    </p>
                    <p>Type {this.state.selected.types[0].type.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
