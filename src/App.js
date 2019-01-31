import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Pokemon from "./components/Pokemon";
import Nav from "./components/Nav";
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
    this.setState({ favorites: [pokemon, ...this.state.favorites] });
  };

  switchPage = () => {
    this.setState({ searchPage: !this.state.searchPage });
  };

  render() {
    return (
      <div>
        <Nav switchPage={this.switchPage} searchPage={this.state.searchPage} />
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
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default App;
