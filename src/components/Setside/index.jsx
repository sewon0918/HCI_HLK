import React from 'react';
import sides from '../../Data/side.json';
import Payment from '../Payment';
import './index.css';
import Setmenu from '../Setmenu'

class Setside extends React.Component {
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
        const sidelist = sides.map((key, index) => {
            const sidename = key.name;
            let price=key.r_price;
            if(price>1500){
                price=price-1500;
            }
            else{
                price=0;
            }
            //console.log(key);
            return (<div key={sidename} id={sidename} className="showmenu" onClick={this.menuClick.bind(this, sidename, price)}>
                        <img className="image" src={ require(`../../Data/Image/sides/${sidename}.jpg`).default } alt="menu_class"/>
                        <div className="name">{sidename}</div>
                        <div className="price">+{price}원</div>
                    </div>)
        })
        return (<div id="recommendMenu">{sidelist}</div>)
    }

    onSelect(){
        this.setState({select: true});
    }

    render(){
        let menuList = this.results();
        let button = <button id='select' onClick={this.onSelect}>선택</button>;
        const sidename = this.state.menu;
        let price=this.state.price;
        let total_price= this.state.price + this.state.curr_price;
        console.log(this.state.curr_price);
        let pay=null;
        if (this.state.select){
            menuList = null;
            button = <div id="recommendMenu1"><div key={sidename} id={sidename} className="showmenu1" >
            <img className="image" src={ require(`../../Data/Image/sides/${sidename}.jpg`).default } alt="menu_class"/>
            <div className="name">{sidename}</div>
            <div className="price">{price}</div>
        </div></div>;
            pay=<Payment total_price= {total_price}></Payment>
            console.log(total_price);
        }
        return(
            <div id='contain'>
                <div className="dialog">사이드를 주문해주세요.</div>
                {menuList}
                {button}
                <div className="dialog">{sidename}을 주문하셨습니다.</div>
                {pay}

            </div>
        )
    }
}

export default Setside;