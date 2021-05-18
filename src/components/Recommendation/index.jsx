import React from 'react';
import './index.css';
import 고추장 from '../../images/1.png';
import 직화 from '../../images/2.png';

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: []};
    }

    menuClick(){
        document.getElementById("menu1").style.backgroundColor = 'yellow';
        // console.log("jj")
    }

    render(){
        return(
            <div>
                <div  className='dialog'>These are the recommendation. Select among these or you can click "Others" button</div>
                <div id="recommendMenu">
                    <img id = "menu1" className="menu" src={ 고추장 } onClick={this.menuClick} alt="menu1"/>
                    <img className="menu" src={ 직화 } alt="menu_class"/>
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

export default Recommendation;