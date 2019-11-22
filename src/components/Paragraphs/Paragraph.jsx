import React from "react";

import Input from "./Input";

import "./para.style.css";

class Para extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      para: ""
    };
  }

  setPara = data => {
    this.setState({ para: data });
  };

  onNext = () => {
    if (this.state.para.length) this.props.next(this.state.para);
  };

  render() {
    return (
      <div className="para-input">
        <h3>Enter the doc to be indexed, then press next</h3>
        <Input set={this.setPara} autoFocus={true} />

        <input type="button" value="Next 👉" onClick={this.onNext} />
      </div>
    );
  }
}

export default Para;
