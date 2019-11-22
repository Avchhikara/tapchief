import React from "react";

import Search from "./components/SearchBar";
import Para from "./components/Paragraphs";

import indexed from "./utils/createIndexed";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false,
      out: false
    };
  }

  onNext = data => {
    // this will create an indexed version and give us it in return
    const index = indexed(data);
    console.log(index);
    // this.setState({ next: true });
  };

  showOut = () => {
    this.setState({ out: true });
    // It also calls something to compile the output
    console.log("show out");
  };

  render() {
    return (
      <div className="App">
        {this.state.next && <Search out={this.showOut} />}
        {!this.state.next && <Para next={this.onNext} />}
        {this.state.out && <div>Something to show on out</div>}
      </div>
    );
  }
}

export default App;
