import React from 'react';
import './index.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.payment = this.payment.bind(this);
    }
    
    payment(){
        this.props.onCreate(true);
    }

    render(){
        return(
            <div id='container'>
                <button onClick={this.payment}>결제</button>
            </div>
        )
    }
}

export default Cart;