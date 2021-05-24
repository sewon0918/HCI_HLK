import React  from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ScrollToBottom from 'react-scroll-to-bottom';

import hamburgerIcon from './images/hamburger.png';
import cartIcon from './images/cart.png';
import Payment from './components/Payment';
import SelectCategory from './components/SelectCategory';

import Menu from './components/Menu';
import Cart from './components/Cart';
import firebase from "./Firebase";



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
        firebase.database().ref('/menu/').remove();
        const paymessage = this.state.paymessage;
        const {menu} = this.props;
        const {price} = this.props;
        const {number} = this.props;
        let add = null;
        if (menu !== null && menu !== undefined){
            add = <Menu menu={menu} price = {price} number={number}/>
        }

        return ( 
            <div className = "App" >
                <div id = "logo">
                    <div ><img id = "icon" src={ hamburgerIcon } alt="icon"/></div>
                    <div className='text'>헬로 버거!</div>
                </div>
                <div className = 'layout'>
                    <ScrollToBottom className = "chatContainer">
                        <SelectCategory />
                    </ScrollToBottom>
                    <div className = "cartContainer" id='cartContainer'>
                        
                            <div id='cart'>
                                <div ><img id = "icon" src={ cartIcon } alt="icon"/></div>
                                <div className='text'>장바구니</div>
                                
                            </div>
                           
                            {paymessage}
                    <div >
                        <Cart onCreate={this.handleCreate}/>
                    </div> 
                </div>
            </div>
            </div>
        );
    }
}

export default App;