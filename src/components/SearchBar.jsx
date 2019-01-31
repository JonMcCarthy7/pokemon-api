import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.term) this.props.searchForTerm(this.state.term);
  };
  render() {
    return (
      <div>
        <div className="row">
          <br />
          <form onSubmit={this.handleSubmit}>
            <div className="input-field col s10">
              <label htmlFor="term">Pokemon</label>
              <input type="text" id="term" onChange={this.handleChange} />
            </div>
            <div className="input-field col s2">
              <button className="btn blue">Search</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
