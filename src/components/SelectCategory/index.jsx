import React from 'react';
import SelectMethod from '../SelectMethod';
import './index.css';
import Drink from '../Drink';
import Side from '../Side';
import 버거 from '../../images/burger.png';
import 음료 from '../../images/drink.png';
import 사이드 from '../../images/side.png';

class SelectCategory extends React.Component {
    constructor(props){
        super(props)
        this.state = {show: false, show2: false, select:0};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onBurger = this.onBurger.bind(this);
        this.onDrink = this.onDrink.bind(this);
        this.onSide = this.onSide.bind(this);
    }

    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1000) 
     }

     onBurger(){
         this.setState({select:1});
     }

     onDrink(){
         this.setState({select: 2});
     } 
 
     onSide(){
         this.setState({select: 3})
     }

    render(){
        let selection = null;
        if (this.state.select === 1){
            selection = <SelectMethod />
        } else if (this.state.select === 2){
            selection = <Drink />
        } else if(this.state.select === 3){
            selection = <Side />
        }
        return(
            <div>
                
                {this.state.show2 && <div className = 'dialog'>주문하실 카테고리를 선택해주세요.</div>}
                {this.state.show2 &&<div  className = 'dialog2'>
                    <button id="burger" className = 'button1' onClick={this.onBurger}><img id='burgerimg' src={ 버거 } /> <div>버거</div> </button>
                    <button id="drinkside" className = 'button1' onClick={this.onDrink}><img id='drinkimg' src={ 음료 } /> <div>음료</div> </button>
                    <button id="drinkside" className = 'button1' onClick={this.onSide}><img id='sideimg' src={ 사이드 } /> <div>사이드</div> </button>
                </div>}
                {selection}
            </div>
        )
    }
}

export default SelectCategory;