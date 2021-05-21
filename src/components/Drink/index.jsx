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
                {this.state.show && <div className = 'dialog' id='answer'><h3>음료</h3></div>}
                <br className='clear'/>
                <br className='clear'/>
                <br className='clear'/>
                <br className='clear'/>
                {this.state.show2 && <div className = 'dialog'><h3>원하시는 메뉴를 선택해주세요.</h3></div>}
                {this.state.show3 && showdrink}
            </div>
        )
    }
}

export default Drink;