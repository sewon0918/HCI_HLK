import React from 'react';
import sides from '../../Data/side.json';
import HowMany from '../HowMany';
import './index.css';

class ShowSides extends React.Component {
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
        const sidelist = sides.map((key, index) => {
            const sidename = key.name;
            return (<div key={sidename} id={sidename} className="showmenu" onClick={this.menuClick.bind(this, sidename)}>
                        <img className="image" src={ require(`../../Data/Image/sides/${sidename}.jpg`).default } alt="menu_class"/>
                        <div className="name">{sidename}</div>
                    </div>)
        })
        return (<div id="recommendMenu">{sidelist}</div>)
    }

    onSelect(){
        this.setState({select: true});
    }

    render(){
        let finish = null;
        let menuList = this.results();
        let button = <button id='select' onClick={this.onSelect}>선택</button>;
        const sidename = this.state.menu;
        if (this.state.select){
            finish = <HowMany menu={sidename} />
            menuList = null;
            button = <div id="recommendMenu1"><div key={sidename} id={sidename} className="showmenu1" >
            <img className="image" src={ require(`../../Data/Image/sides/${sidename}.jpg`).default } alt="menu_class"/>
            <div className="name">{sidename}</div>
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

export default ShowSides;