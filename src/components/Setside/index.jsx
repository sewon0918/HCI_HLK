import React from 'react';
import sides from '../../Data/side.json';
import Payment from '../Payment';
import HowMany from '../HowMany'
import './index.css';

class Setside extends React.Component {
    constructor(props) {
        super(props);
        this.results = this.results.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state = {select: false, menu: '', price:0, curr_price: this.props.curr_price, burger:this.props.burger, drink: this.props.drink,
                        show:false, show2:false, show3:false};
    }
    componentDidMount(){
        this.menuClick('감자튀김(R)', 0);
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
            return (<>
                <div key={sidename} id={sidename} className="showmenu" onClick={this.menuClick.bind(this, sidename, price)}>
                        <img className="image" src={ require(`../../Data/Image/sides/${sidename}.png`).default } alt="menu_class"/>
                        <div className="name">{sidename}</div>
                        <div className="price">+{price}원</div>
                    </div></>)
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
            <img className="image" src={ require(`../../Data/Image/sides/${sidename}.png`).default } alt="menu_class"/>
            <div className="name">{sidename}</div>
            <div className="price">{price}</div>
        </div></div>;
            pay=<HowMany price= {total_price} menu={this.state.burger} drinkOrSide={"set"} drink={this.state.drink} side={sidename}></HowMany>
            console.log(this.state.burger);
        }
        return(
            <div id='contain'>
                <div className="dialog_long">{this.state.drink}을 주문하셨습니다. 사이드를 주문해주세요.</div>
                <div id='menu-list'>{menuList}</div>
                {button}
                {pay}

            </div>
        )
    }
}

export default Setside;