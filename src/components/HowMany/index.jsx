import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Menu from '../Menu';
import App from '../../App';
import aaa from '../../images/1.png'
import cartIcon from '../../images/cart.png';
import cartData from '../../Data/cart.json';
import firebase from "../../firebase";

class HowMany extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:false, show2: false, show3: false, number: 1, finish: false};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.pass = this.pass.bind(this);
        this.finishFalse = this.finishFalse.bind(this);
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
        this.setState({finish: true});

    }

    finishFalse(){
        this.setState({finish:false});
        return false;
    }

    render(){

    
        const {menu} = this.props;
        const {price} = this.props;
        const {drinkOrSide} = this.props;
        const number = this.state.number;
        let finish = null;
        let cartlist = null;
        if (this.state.finish){

            var newKey = firebase.database().ref('/carts/').push();
            newKey.set({
                "menu": menu,
                "price": price
            });
            console.log(newKey) ;

            // const cart = document.getElementById("cart");
            // const img = new Image(200);
            // img.src = require(`../../Data/Image/${drinkOrSide}/${menu}.jpg`).default;
            // img.style.borderRadius = "10px";
            // console.log(img.src);

            // cart.appendChild(img);

            // console.log("push", menu, price, drinkOrSide);
            // cartData.push({name: menu,price: price, drinkOrSide: drinkOrSide});
            // console.log(cartData);

            // cartlist = cartData.map((key, index) => {
            //     console.log("cartlist");
            //     const menu1 = key.name;
            //     const price1 = key.price;
            //     const drinkOrSide1 = key.drinkOrSide;
            //     console.log(index, name1, price1, drinkOrSide1);
            // if (num==0){
            //     cart.appendChild(img);
            //     num += 1;
            // }
            //writeJsonFile(jsonFile, {name: menu,price: price, drinkOrSide: drinkOrSide}).catch(err=>console.log(err));
            const cartinfo=cartData;
            const newcart=[...cartinfo,{name: menu,price: price, drinkOrSide: drinkOrSide} ]

            //cartData.push({name: menu,price: price, drinkOrSide: drinkOrSide});
            console.log("새로들어간거", menu, price, drinkOrSide);
            console.log(cartData);
            console.log(newcart);

            // cartlist = cartData.map((key, index) => {
            //     console.log("cartlist");
            //     const name1 = key.name;
            //     const price1 = key.price;
            //     const drinkOrSide1 = key.drinkOrSide;
            //     console.log(index, name1, price1, drinkOrSide1);
                
            //     return (<Menu menu={name1} price = {price1} drinkOrSide = {drinkOrSide1}/>
            //     );
                    // <div className="showBurger" >
                    //     <img className="image" src={ require(`../../Data/Image/${drinkOrSide}/${name}.jpg`).default } alt="menu_class"/>
                    //     <div className="name">{name}</div>
                    //     <div className="price">{price}</div>
                    // </div>);
                
            //     return (<Menu menu={menu1} price = {price1} drinkOrSide = {drinkOrSide1}/>
            //     );    
            // })

            // this.setState({finish: false});
            // const cartTitle = <><div ><img id = "icon" src={ cartIcon } alt="icon"/></div>
            //                          <div className='text'>장바구니</div></>
            // ReactDOM.render([cartTitle, cartlist], cart);
                

            // finish = <Menu menu={menu} price = {price} number={number} drinkOrSide = {drinkOrSide}/>;
            
            
            
            // var cartElement = window.$cartElement;
            
            // console.log("cartElement: ", cartElement);
            // cartElement.push(finish);
            // ReactDOM.render(cartElement, cart);
            // ReactDOM.render([cartTitle, finish], cart);
            // finish = <App menu={menu} price = {price} number={number}/>
            

        }
        return(
            <div className='parent2'>
                {this.state.show && <div className = 'dialog'>{menu}를 선택하셨습니다.</div>}
                {this.state.show2 && <div className = 'dialog'>수량을 선택하고 "장바구니에 담기"를 눌러주세요.</div>}
                {this.state.show3 && 
                    <div className = 'dialog2' id='changeNumber'>
                        <div className = 'number'>{number}개</div>
                        <button className='button' onClick={this.minus}> - </button>
                        
                        <button className='button' onClick={this.plus}> + </button>
                        <button id='okay' className='button' onClick={this.pass}>장바구니 담기</button>
                    </div>
                }
                {/* {finish} */}
                {cartlist}
            </div>
        )
    }
}

export default HowMany;