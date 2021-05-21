import React from 'react';
import drinks from '../../Data/beverage.json';
import HowMany from '../HowMany';
import './index.css';

class ShowDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.results = this.results.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state = {select: false, menu: ''};
    }

    menuClick(id){
        const elements = document.getElementsByClassName("showmenu");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border="1px solid black";
            elements[i].style.boxShadow = '0 0 0 0px red inset';
        }
        document.getElementById(id).style.boxShadow = '0 0 0 3px red inset';
        this.setState({menu: id});
    }

    results() {
        const drinklist = drinks.map((key, index) => {
            const drinkname = key.name;
            return (<div key={drinkname} id={drinkname} className="showmenu" onClick={this.menuClick.bind(this, drinkname)}>
                        <img className="image" src={ require(`../../Data/Image/beverages/${drinkname}.jpg`).default } alt="menu_class"/>
                        <div className="name">{drinkname}</div>
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
        if (this.state.select){
            finish = <HowMany menu={drinkname} />
            menuList = null;
            button = <div id="recommendMenu1"><div key={drinkname} id={drinkname} className="showmenu1" onClick={this.menuClick.bind(this, drinkname)}>
            <img className="image" src={ require(`../../Data/Image/beverages/${drinkname}.jpg`).default } alt="menu_class"/>
            <div className="name">{drinkname}</div>
        </div></div>;
        }
        return(
            <div id='contain'>
                {menuList}
                {button}
                <div id='finish'>{finish}</div>
            </div>
        )
    }
}

export default ShowDrinks;