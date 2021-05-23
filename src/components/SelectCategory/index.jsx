import React from 'react';
import SelectMethod from '../SelectMethod';
import DrinkOrSide from '../DrinkOrSide';
import './index.css';

class SelectCategory extends React.Component {
    constructor(props){
        super(props)
        this.state = {show: false, show2: false, select:0};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onBurger = this.onBurger.bind(this);
        this.onDrinkSide = this.onDrinkSide.bind(this);
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

     onDrinkSide(){
         this.setState({select:2});
     }

    render(){
        let selection = null;
        if (this.state.select === 1){
            selection = <SelectMethod />
        } else if(this.state.select === 2){
            selection = <DrinkOrSide />
        } 
        return(
            <div>
                {this.state.show && <div className = 'dialog'>어서오세요. 헬로버거입니다!</div>}
                {this.state.show2 && <div className = 'dialog'>주문하실 카테고리를 선택해주세요.</div>}
                {this.state.show2 &&<div  className = 'dialog2'>
                    <button id="burger" className = 'button' onClick={this.onBurger}> 버거 </button>
                    <button id="drinkside" className = 'button' onClick={this.onDrinkSide}> 음료/사이드 </button>
                </div>}
                {selection}
            </div>
        )
    }
}

export default SelectCategory;