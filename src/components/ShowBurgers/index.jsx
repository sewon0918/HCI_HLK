import React from 'react';
import './index.css';
import 고추장 from '../../images/1.png';
import 직화 from '../../images/2.png';
import burgers from '../../Data/burger.json';

class ShowBurgers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: []};
    }

    menuClick(id){
        const elements = document.getElementsByClassName("menu");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border="1px solid black";
        }
        console.log(id)
        document.getElementById(id).style.border = '3px solid red';
    
        // console.log("jj")
    }
    results() {
        const {name} = this.props;
        const {ingredient} = this.props;
        const burgerlist = burgers.map((key, index) => {
            const burgername = key.name;
            if (name != null) {
                if (name != "" && burgername.includes(name))
                    return (
                    <img id={burgername} className="menu" src={ require(`../../Data/Image/burgers/${burgername}.jpg`).default } onClick={this.menuClick.bind(this, burgername)} alt="menu_class"/>);
                else return (null);
            }
            else if (ingredient != null) {
                if (key.ingredient === ingredient)
                    return (<div className='dialog'>{burgername}</div>);
                else return (null);
            }
            else {
                console.log("show all");
                return (<div className='dialog'>{burgername}</div>);
            }
        })
        return (<div id="recommendMenu">{burgerlist}<button id="others"> Go to see other menus </button></div>)
    }

    render(){
        return(
            <div>
                {this.results()}
                <div  className='dialog'>These are the recommendation. Select among these or you can click "Others" button</div>
                <div id="recommendMenu">
                    <img id = "menu1" className="menu" src={ 고추장 } onClick={this.menuClick.bind(this, "menu1")} alt="menu1"/>
                    <img id = "menu2" className="menu" src={ 직화 } onClick={this.menuClick.bind(this, "menu2")} alt="menu_class"/>
                    <button id="others"> Go to see other menus </button>
                </div>
                <div  className='dialog'>"고추장불고기버거" is selected. Do you want option change?</div>
                <button> Yes </button><button> No </button>
                <div  className='dialog'>These are the recommendation. Select among these or you can click "Others" button</div>
                <div  className='dialog'>These are the recommendation. Select among these or you can click "Others" button</div>
                <div  className='dialog'>These are the recommendation. Select among these or you can click "Others" button</div>
                <div  className='dialog'>These are the recommendation. Select among these or you can click "Others" button</div>
                <div  className='dialog'>These are the recommendation. Select among these or you can click "Others" button</div>
                <div  className='dialog'>These are the recommendation. Select among these or you can click "Others" button</div>

                
            </div>
        )
    }
}

export default ShowBurgers;