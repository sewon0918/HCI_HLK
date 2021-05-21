import React  from 'react';
import './App.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import UserInformation from './components/UserInformation';
import SelectMethod from './components/SelectMethod';

import hamburger from './images/hamburger.png';
import cart from './images/cart.png';
// import ScrollToBottom from 'react-scroll-to-bottom';
import Recommendation from './components/Recommendation';
import Cart from './components/Cart';
// import hamburger from './images/hamburger.png';
import Payment from './components/Payment';
import NameSearch from './components/NameSearch';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {paymessage: null};
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate = (paym) => {
        if (paym){
            this.setState({paymessage: <Payment />})
        }
    }

    render(){
        const paymessage = this.state.paymessage;
        return ( 
            <div className = "App" >
                <div id = "logo">
                    <div ><img id = "icon" src={ hamburger } alt="icon"/></div>
                    <div className='text'>Hello Burger!</div>
                </div>
                <div className = 'layout'>
                    <ScrollToBottom className = "chatContainer">
                        <SelectMethod />
                        {/* <UserInformation  /> */}
                    </ScrollToBottom>
                    <div className = "cartContainer" id='cartContainer'>
                        <div id='cart'>
                            <div ><img id = "icon" src={ cart } alt="icon"/></div>
                            <div className='text'>Cart</div>
                        </div>
                        {paymessage}
                    {/* <div className = "cart">
                        <Cart onCreate={this.handleCreate}/>
                    </div> */}
                </div>
            </div>
            </div>
        );
    }
}

export default App;