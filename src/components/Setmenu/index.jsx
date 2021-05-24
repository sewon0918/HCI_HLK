import React from 'react';
import './index.css';
import SetDrink from '../SetDrink';

class Setmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            set_price:this.props.set_price,
            name: this.props.name

        }
    }


    render(){
        console.log(this.state.name);
        let drinks=<SetDrink curr_price= {this.state.set_price} name={this.state.name}></SetDrink>
        return(
            <div>
                <div className='dialog'>세트 선택하셨습니다.</div>
                <div className='dialog'>음료 먼저 선택해주세요.</div>
                {drinks}
            </div>

        )
    }

}
export default Setmenu;