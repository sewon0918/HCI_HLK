import React from 'react';
import './index.css';
import 고추장 from '../../images/1.png';
import 직화 from '../../images/2.png';
import '../OptionChange'
import OptionChange from '../OptionChange';

import '../../App'
import Menu from '../Menu'

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: ''};
        this.yesOption = this.yesOption.bind(this);
        this.noOption = this.noOption.bind(this);
        this.state = {isLoggedIn: [], optionSelected:0, name:''};
    }

   

    menuClick(id){
        const elements = document.getElementsByClassName("menu");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        // console.log(id)
        var selectedMenu = document.getElementById(id);
        selectedMenu.style.backgroundColor = 'yellow';
        this.setState((state) => ({ focused: id }))
        console.log(this.state.focused)

        var cart = document.getElementById('cartContainer');
        // var myImage = '<img src = {고추장}/>'

        // var myImage = React.createElement(Menu, this.props, null);
        // const cartstyle ={
        //     width:"30%"
        // }
        var myImage = new Image();
        myImage.src = selectedMenu.src;
        myImage.style.width = "50%";
        // myImage.style.display = 'block';
        myImage.style.border = '1px solid black'
        myImage.style.borderRadius = '10px'
        myImage.style.backgroundColor = 'white'
        myImage.style.transitionProperty = 'ease'
        myImage.style.transitionTimingFunction = 'ease'
        // myImage.style = cartstyle;
        setTimeout(()=>{
            cart.appendChild(myImage); 
        },1000) 
        

        console.log(id)
        document.getElementById(id).style.backgroundColor = 'yellow';
    }

    yesOption(){
        console.log("yes");
        this.setState({optionSelected: 1, name: "불고기버거"}); 
    }

    noOption(){
        console.log("no");
        this.setState({optionSelected:0, name: "불고기버거"}); 
    }
    
    render(){
        const {phone} = this.props;
        console.log({phone})
        let recommendSelect = null;
        if (this.state.focused) {
            recommendSelect = <div  className='dialog'> {this.state.focused}를 선택하셨습니다.</div>
            // <Recommendation phone={phone}></Recommendation>
        }
        
            console.log({phone})
        const optionSelected = this.state.optionSelected;
        const name=this.state.name;
        let option=null;
        if (optionSelected > 0) {
            option = <OptionChange name={name} ></OptionChange>
            console.log("to option change");
        }
        if (optionSelected < 0) {
            option = <div>hoho</div>
        }
        return(
            <div>
                <div  className='dialog'>"{phone}" 님의 추천메뉴입니다. 원하시는 메뉴를 선택해주세요.</div>
                <div id="recommendMenu" className='dialog2'>
                    {/* <div className = 'box'>
                    <img id = "menu1Back" src={ 고추장 }  className='menuBack' alt="menu1" />
                    <img id = "menu1" className={['menu', this.state.focused && 'menu-focused'].join(' ')} src={ 고추장 } onClick={this.menuClick.bind(this, "menu1")} alt="menu1"/>
                    </div> */}
                
                {/* <img id = "menu1" className={['menu', this.state.focused && 'menu-focused'].join(' ')} src={ 고추장 } onClick={this.menuClick.bind(this, "menu1")} alt="menu1"/> */}
                    <img id = "menu1" className="menu" src={ 고추장 } onClick={this.menuClick.bind(this, "menu1")} alt="menu1"/>
                    <img id = "menu2" className="menu" src={ 직화 } onClick={this.menuClick.bind(this, "menu2")} alt="menu_class"/>
                    <button id="others" className="button" > 다른 메뉴 보러 가기 </button>
                </div>
                {recommendSelect}
                
                
               

                
                <div  className='dialog'>Do you want option change?</div>
                <button onClick = {this.yesOption}> Yes </button><button onClick = {this.noOption}> No </button>
                {option}
            </div>
        )
    }
}

export default Recommendation;