import { Component } from "react";

export class Searchbar extends Component {
  state = {
    value: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  changeHendler = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.submitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.changeHendler}
            value={this.state.value}
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
