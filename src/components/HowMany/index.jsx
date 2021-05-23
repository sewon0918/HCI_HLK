import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Menu from '../Menu';
import App from '../../App';
import aaa from '../../images/1.png'
import cartIcon from '../../images/cart.png';
import cartData from '../../Data/cart.json';
import firebase from '../../Firebase';

  // Initialize Firebase

class HowMany extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:false, show2: false, show3: false, number: 1, finish: false, cart:cartData, id:-1};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.pass = this.pass.bind(this);
        this.block = this.block.bind(this);
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1000) 
        setTimeout(()=>{
            this.setState({show3: true})
        },1500) 
    }

    plus(){
        const changed = this.state.number + 1;
        this.setState({number: changed});
    }

    minus(){
        if (this.state.number > 1){
            const changed = this.state.number - 1;
            this.setState({number: changed});
        }
    }

    pass(){
        this.setState({finish: true});
    }

    block(){
        this.setState({finish: false});
    }

    render(){
        const {menu} = this.props;
        const {price} = this.props;
        const {drinkOrSide} = this.props;
        const number = this.state.number;
        let finish = null;
        let cartlist = null;
        let num = 0;
        if (this.state.finish){
            var entry = {name: menu, price: price, drinkOrSide: drinkOrSide};
            firebase.database().ref('menu/'+menu).set(entry);
            this.block();
        }
        return(
            <div className='parent2'>
                {this.state.show && <div className = 'dialog'>{menu}를 선택하셨습니다.</div>}
                {this.state.show2 && <div className = 'dialog'>수량을 선택하고 "장바구니에 담기"를 눌러주세요.</div>}
                {this.state.show3 && 
                    <div id='changeNumber'>
                        <div className='number'>{number}</div><div className='number'>개</div>
                        <button className='number' onClick={this.plus}>+</button><button onClick={this.minus} className='number'>-</button>
                        <button id='okay' className='button' onClick={this.pass}>장바구니</button>
                        <br className='clear' />
                    </div>
                }
                {/* {finish} */}
                {cartlist}
            </div>
        )
    }
}

export default HowMany;