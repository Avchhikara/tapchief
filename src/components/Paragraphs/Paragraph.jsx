import React from "react";

import Input from "./Input";

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
    this.props.next(this.state.para);
  };

  render() {
    return (
      <React.Fragment>
        <Input set={this.setPara} />

        <input type="button" value="Next 👉" onClick={this.onNext} />
      </React.Fragment>
    );
  }
}

export default Para;
