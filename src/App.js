import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserInformation from './components/UserInformation';
import Recommendation from './components/Recommendation'

import hamburger from './images/hamburger.png';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return ( 
            <div className = "App" >
                <div id = "logo">
                    <p className='text'><img id = "icon" src={ hamburger } />
                     Hello Burger!</p>
                </div>
                <div className = 'layout'>
                    <div className = "chatContainer">
                        <UserInformation  />
                        <Recommendation />
                    </div>
                    <div className = "cart">
                    Cart
                    </div>
                </div>
                Hello!
            </div>
            
        );
    }
    
}

export default App;