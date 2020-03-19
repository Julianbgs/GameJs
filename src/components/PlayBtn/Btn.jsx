import React, {Component}  from "react";
import './Btn.sass';
import btn from '../../assets/Images/BTN_Spin.png';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisable: false,
      grayScale: {filter: 'unset'},
    };
  };

  changeParams = () => {
    this.setState({
      isDisable: true,
      grayScale: {filter: 'grayscale(100%)'},
    });

    let waiting = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    waiting.then(() => {
      this.setState({
        isDisable: false,
        grayScale: {filter: 'unset'},
      })
    });

    this.props.refreshImage();
  };

  render() {
    return (
      <div className="Button">
        <button className="Button__Body" disabled={this.state.isDisable} onClick={this.changeParams}>
          <img src={btn} style={this.state.grayScale} alt="Begin play" />
        </button>
      </div>
    )
  }
}

export default Button;
