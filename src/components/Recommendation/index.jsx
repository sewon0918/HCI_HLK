import React from 'react';
import './index.css';
import 고추장 from '../../images/1.png';
import 직화 from '../../images/2.png';
import '../OptionChange'
import OptionChange from '../OptionChange';

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.yesOption = this.yesOption.bind(this);
        this.noOption = this.noOption.bind(this);
        this.state = {isLoggedIn: [], optionSelected:0};
    }

    menuClick(id){
        const elements = document.getElementsByClassName("menu");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        console.log(id)
        document.getElementById(id).style.backgroundColor = 'yellow';
    
        // console.log("jj")
    }

    yesOption(){
        console.log("yes");
        this.setState({optionSelected: 1}); 
    }

    noOption(){
        console.log("no");
        this.setState({optionSelected:0}); 
    }
    
    render(){
        const {phone} = this.props;
            console.log({phone})
        const optionSelected = this.state.optionSelected;
        let option=null;
        if (optionSelected > 0) {
            option = <OptionChange></OptionChange>
            console.log("to option change");
        }
        if (optionSelected < 0) {
            option = <div>hoho</div>
        }
        return(
            <div>
                <div  className='dialog'>{phone}These are the recommendation. Select among these or you can click "Others" button</div>
                <div id="recommendMenu">
                    <img id = "menu1" className="menu" src={ 고추장 } onClick={this.menuClick.bind(this, "menu1")} alt="menu1"/>
                    <img id = "menu2" className="menu" src={ 직화 } onClick={this.menuClick.bind(this, "menu2")} alt="menu_class"/>
                    <button id="others"> Go to see other menus </button>
                </div>
                <div  className='dialog'>"고추장불고기버거" is selected. Do you want option change?</div>
                <button onClick = {this.yesOption}> Yes </button><button onClick = {this.noOption}> No </button>
                {option}
            </div>
        )
    }
}

export default Recommendation;