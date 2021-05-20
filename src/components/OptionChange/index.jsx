import React from 'react';
import './index.css';
import 치즈 from '../../images/cheeze.png';
import 패티 from '../../images/patty.png';
import 양파 from '../../images/onion.png';
import 토마토 from '../../images/tomato.png';
import 양상추 from '../../images/lettuce.png';
import 소스 from '../../images/sauce.png';
import burgers from '../../Data/burger.json'

class OptionChange extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            patty_count:0,
            cheeze_count:0,
            onion_state:0,
            tomato_state:0,
            lettuce_state:0,
            sauce_state:0,
            OptionSelected: []
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

    Add_cheeze(){
        console.log("che_ad");
        this.setState({
            cheeze_count: this.state.cheeze_count + 1
        });
      }
    Rem_cheeze(){
    console.log("rem_ch");
        if(this.state.cheeze_count>0){
            this.setState({
                cheeze_count: this.state.cheeze_count - 1
                });
        }
        else{
            this.setState({
                cheeze_count:0
            })
        }
    }

    menuClick(id, cla){
        //id: much_sa cla: sauce
        const elements = document.getElementsByClassName(cla);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        console.log(id);
        console.log(cla);
        document.getElementById(id).style.backgroundColor = 'yellow';
        if(id=="much_"+cla){
            if(cla=="tomato"){this.setState({tomato_state:3});}
            else if(cla=="lettuce"){this.setState({lettuce_state:3});}
            else if(cla=="onion"){this.setState({onion_state:3});}
            else if(cla=="sauce"){this.setState({sauce_state:3});}
        }
        else if(id=="mid_"+cla){
            if(cla=="tomato"){this.setState({tomato_state:2});}
            else if(cla=="lettuce"){this.setState({lettuce_state:2});}
            else if(cla=="onion"){this.setState({onion_state:2});}
            else if(cla=="sauce"){this.setState({sauce_state:2});}
        }
        else if(id=="less_"+cla){
            if(cla=="tomato"){this.setState({tomato_state:1});}
            else if(cla=="lettuce"){this.setState({lettuce_state:1});}
            else if(cla=="onion"){this.setState({onion_state:1});}
            else if(cla=="sauce"){this.setState({sauce_state:1});}
        }
        else if(id=="no_"+cla){
            if(cla=="tomato"){this.setState({tomato_state:0});}
            else if(cla=="lettuce"){this.setState({lettuce_state:0});}
            else if(cla=="onion"){this.setState({onion_state:0});}
            else if(cla=="sauce"){this.setState({sauce_state:0});}
        }
    }

    render(){
        return(
            <div>
                <div  className='dialog'>원하시는 옵션을 선택해주세요.</div>
                <div className='selection'>
                    <img id="patty" className="photo" src={패티}></img>
                    <button id="add_but" className="button" onClick={this.Add_patty.bind(this)}>+</button>
                    <div>{this.state.patty_count}</div>
                    <button id="rem_but" className="button" onClick={this.Rem_patty.bind(this)}>-</button>
                </div>
                <div className='selection'>
                    <img id="cheeze" className="photo" src={치즈}></img>
                    <button id="add_but" className="button" onClick={this.Add_cheeze.bind(this)}>+</button>
                    <div>{this.state.cheeze_count}</div>
                    <button id="rem_but" className="button" onClick={this.Rem_cheeze.bind(this)}>-</button>
                </div>
                <div className='selection'>
                    <img id="onion" className="photo" src={양파}></img>
                    <button id="much_onion" className="onion" onClick={this.menuClick.bind(this,"much_onion","onion")}>양파 많이</button>
                    <button id="mid_onion" className="onion" onClick={this.menuClick.bind(this,"mid_onion","onion")}>양파 기본</button>
                    <button id="less_onion" className="onion" onClick={this.menuClick.bind(this,"less_onion","onion")}>양파 조금</button>
                    <button id="no_onion" className="onion" onClick={this.menuClick.bind(this,"no_onion", "onion")}>양파 없음</button>
                </div>
                <div className='selection'>
                    <img id="tomato" className="photo" src={토마토}></img>
                    <button id="much_tomato" className="tomato" onClick={this.menuClick.bind(this,"much_tomato","tomato")}>토마토 많이</button>
                    <button id="mid_tomato" className="tomato" onClick={this.menuClick.bind(this,"mid_tomato","tomato")}>토마토 기본</button>
                    <button id="less_tomato" className="tomato" onClick={this.menuClick.bind(this,"less_tomato","tomato")}>토마토 조금</button>
                    <button id="no_tomato" className="tomato" onClick={this.menuClick.bind(this,"no_tomato","tomato")}>토마토 없음</button>
                </div>
                <div className='selection'>
                    <img id="lettuce" className="photo" src={양상추}></img>
                    <button id="much_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"much_lettuce","lettuce")}>양상추 많이</button>
                    <button id="mid_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"mid_lettuce","lettuce")}>양상추 기본</button>
                    <button id="less_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"less_lettuce","lettuce")}>양상추 조금</button>
                    <button id="no_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"no_lettuce","lettuce")}>양상추 없음</button>
                </div>
                <div className='selection'>
                    <img id="sauce" className="photo" src={소스}></img>
                    <button id="much_sauce" className="sauce" onClick={this.menuClick.bind(this,"much_sauce","sauce")}>소스 많이</button>
                    <button id="mid_sauce" className="sauce" onClick={this.menuClick.bind(this,"mid_sauce","sauce")}>소스 기본</button>
                    <button id="less_sauce" className="sauce" onClick={this.menuClick.bind(this,"less_sauce","sauce")}>소스 조금</button>
                    <button id="no_sauce" className="sauce" onClick={this.menuClick.bind(this,"no_sauce","sauce")}>소스 없음</button>
                </div>
                <div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                <button>단품</button><button>세트</button>
            </div>
        )
    }
}
export default OptionChange;