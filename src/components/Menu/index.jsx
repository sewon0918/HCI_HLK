import React from 'react';
import './index.css';
import 고추장 from '../../images/1.png';
import 직화 from '../../images/2.png';

import '../../App'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: false};
    }

    render(){

        
        return(
            <div>
                
                    <img className="menu" src={this.props.menu} alt="menu_class"/>
                
                
            </div>
        )
    }
}

export default Menu;