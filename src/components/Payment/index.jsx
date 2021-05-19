import React from 'react';
import './index.css';
import App from '../../App';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false, show2: false};
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },1000)
        setTimeout(()=>{
            this.setState({show2: true})
        },3000) 
     }

    render(){
        return(
            <div>
                {this.state.show && <div className = 'dialog'><h3>결제 방법을 선택해주세요.</h3></div>}
                {this.state.show2 && <div><button>카드</button><button>현금</button></div>}
            </div>
        )
    }
}

export default Payment;