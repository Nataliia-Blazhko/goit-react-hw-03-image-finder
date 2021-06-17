import { Component } from "react";

export class Searchbar extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={(e)=>{
          e.preventDefault()
          this.props.searchQuery(this.state.value)
        }
          }>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={
              (e)=>{
                this.setState({value:e.target.value})
              }
            }
            value={this.state.value}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
