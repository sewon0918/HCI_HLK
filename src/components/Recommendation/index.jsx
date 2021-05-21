import React from 'react';
import './index.css';
import 고추장 from '../../images/1.png';
import 직화 from '../../images/2.png';

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: []};
    }

    menuClick(id){
        const elements = document.getElementsByClassName("menu");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        console.log(id)
        document.getElementById(id).style.backgroundColor = 'yellow';
    }

    render(){
        const {phone} = this.props;
            console.log({phone})
        return(
            <div>
                <div  className='dialog'>{phone}These are the recommendation. Select among these or you can click "Others" button</div>
                <div id="recommendMenu">
                    <img id = "menu1" className="menu" src={ 고추장 } onClick={this.menuClick.bind(this, "menu1")} alt="menu1"/>
                    <img id = "menu2" className="menu" src={ 직화 } onClick={this.menuClick.bind(this, "menu2")} alt="menu_class"/>
                    <button id="others"> Go to see other menus </button>
                </div>
                <div  className='dialog'>"고추장불고기버거" is selected. Do you want option change?</div>
                <button> Yes </button><button> No </button>
            </div>
        )
    }
}

export default Recommendation;