import React from "react";

import Search from "./components/SearchBar";
import Para from "./components/Paragraphs";
import Out from "./components/Out";

import indexed from "./utils/createIndexed";
import search from "./utils/search";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false,
      out: false,
      indexed: {},
      result: []
    };
  }

  onNext = data => {
    // this will create an indexed version and give us it in return
    const index = indexed(data);
    // console.log(index);
    this.setState({ next: true, indexed: index });
  };

  showOut = (term = "") => {
    this.setState({ out: true });
    // It also calls something to compile the output
    const result = search(term, this.state.indexed);
    this.setState({ result });
  };

  render() {
    return (
      <div className="App">
        {this.state.next && <Search out={this.showOut} />}
        {!this.state.next && <Para next={this.onNext} />}
        {this.state.out && <Out data={this.state.result} />}
      </div>
    );
  }
}

export default App;
