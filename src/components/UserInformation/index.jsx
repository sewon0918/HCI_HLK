import React from 'react';
import './index.css';

import '../Recommendation'
import '../OptionChange'
import Recommendation from '../Recommendation';
import OptionChange from '../OptionChange';

class UserInformation extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSkip = this.onSkip.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.componentDidMount2 = this.componentDidMount2.bind(this);
        this.state = {isLoggedIn: 0, phone: "", show: false, show2: false};
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },1000)
        setTimeout(()=>{
            this.setState({show2: true})
        },3000) 
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
    }
    onSkip(){
        this.setState({isLoggedIn: -1, phone: '-1'}); 
    }
    next(){
        document.getElementById("recommendMenu")
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        const phone = this.state.phone
        let recommend = null;
        let option=null;
        if (isLoggedIn > 0) {
            recommend = <Recommendation phone={phone}></Recommendation>
        }
        if (isLoggedIn < 0) {
            recommend = <div>hihi</div>
        }
        /*if(BurgerSelected>0){
            let option=<OptionChange></OptionChange>
        }*/

        option=<OptionChange></OptionChange>
        return(
            <div>
                {this.state.show && <div className = 'dialog'><h3>Welcome to Hello Burger!</h3></div>}
                {this.state.show2 && <div className = 'dialog'><h3>Please type your number</h3></div>}
                <div> 
                    <input id = "number"/> 
                    <button onClick = {this.onSubmit}> Sumbit </button>
                    <button onClick = {this.onSkip}> Skip </button>
                </div>
                {recommend}
                {option}
            </div>
        )
    }
}

export default UserInformation;