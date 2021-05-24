import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Menu from '../Menu';
import Menu_set from '../Menu_set';
import App from '../../App';
import aaa from '../../images/1.png'
import cartIcon from '../../images/cart.png';
import cartData from '../../Data/cart.json';
import firebase from '../../Firebase';
import SelectCategory from '../SelectCategory'

  // Initialize Firebase

class HowMany extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:false, show2: false, show3: false, number: 1, finish: false, cart:cartData, id:-1, quantity:0, showNext: false};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.pass = this.pass.bind(this);
        this.block = this.block.bind(this);
        // this.getQuantity = this.getQuantity.bind(this);
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1000) 
        setTimeout(()=>{
            this.setState({show3: true})
        },1500) 
    }

    plus(){
        const changed = this.state.number + 1;
        this.setState({number: changed});
    }

    minus(){
        if (this.state.number > 1){
            const changed = this.state.number - 1;
            this.setState({number: changed});
        }
    }

    pass(){
        this.setState({finish: true, showNext: true});
        firebase.database().ref('menu/').on('value', (snapshot)=>{
            var myValue = snapshot.val();
            if (myValue!=null){
                var keyList = Object.keys(myValue)
                var num = keyList.length;
                console.log(num)
                this.setState({quantity:num});
            }
        })
    }

    block(){
        this.setState({finish: false});
    }


    render(){

        const {menu} = this.props;
        const {price} = this.props;
        const {drinkOrSide} = this.props;
        const {drink} = this.props;
        const {side} = this.props;
        const number = this.state.number;
        let cartlist = null;
        let goback = <SelectCategory />;
        console.log(goback);
        if (this.state.finish){

            var q = this.state.quantity;
            console.log("finish!!!", q);

            var entry = null;
            if (drinkOrSide === "set") {
                console.log(`burger ${menu} drink ${drink} side ${side}`)
                entry = {name: menu, price: price, category: drinkOrSide, drink: drink, side: side};
            }
            else entry = {name: menu, price: price, category: drinkOrSide};
            firebase.database().ref('menu/'+q).set(entry);
            firebase.database().ref('menu/').on('value', function(snapshot) {
      
                var myValue = snapshot.val();
                console.log("장바구니", myValue);
                if (myValue!=null){
                    var keyList = Object.keys(myValue)
                }
                console.log("키",keyList);
                if (keyList != null){
                    cartlist = keyList.map((i) =>{
                        console.log("index",i);
                        if (myValue[i].category === "set") {
                            return (<Menu_set menu={myValue[i].name} price={myValue[i].price} drink={myValue[i].drink} side={myValue[i].side}/>)
                        }
                        return (
                            <Menu menu = {myValue[i].name} price = {myValue[i].price} drinkOrSide = {myValue[i].category}/>);
                    });
                    
                    const cart = document.getElementById('cartContent');
                    ReactDOM.render(cartlist, cart);
                } 
            })
            
            goback = <SelectCategory />;
            console.log("goback: ", goback);
            this.block();
        }
        var choice_dialog = <div className='dialog_long'>{menu}를 선택하셨습니다.</div>
        if (drinkOrSide === "set") choice_dialog = <div className='dialog_long'>{menu}, {drink}, {side} 세트를 선택하셨습니다.</div>
        return(
            <div>
                {this.state.show && choice_dialog}
                {this.state.show2 && !this.state.showNext&&<div className = 'dialog'>수량을 선택하고 "장바구니에 담기"를 눌러주세요.</div>}
                {this.state.show3 && !this.state.showNext&&
                    <div className = 'dialog2' id='changeNumber'>
                        <div className = 'number'>{number}개</div>
                        <button className='button' onClick={this.minus}> - </button>
                        
                        <button className='button' onClick={this.plus}> + </button>
                        <button id='okay' className='button' onClick={this.pass}>장바구니 담기</button>
                    </div>
                }
                {this.state.show3 &&this.state.showNext && goback}
            </div>
        )
    }
}

export default HowMany;