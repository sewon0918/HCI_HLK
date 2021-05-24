import React from 'react';
import './index.css';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false, show2: false, paywith:'', price: this.props.total_price};
        this.card = this.card.bind(this);
        this.cash = this.card.bind(this);
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1000) 
     }
    
    card(){
        this.setState({paywith: '카드'});
    }

    cash(){
        this.setState({paywith: '현금'});
    }

    render(){
        const paywith = this.state.paywith;
        const price=this.state.price;
        let last = null;
        if (paywith !== ''){
            last = <div className = 'dialog'><h3>{paywith}(으)로 결제합니다.</h3></div>
        }
        return(
            <div className='finishing'>
                <div className="dialog_cart" >총 {price}원 입니다.</div>
                {this.state.show && <div id="pay" className = 'dialog_cart'>결제 방법을 선택해주세요.</div>}
                {this.state.show2 && <div className="dialog2_cart"><button className="button" onClick={this.card}>카드</button><button className="button" onClick={this.cash}>현금</button></div>}
                {last}
            </div>
        )
    }
}

export default Payment;