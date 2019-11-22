import React from "react";

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  searchTerm = () => {
    if (this.state.term) this.props.out();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="term"
          id="term"
          onChange={e => this.setState({ term: e.target.value })}
        />
        <input type="button" value="Search" onClick={this.searchTerm} />
      </div>
    );
  }
}

export default Bar;
