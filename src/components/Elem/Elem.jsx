import React, {Component} from "react";
import './Elem.sass';

class Elem extends Component {

  render() {
    return(
      <div className="Elem" style={this.props.hide}>
        <div className="Elem__Img">
          {
            <img src={this.props.getImage} alt={`Symbol ${this.props.getInterval(0,5)}`}/>
          }
        </div>
      </div>
    )
  }
}

export default Elem;
