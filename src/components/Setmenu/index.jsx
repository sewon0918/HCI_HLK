import React from 'react';
import './index.css';
import SetDrink from '../SetDrink';

class Setmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            set_price:this.props.set_price,
            name: this.props.name,
            show: false,
            show2: false,
            show3: false

        }
    }

    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },2000)
        setTimeout(()=>{
            this.setState({show3: true})
        },4000)  
     }


    render(){
        console.log(this.state.name);
        let drinks=<SetDrink curr_price= {this.state.set_price} name={this.state.name}></SetDrink>
        return(
            <div>
                {this.state.show && <div className='dialog'>세트 선택하셨습니다.</div>}
                {this.state.show2 && <div className='dialog'>음료 먼저 선택해주세요.</div>}
                {this.state.show3 && <div>{drinks}</div>}
            </div>

        )
    }

}
export default Setmenu;