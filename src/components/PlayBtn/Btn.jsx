import React from "react";
import './Btn.sass';
import btn from '../../assets/Images/BTN_Spin.png';

class Button extends React.Component {

  reloadImages() {

  }

  render() {
    return (
      <div className="Button">
          <img src={btn} alt="Begin play" onClick={this.props.refreshImage}/>
      </div>
    )
  }
}

export default Button;
