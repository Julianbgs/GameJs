import React from "react";
import './Wrap.sass';
import Elem from "../Elem/Elem";

class Wrapper extends React.Component{

  getComponent() {
    let elements = [];
    for(let i = 0; i < 3; i++) {
      elements.push(<div className="Wrapper__Elem" key={i}>
        <Elem />
      </div>)
    }
    return elements;
  }

  render() {
    return(
      <div className="Wrapper">
        { this.getComponent() }
      </div>
    )
  }
}

export default Wrapper;
