import React from "react";

class Para extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: ""
    };
  }

  onInput = event => {
    // console.log(event.target.value);
    this.props.set(event.target.value);
  };

  render() {
    return (
      <div>
        <textarea
          name="para"
          id="para"
          cols="30"
          rows="10"
          onChange={this.onInput}
        ></textarea>
      </div>
    );
  }
}

export default Para;
