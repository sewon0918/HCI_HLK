import React from 'react';
import drinks from '../../Data/beverage.json';
import HowMany from '../HowMany';
import './index.css';
import Setside from '../Setside';

class SetDrink extends React.Component {
    constructor(props) {
        super(props);
        this.results = this.results.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state = {select: false, menu: '', price:0, curr_price: this.props.curr_price};
    }

    menuClick(id, price){
        const elements = document.getElementsByClassName("showmenu");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border="1px solid black";
            elements[i].style.boxShadow = '0 0 0 0px red inset';
        }
        document.getElementById(id).style.boxShadow = '0 0 0 3px red inset';
        this.setState({menu: id, price: price});
    }

    results() {
        const drinklist = drinks.map((key, index) => {
            const drinkname = key.name;
            let price=key.price;
            if(price>1700){
                price=price-1700;
            }
            else{
                price=0;
            }
            //console.log(price);
            return (<div key={drinkname} id={drinkname} className="showmenu" onClick={this.menuClick.bind(this, drinkname, price)}>
                        <img className="image" src={ require(`../../Data/Image/beverages/${drinkname}.jpg`).default } alt="menu_class"/>
                        <div className="name">{drinkname}</div>
                        <div className="price">+{price}원</div>
                    </div>)
        })
        return (<div id="recommendMenu">{drinklist}</div>)
    }

    onSelect(){
        this.setState({select: true});
    }

    render(){
        let finish = null;
        let menuList = this.results();
        let button = <button id='select' onClick={this.onSelect}>선택</button>;
        const drinkname = this.state.menu;
        let price=this.state.price ;
        let curr_price=this.state.price + this.state.curr_price ;
        let sides=null;

        if (this.state.select){
            menuList = null;
            button = <div id="recommendMenu1"><div key={drinkname} id={drinkname} className="showmenu1" onClick={this.menuClick.bind(this, drinkname)}>
            <img className="image" src={ require(`../../Data/Image/beverages/${drinkname}.jpg`).default } alt="menu_class"/>
            <div className="name">{drinkname}</div>
            <div className="price">{price}</div>
        </div></div>;
            sides=<Setside curr_price={curr_price}></Setside>
            console.log(curr_price);
        }
        return(
            <div id='contain'>
                {menuList}
                {button}
                <div className="dialog">{drinkname}을 주문하셨습니다.</div>
                {sides}
            </div>
        )
    }
}

export default SetDrink;