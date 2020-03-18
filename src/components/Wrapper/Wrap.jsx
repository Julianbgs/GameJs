import React from "react";
import './Wrap.sass';

import Elem from "../Elem/Elem";
import Button from "../PlayBtn/Btn";

import sym1 from "../../assets/Images/SYM1.png";
import sym3 from "../../assets/Images/SYM3.png";
import sym4 from "../../assets/Images/SYM4.png";
import sym5 from "../../assets/Images/SYM5.png";
import sym6 from "../../assets/Images/SYM6.png";
import sym7 from "../../assets/Images/SYM7.png";
import Infinite from "../ScrollBg/Infinite";

class Wrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      array: [sym1, sym3, sym4, sym5, sym6, sym7],
      index: [null, null, null],
      count: 0,
    }
  }

  componentDidMount() {
    this.refreshImage();
  }

  refreshImage = () => {
    this.animationProcessStart();
    let idx1 = this.getInterval(0, 5);
    let idx2 = this.getInterval(0, 5);
    let idx3 = this.getInterval(0, 5);

    this.setState((state) => ({
      index: [idx1, idx2, idx3],
      count: state.count + 1
    }));

    if(this.state.count === 4) {
      this.winCombination();
    }
    this.animationProcessEnd();
  };

  winCombination = () => {
    let win1, win2,win3;
    win1 = win2 = win3 = this.getInterval(0, 5);
    this.setState((state) => ({
      index: [win1, win2, win3],
      count: 0,
      scrollElem: null
    }));
  };

  animationProcessStart = () => {

    let startAnimate = new Promise((resolve, reject) => {
      resolve();
    });
    startAnimate.then(() => {
      let elem = [];
      elem.push(
        <div className="Box" key={this.getInterval(0, 10)}>
          <Infinite />
        </div>
      )

      this.setState((state) => ({
          scrollElem: elem
        }));
    });
  };
  animationProcessEnd = () => {
    let endAnimate = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve();
     },3000)
   });

   endAnimate.then(() => {
     this.setState((state) => ({
       scrollElem: state.scrollElem.splice(2, 0)
     }));
   });
  };

  getInterval = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  getComponent = ()  => {
    let elements = [];
    let scrollElem = this.state.scrollElem;
    for(let i = 0; i < 3; i++) {
      elements.push(<div className="Wrapper__Elem" key={i}>
        <Elem getImage={this.state.array[this.state.index[i]]} getInterval={this.getInterval} />
        {scrollElem}
      </div>)
    }
    return elements;
  };

  render() {
    return(
      <div className="Wrapper">
        { this.getComponent()}
        <Button refreshImage={this.refreshImage} />
      </div>
    )
  }
}

export default Wrapper;
