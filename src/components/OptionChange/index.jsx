import React from 'react';
import './index.css';
import 치즈 from '../../images/cheeze.png';
import 패티 from '../../images/patty.png';
import 양파 from '../../images/onion.png';
import 토마토 from '../../images/tomato.png';
import 양상추 from '../../images/lettuce.png';
import 소스 from '../../images/sauce.png';


class OptionChange extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            patty_count:0,
            cheeze_count:0
        }
    }
    Add_patty(){
        console.log("add");
        this.setState({
          patty_count: this.state.patty_count + 1
        });
      }
    Rem_patty(){
    console.log("rem");
        if(this.state.patty_count>0){
            this.setState({
                patty_count: this.state.patty_count - 1
                });
        }
        else{
            this.setState({
                patty_count:0
            })
        }
    }

    render(){
        return(
            <div>
                <div  className='dialog'>원하시는 옵션을 선택해주세요.</div>
                <div id="patty_selection">
                    <img id="patty" className="photo" src={패티}></img>
                    <button id="add_but" className="button" onClick={this.Add_patty.bind(this)}>+</button>
                    <div>{this.state.patty_count}</div>
                    <button id="rem_but" className="button" onClick={this.Rem_patty.bind(this)}>-</button>
                </div>
            </div>
        )
    }
}
export default OptionChange;