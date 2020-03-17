import React from "react";
import './Elem.sass';
import sym1 from '../../assets/Images/SYM1.png';
import sym3 from '../../assets/Images/SYM3.png';
import sym4 from '../../assets/Images/SYM4.png';
import sym5 from '../../assets/Images/SYM5.png';
import sym6 from '../../assets/Images/SYM6.png';
import sym7 from '../../assets/Images/SYM7.png';

class Elem extends React.Component{

  getImage() {
    let array = [sym1, sym3, sym4, sym5, sym6, sym7];
    return array[this.getInterval(0, 5)];
  }

  getInterval(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return(
      <div className="Elem">
        <div className="Elem__Img">
          {
            <img src={this.getImage()} alt={`Symbol ${this.getInterval(0,5)}`}/>
          }
        </div>
      </div>
    )
  }
}

export default Elem;
