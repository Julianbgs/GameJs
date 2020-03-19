import React, {Component} from "react";
import './Infinite.sass';

class Infinite extends Component{
  render() {
    return(
      <div className="Infinite" style={this.props.options} />
    )
  }
}

export default Infinite;
