import React from 'react';
import './index.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.payment = this.payment.bind(this);
        this.state = {payclick:false}
    }
    
    payment(){
        this.props.onCreate(true);
        this.setState({payclick:true})
    }

    render(){
        return(
            <>
            {!this.state.payclick && <div id='container'>
                <button onClick={this.payment} id="select">결제하기</button>
            </div>}
            </>
        )
    }
}

export default Cart;