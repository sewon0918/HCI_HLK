import React  from 'react';
import './App.css';

import UserInformation from './components/UserInformation';
import SelectMethod from './components/SelectMethod';

import hamburger from './images/hamburger.png';
import cart from './images/cart.png';
import ScrollToBottom from 'react-scroll-to-bottom';

class App extends React.Component {

    render(){
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
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default App;