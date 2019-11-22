import React from "react";

import "./search.style.css";

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  searchTerm = () => {
    if (this.state.term) this.props.out(this.state.term);
  };

  render() {
    return (
      <div className="search-input">
        <h4>Now, search for the data 👇</h4>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="term"
            id="term"
            onChange={e => this.setState({ term: e.target.value })}
            autoFocus={true}
          />
          <input
            type="submit"
            value="Search"
            onClick={this.searchTerm}
            id="search"
          />
        </form>
      </div>
    );
  }
}

export default Bar;
