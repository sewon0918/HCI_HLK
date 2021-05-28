import React from 'react';
import './index.css';
import firebase from '../../Firebase';
import { Fade } from '@material-ui/core';



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: false, index: 0, show: true};
    }
    componentDidMount(){
        this.setState({menu: this.props.menu, price: this.props.price, drinkOrSide: this.props.drinkOrSide, number: this.props.number, index: this.props.index})
    }
    

    Rem_num() {
        console.log("minus");
        var entry = null;
        if (this.state.number > 0) {
            if (this.state.number == 1) this.Delete()
            else {
                entry = {name: this.state.menu, price: this.state.price, category: this.state.drinkOrSide, num: this.state.number - 1};
                firebase.database().ref('menu/'+this.state.index).set(entry);
                this.setState({number: this.state.number - 1})
                console.log("didminus")
            }
            /*
            entry = {name: this.state.menu, price: this.state.price, category: this.state.drinkOrSide, num: this.state.number - 1};
            firebase.database().ref('menu/'+this.state.index).set(entry);
            this.setState({number: this.state.number - 1})
            console.log("didminus")*/
        }
    }
    Add_num() {
        console.log("add")
        var entry = {name: this.state.menu, price: this.state.price, category: this.state.drinkOrSide, num: this.state.number + 1};
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
        const {drinkOrSide} = this.props;
        const {index}=this.props;
        console.log(menu, price, drinkOrSide, index, "ddd");
        if (this.state.index != index || this.state.menu != menu || this.state.drinkOrSide != drinkOrSide || this.state.number != this.props.number) {
            this.setState({show: true, menu: this.props.menu, price: this.props.price, drinkOrSide: this.props.drinkOrSide, number: this.props.number, index: this.props.index})
        }
        const number = this.state.number
        if (this.state.show)
        return(
            
            <div>
                <table>
                    <td>
                        <div key={menu} id={menu} className="cartMenu" >
                        <img className="image" src={ require(`../../Data/Image/${drinkOrSide}/${menu}.jpg`).default } alt="menu_class"/>
                        <div className="name">{menu}</div>
                        <div className="price">{price}</div>
                        </div>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td><button id="rem_but" className="button" onClick={this.Rem_num.bind(this)}>-</button></td>
                                <td><div className="cartMany">{number}</div></td>
                                <td><button id="add_but" className="button" onClick={this.Add_num.bind(this)}>+</button></td>
                            </tr>
                            <tr>
                                <td colSpan="3"><button className="button" onClick={this.Delete.bind(this)}>제거</button></td>
                            </tr>
                        </table>
                    </td>
                    
                    <div></div>
                </table>
                
            </div>
        )
        else return (<div></div>)
    }
}

export default Menu;