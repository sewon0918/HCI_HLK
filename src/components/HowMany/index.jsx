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
        this.state = {show:false, show2: false, show3: false, number: 1, finish: false, cart:cartData, id:-1, quantity:0, showNext: false, again: 0};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.pass = this.pass.bind(this);
        this.block = this.block.bind(this);
        this.yes = this.yes.bind(this);
        this.no = this.no.bind(this);
        // this.getQuantity = this.getQuantity.bind(this);
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },2000) 
        setTimeout(()=>{
            this.setState({show3: true})
        },4000) 
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
                var next = Number(keyList[num -1]) + 1
                console.log(num)
                this.setState({quantity:next});
            }
        })
    }

    block(){
        this.setState({finish: false});
    }

    yes(){
        this.setState({again: 1});
    }

    no(){
        this.setState({again: 2});
    }

    render(){

        const {menu} = this.props;
        const {price} = this.props;
        const {drinkOrSide} = this.props;
        const {drink} = this.props;
        const {side} = this.props;
        const number = this.state.number;
        let cartlist = null;
        let goback = null;
        if (this.state.again === 1){
            goback = <SelectCategory />;
        }
        if (this.state.again === 2){
            goback = <div className='dialog'>오른쪽 아래 결제 버튼을 눌러주세요.</div>
        }
        if (this.state.finish){

            var q = this.state.quantity;
            console.log("finish!!!", q);

            var entry = null;
            if (drinkOrSide === "set") {
                console.log(`burger ${menu} drink ${drink} side ${side}`)
                entry = {name: menu, price: price, category: drinkOrSide, drink: drink, side: side, num:number};
            }
            else entry = {name: menu, price: price, category: drinkOrSide, num:number};
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
                            return (<Menu_set menu={myValue[i].name} price={myValue[i].price} drink={myValue[i].drink} side={myValue[i].side} number={myValue[i].num} index={i}/>)
                        }
                        return (
                            <Menu menu = {myValue[i].name} price = {myValue[i].price} drinkOrSide = {myValue[i].category} number={myValue[i].num} index={i}/>);
                    });
                    
                    const cart = document.getElementById('cartContent');
                    ReactDOM.render(cartlist, cart);
                } 
            })
            
            goback = <SelectCategory />;
            console.log("goback: ", goback);
            this.block();
        }
        var choice_dialog = <div className='dialog'>{menu}(을)를 선택하셨습니다.</div>
        if (drinkOrSide === "set") choice_dialog = <div className='dialog_long'>{menu}, {drink}, {side} <br></br>세트를 선택하셨습니다.</div>
        if (drinkOrSide === "burgers") choice_dialog = <div className='dialog_long'>{menu}(단품)을 선택하셨습니다.</div>
        return(
            <div>
                {this.state.show && choice_dialog}
                {this.state.show2 && !this.state.showNext&&<div className = 'dialog_long'>수량을 선택하고 "장바구니에 담기"를 눌러주세요.</div>}
                {this.state.show3 && !this.state.showNext&&
                    <div className = 'dialog2_short' id='changeNumber'>
                        <div className = 'number'>{number}개</div>
                        <button className='button3' onClick={this.minus}> - </button>
                        
                        <button className='button3' onClick={this.plus}> + </button>
                        <button id='okay' className='button' onClick={this.pass}>장바구니 담기</button>
                    </div>
                }
                {this.state.show3 &&this.state.showNext &&
                    <div id ='parent'>
                        <div className = 'dialog'> 다른 메뉴를 추가 주문하시겠습니까? </div>
                        <button className='button2' onClick={this.yes}> 네 </button>
                        <button className='button2' onClick={this.no}> 아니오 </button>
                    </div>
                }
                {goback}
            </div>
        )
    }
}

export default HowMany;