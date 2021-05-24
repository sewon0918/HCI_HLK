import React from 'react';
import './index.css';



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: false};
    }

    render(){
        const {menu} = this.props;
        const {price} = this.props;
        const {drinkOrSide} = this.props;
        console.log(menu, price, drinkOrSide);
        
        return(
            
            <div>
                <div key={menu} id={menu} className="cartMenu" >
                        <img className="image" src={ require(`../../Data/Image/${drinkOrSide}/${menu}.jpg`).default } alt="menu_class"/>
                        <div className="name">{menu}</div>
                        <div className="price">{price}</div>
                    </div>
                
            </div>
        )
    }
}

export default Menu;