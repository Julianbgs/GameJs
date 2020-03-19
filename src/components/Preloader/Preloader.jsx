import React, {Component} from "react";
import './Preloader.sass';

class Preoader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hideLoader: {display: 'block'}
    }
  }

  componentDidMount() {
    let fade = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })

    fade.then(() => {
      this.setState({
        hideLoader: {display: 'none'}
      })
    })
  }

  render() {
    const { hideLoader } = this.state;
    return(
      <div className="Preloader" style={hideLoader}>
        <div className="Preloader__Body" />
      </div>
    )
  }
}
export default Preoader;
