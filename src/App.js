import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Pokemon from "./components/Pokemon";
import Nav from "./components/Nav";
import Favorites from "./components/Favorites";
import axios from "./axios";

class App extends Component {
  state = {
    favorites: [],
    pokemon: null,
    searchPage: true
  };

  searchForTerm = async term => {
    try {
      let result = await axios.get(term);
      this.setState({ pokemon: result.data });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  addFavorite = pokemon => {
    if (this.state.favorites.indexOf(pokemon) < 0)
      this.setState({ favorites: [pokemon, ...this.state.favorites] });
  };

  removeFavorite = pokemon => {
    if (this.state.favorites.length === 1) this.setState({ favorites: [] });
    this.setState({
      favorites: this.state.favorites.filter(el => el.id !== pokemon.id)
    });
  };

  switchPage = () => {
    this.setState({ searchPage: !this.state.searchPage });
  };

  favCount = () => {
    return this.state.favorites.length;
  };

  render() {
    return (
      <div>
        <Nav
          switchPage={this.switchPage}
          searchPage={this.state.searchPage}
          favCount={this.favCount}
        />
        <div className="App container">
          {this.state.searchPage ? (
            <div>
              <SearchBar searchForTerm={this.searchForTerm} />
              <Pokemon
                pokemon={this.state.pokemon}
                addFavorite={this.addFavorite}
              />
            </div>
          ) : (
            <div>
              <Favorites
                favList={this.state.favorites}
                removeFavorite={this.removeFavorite}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
