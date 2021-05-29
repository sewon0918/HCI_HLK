import React from 'react';
import './index.css';
import firebase from '../../Firebase';


class Menu_set extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: false, index: 0, show: true, first: false};
    }
    

    Rem_num() {
        console.log("minus");
        var entry = null;
        if (this.state.number > 0) {
            if (this.state.number == 1) this.Delete()
            else {
                entry = {name: this.state.menu, price: this.state.price, category: "set", drink: this.state.drink, side: this.state.side, num: this.state.number - 1};
                firebase.database().ref('menu/'+this.state.index).set(entry);
                this.setState({number: this.state.number - 1})
                console.log("didminus")
            }
        }
    }
    Add_num() {
        console.log("add")
        var entry = {name: this.state.menu, price: this.state.price, category: "set", drink: this.state.drink, side: this.state.side, num: this.state.number + 1};
        firebase.database().ref('menu/'+this.state.index).set(entry);
        this.setState({number: this.state.number + 1})
        console.log("didplus")
    }
    Delete() {
        console.log("delete")
        firebase.database().ref('menu/'+this.state.index).remove()
        console.log("didplus")
        this.setState({show: false})
    }


    render(){
        const {menu} = this.props;
        const {price} = this.props;
        const {drink} = this.props;
        const {side} = this.props;
        const {number}=this.props;
        const {index} = this.props;
        if (this.state.menu != menu || this.state.drink != drink || this.state.side != side || this.state.number != number || this.state.index != index ) {
            this.setState({show: true, menu: this.props.menu, price: this.props.price, drinkOrSide: this.props.drinkOrSide, number: this.props.number, index: this.props.index, drink: this.props.drink, side: this.props.side})
        }
        if (this.state.show)
        return( 
            
            <div>
                <table>
                    <td>
                        <div key={menu} id={menu} className="cartMenu" >
                            <div className="setContainer">
                                <img className="setImageBurger" src={ require(`../../Data/Image/burgers/${menu}.png`).default } alt="menu_class"/>
                                <img className="setImageSide" src={ require(`../../Data/Image/sides/${side}.png`).default } alt="menu_class"/>
                                <img className="setImageDrink" src={ require(`../../Data/Image/beverages/${drink}.png`).default } alt="menu_class"/>
                            </div>
                        
                        <div className="name">{menu} 세트</div>
                        <div className="price">{price}</div>
                        </div>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td><button id="rem_but" className="button" onClick={this.Rem_num.bind(this)}>-</button></td>
                                <td><div className="cartMany">{this.state.number}</div></td>
                                <td><button id="add_but" className="button" onClick={this.Add_num.bind(this)}>+</button></td>
                            </tr>
                            <tr>
                                <td colSpan="3"><button className="button" onClick={this.Delete.bind(this)}>제거</button></td>
                            </tr>
                        </table>
                    </td>
                
                </table>
            </div>
        )
        else return (<div></div>)
    }
}

export default Menu_set;