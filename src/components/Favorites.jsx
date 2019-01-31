import React, { Component } from "react";
import FavoriteItem from "./FavoriteItem";

export default class Favorites extends Component {
  state = {
    selected: this.props.favList[0] || null
  };
  changeSelected = el => {
    this.setState({ selected: el });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.props.favList[0])
      this.setState({ selected: this.props.favList[0] });
  }
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
        {this.props.favList.length > 0 ? (
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
                        onClick={() =>
                          this.props.removeFavorite(this.state.selected)
                        }
                        className="btn-floating btn-large waves-effect waves-light red right col 6"
                      >
                        <i className="material-icons">remove</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s6">
                        <p>
                          Ability-1{" "}
                          {this.state.selected.abilities[0].ability.name ||
                            "N/A"}
                        </p>
                        <p>
                          Ability-2{" "}
                          {this.state.selected.abilities[1].ability.name ||
                            "N/A"}
                        </p>
                        <p>
                          Base Experience{" "}
                          {this.state.selected.base_experience || "N/A"}
                        </p>
                      </div>
                      <div className="col s6">
                        <p>
                          Height {this.state.selected.height || "N/A"}
                          ft
                        </p>
                        <p>
                          Weight {this.state.selected.weight || "N/A"}
                          lbs
                        </p>
                        <p>
                          Type {this.state.selected.types[0].type.name || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>No Current Favorites</h1>
          </div>
        )}
      </div>
    );
  }
}
