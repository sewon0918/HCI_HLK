import React from 'react';

class Drink extends React.Component {
    constructor(props){
        super(props);
        this.state = {show: false, show2: false};
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1000) 
    }

    render(){
        return(
            <div>
                {this.state.show && <div className = 'dialog'><h3>음료를 선택하셨습니다.</h3></div>}
                {this.state.show2 && <div className = 'dialog'><h3>원하시는 메뉴를 선택해주세요.</h3></div>}
                
            </div>
        )
    }
}

export default Drink;