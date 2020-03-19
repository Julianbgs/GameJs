import React, {Component} from "react";import './Wrap.sass';import Elem from "../Elem/Elem";import Button from "../PlayBtn/Btn";import Infinite from "../Infinite/Infinite";import sym1 from "../../assets/Images/SYM1.png";import sym3 from "../../assets/Images/SYM3.png";import sym4 from "../../assets/Images/SYM4.png";import sym5 from "../../assets/Images/SYM5.png";import sym6 from "../../assets/Images/SYM6.png";import sym7 from "../../assets/Images/SYM7.png";import mix1 from "../../assets/Images/mix1.png";import mix2 from "../../assets/Images/mix2.png";import mix3 from "../../assets/Images/mix3.png";import Modal from "../winnerModal/Modal";class Wrapper extends Component {  constructor(props) {    super(props);    this.state = {      arrayImg: [sym1, sym3, sym4, sym5, sym6, sym7],      index: [null, null, null],      count: 0,      scrollElem: null,      hideElems: {},      arrayBg: [mix1, mix2, mix3],      showModal: false,      amount: 0    }  }  componentDidMount() {    this.getImage();  }  getImage = () => {    let idx1 = this.getInterval(0, 5);    let idx2 = this.getInterval(0, 5);    let idx3 = this.getInterval(0, 5);    this.setState({      index: [idx1, idx2, idx3]    });  };  refreshImage = () => {    this.animationProcessStart();    let idx1 = this.getInterval(0, 5);    let idx2 = this.getInterval(0, 5);    let idx3 = this.getInterval(0, 5);    this.setState((state) => ({      index: [idx1, idx2, idx3],      count: state.count + 1    }));    if(this.state.count === 4) {      this.winCombination();    }    this.animationProcessEnd();  };  winCombination = () => {    let win1, win2,win3;    let wait = new Promise((resolve, reject) => {      setTimeout(() => {        resolve();      }, 4000);    });    win1 = win2 = win3 = this.getInterval(0, 5);    this.setState(({      index: [win1, win2, win3],      count: 0,    }));    wait.then(() => {      this.setState((oldState) => ({        showModal: true,        amount: oldState.amount + 100      }));    });  };  closeModal = () => {    this.setState({      showModal: false    });  };  animationProcessStart = () => {    let startAnimate = new Promise((resolve, reject) => {      resolve();    });    startAnimate.then(() => {      let elem = [];      let options = {};      for (let i = 0; i < 3; i ++) {        options = {                    animation: `${i + 5}s scroll infinite linear`,                    backgroundImage: `url(${this.state.arrayBg[i]})`                  };        elem.push(          <div className="Box" key={this.getInterval(0, 10)}>            <Infinite options={options} />          </div>        )      }      this.setState((state) => ({          scrollElem: elem,          hideElems: {display: 'none'}        }));    });  };  animationProcessEnd = () => {    let endAnimate = new Promise((resolve, reject) => {     setTimeout(() => {       resolve();     },3000)   });   endAnimate.then(() => {     this.setState((state) => ({       scrollElem: state.scrollElem.splice(3, 0),       hideElems: {display: 'block'}     }));   });  };  getInterval = (min, max) => {    min = Math.ceil(min);    max = Math.floor(max);    return Math.floor(Math.random() * (max - min + 1)) + min;  };  renderScrollElem = (idx) =>  {    if(this.state.scrollElem !== null) {     return  this.state.scrollElem[idx]    }  };  getComponent = ()  => {    let elements = [];    for(let i = 0; i < 3; i++) {      elements.push(<div className="Wrapper__Elem" key={i}>        <Elem getImage={this.state.arrayImg[this.state.index[i]]} getInterval={this.getInterval} hide={this.state.hideElems} />          {            this.renderScrollElem(i)          }      </div>)    }    return elements;  };  render() {    return(      <div className="Wrapper">        <div className="Wrapper__Body">           { this.getComponent()}            <Button refreshImage={this.refreshImage} />        </div>        <div className="Wrapper__Account">          <div className="Wrapper__Info"> Amount:  {this.state.amount}</div>        </div>        <Modal show={this.state.showModal} hide={this.closeModal}/>      </div>    )  }}export default Wrapper;