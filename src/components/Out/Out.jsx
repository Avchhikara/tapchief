import React from "react";

import "./out.style.css";

class Out extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length) {
      return (
        <div className="out">
          <h3>Search result:-</h3>
          {data.map((val, index) => (
            <p className="out-para" key={index}>
              {val}
            </p>
          ))}
        </div>
      );
    } else {
      return <div className="no-result">No value is found</div>;
    }
  }
}

export default Out;
