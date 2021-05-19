import React from 'react';
import './index.css';

import '../Recommendation'
import Recommendation from '../Recommendation';

class UserInformation extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {isLoggedIn: 0, phone: ""};
    }
    loginClick() {
        this.setState({isLoggedIn: true});
      }
    
    skipClick() {
        this.setState({isLoggedIn: false});
      }
      
    onSubmit(){
        const number = document.getElementById("number").value;
        console.log(number);
        this.setState({isLoggedIn: 1, phone: number}); 
        //setTimeout()
    }
    next(){
        document.getElementById("recommendMenu")
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        const phone = this.state.phone
        let recommend = null;
        if (isLoggedIn > 0) {
            recommend = <Recommendation phone={phone}></Recommendation>
        }
        if (isLoggedIn < 0) {
            recommend = <div>hihi</div>
        }
        return(
            <div>
                <div className = 'dialog'>Welcome to Hello Burger! </div>
                <div className = 'dialog'>Please type your number </div>
                <div> 
                    <input id = "number"/> 
                    <button onClick = {this.onSubmit}> Sumbit </button>
                    <button onClick = {this.onSubmit}> Skip </button>
                </div>
                {recommend}
            </div>
        )
    }
}

export default UserInformation;