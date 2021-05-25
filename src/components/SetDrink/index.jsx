import React from 'react';
import drinks from '../../Data/beverage.json';
import './index.css';
import Setside from '../Setside';

class SetDrink extends React.Component {
    constructor(props) {
        super(props);
        this.results = this.results.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state = {select: false, menu: '', price:0, curr_price: this.props.curr_price, name:this.props.name, show:false, show2:false, show3:false};
    }
    componentDidMount(){
        this.menuClick('콜라(R)', 0);
        setTimeout(()=>{
            this.setState({show: true})
         },500);
         setTimeout(()=>{
            this.setState({show2: true})
         },2000);
         setTimeout(()=>{
            this.setState({show3: true})
         },4000);
     }

    menuClick(id, price){
        const elements = document.getElementsByClassName("showmenu");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border="3px solid white";
        }
        document.getElementById(id).style.border="3px solid red";
        this.setState({menu: id, price: price});
    }

    results() {
        const drinklist = drinks.map((key, index) => {
            const drinkname = key.name;
            let price=key.price;
            console.log(this.state.name);
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
            sides=<Setside curr_price={curr_price} burger={this.state.name} drink = {drinkname}></Setside>
            console.log(curr_price);
        }
        return(
            <div id='contain'>
                {menuList}
                <div>{button}</div>
                <div>{sides}</div>
            </div>
        )
    }
}

export default SetDrink;