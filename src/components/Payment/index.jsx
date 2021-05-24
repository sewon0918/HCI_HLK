import React from 'react';
import './index.css';
import firebase from '../../Firebase';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false, show2: false, paywith:'', price: this.props.total_price};
        this.card = this.card.bind(this);
        this.cash = this.cash.bind(this);
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
        var price=0;
        let last = null;
        if (paywith === "카드") last = <div className = 'dialog'><h3>{paywith}로 결제합니다.</h3></div>
        if (paywith === "현금") last = <div className = 'dialog'><h3>{paywith}으로 결제합니다.</h3></div>

        let pricelist = null;
        firebase.database().ref('menu/').on('value', function(snapshot) {
  
            var myValue = snapshot.val();
            if (myValue!=null){
                var keyList = Object.keys(myValue)
            }
            if (keyList != null){
                pricelist = keyList.map((i) =>{
                    return (Number(myValue[i].price))
                });
            }
            for (var i = 0; i < pricelist.length; i++) {
                price += pricelist[i];
            }
        })
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