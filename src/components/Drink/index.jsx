import React from 'react';
import './index.css';
import ShowDrinks from '../ShowDrinks';

class Drink extends React.Component {
    constructor(props){
        super(props);
        this.state = {show: false, show2: false, show3: false};
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1000)
        setTimeout(()=>{
            this.setState({show3: true})
        },1500)  
    }

    render(){
        let showdrink = <ShowDrinks />
        return(
            <div>
                {<div className = 'dialog' id='answer'>음료</div>}
                {this.state.show && <div className = 'dialog'>원하시는 음료 메뉴를 선택해주세요.</div>}
                {this.state.show2 && showdrink}
            </div>
        )
    }
}

export default Drink;