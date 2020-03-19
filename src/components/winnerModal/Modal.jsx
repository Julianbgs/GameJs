import React, {Component} from "react";
import './Modal.sass';

class Modal extends Component {
  render() {
    if(!this.props.show){
      return null
    }
    return(
      <div className="Modal">
        <div className="Modal__Overlay" onClick={this.props.hide} />
        <div className="Modal__Body">
            <div className="Modal__Close" onClick={this.props.hide} />
            <h3 className="Modal__Title"> You are win the game!</h3>
            <p className="Modal__Descr">We add 100 coins to your account</p>
        </div>
      </div>
    )
  }
}

export default Modal;
