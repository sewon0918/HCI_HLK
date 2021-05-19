import React from 'react';
import Drink from '../Drink';
import Side from '../Side';

class DrinkOrSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {choice: 0, show: false, show2: false};
        this.componentDidMount = this.componentDidMount.bind(this);
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

    onDrink(){
        this.setState({choice: 1});
    } 

    onSide(){
        this.setState({choice: 2})
    }
    render(){
        let chosen_category = null;
        if (this.state.choice === 1){
            chosen_category = <Drink />
        } else if(this.state.choice === 2){
            chosen_category = <Side />
        }
        return(
            <div>
                {this.state.show && <div className = 'dialog'><h3>음료/사이드를 선택하셨습니다.</h3></div>}
                {this.state.show2 && <div className = 'dialog'><h3>음료, 사이드 중 선택하실 것을 클릭해주세요.</h3></div>}
                {this.state.show2 && <div><button onClick={this.onDrink}>음료</button><button onClick={this.onSide}>사이드</button></div>}
                {chosen_category}
            </div>
        );
    }
}

export default DrinkOrSide;