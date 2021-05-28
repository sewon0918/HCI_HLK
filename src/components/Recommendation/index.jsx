import React from 'react';
import './index.css';

import DrinkOrSide from '../DrinkOrSide';
import '.'
import '../OptionChange'
import '../../App'
import ShowBurgers from '../ShowBurgers';
import firebase from '../../Firebase';

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSkip = this.onSkip.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {isLoggedIn: 0, phone: "", show: false, show2: false, dbExist: false};
    }
    componentDidMount(){
        console.log("component");
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1000) 
     }

      
    onSubmit(){
        const number = document.getElementById("number").value;
        console.log(number);
        if (number !== "")
        // this.setState({isLoggedIn: 1, phone: number, recommend: true}); 
    


        firebase.database().ref('recommendation/').on('value', (snapshot)=>{
            var myValue = snapshot.val();
            if (myValue!=null){
                var keyList = Object.keys(myValue);
                var index = keyList.indexOf(number);
                console.log(index);
                console.log(myValue[keyList[index]]);
                if(index < 0){
                    this.setState({isLoggedIn: 1, phone: number, recommend: true, dbExist: false}); 
                }else{
                    this.setState({isLoggedIn: 1, phone: number, recommend: true, dbExist: true, recommendMenu: myValue[keyList[index]]}); 
                }
            }
        })
    }
    onSkip(){
        this.setState({isLoggedIn: -1, phone: '-1'}); 
    }
    next(){
        document.getElementById("recommendMenu")
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        const dbExist = this.state.dbExist;
        //const phone = this.state.phone
        let recommend = null;
        //let option=null;
        if (isLoggedIn > 0) {
            if (dbExist){
                recommend = <ShowBurgers recommend={this.state.recommend} dbExist = {this.state.dbExist} recommendMenu = {this.state.recommendMenu} phone = {this.state.phone}></ShowBurgers>
            }else{
                console.log("없어없다고", this.state.dbExist);
                recommend = <ShowBurgers recommend={this.state.recommend} dbExist = {this.state.dbExist} phone = {this.state.phone}></ShowBurgers>
            }
            
        }
        if (isLoggedIn < 0) {
            recommend = <div>hihi</div>
        }


        return(

            <div>
                {this.state.show && <div className = 'dialog' id='answer'>추천받기 </div>}
                {this.state.show2 && <div className = 'dialog'>전화번호를 입력하고 확인을 눌러주세요.</div>}
                {this.state.show2 &&<div id = 'short2'> 
                    <input className = 'input' id = "number"/> 
                    <button id='okay' className = 'button' onClick = {this.onSubmit}> 확인 </button>
                    {/* <button className = 'button' onClick = {this.onSkip}> Skip </button> */}
                </div>}
                
                <div>
                    {/* <button onClick = {this.onSubmit}> Sumbit </button>
                    <button onClick = {this.onSkip}> Skip </button>
                    <br/>
                    <button onClick = {this.onDrinkOrSide}>음료/사이드</button> 음료 부분 */}
                </div>
                {recommend}
                {/* <ShowBurgers recommend={this.state.recommend} phone = {this.state.phone}></ShowBurgers> */}
            </div>
        )
    }
}

export default Recommendation;