import React from 'react';
import './index.css';
import burgers from '../../Data/burger.json'
import OptionChange from '../OptionChange';
import Payment from '../Payment';

class ShowBurgers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu: "", results: 0, order: false, show0: false, show: false, show2: false, show3: false, query:null, info: null, optionSelect:false};
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show0: true})
        },200)
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1500) 
        setTimeout(()=>{
            this.setState({show3: true})
        },2500) 
     }


    menuClick(id, json, price){
        console.log(json);
        const elements = document.getElementsByClassName("showBurger");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border="3px solid white";
        }
        console.log(id)
        document.getElementById(id).style.border = '3px solid red';
        this.setState({menu: id, order: false, info: json}); 
    
        console.log("jj")
    }
    orderMenu() {
        console.log(this.state.menu);
        this.setState({order: true});
    }

    results() {
        const {name} = this.props;
        const {ingredient} = this.props;
        let num = 0;
        if (this.state.query !== name) {
            this.setState({query: name, show: false, show2: false, show3: false, order: false});
            setTimeout(()=>{
               this.setState({show: true})
            },500)
            setTimeout(()=>{
                this.setState({show2: true})
            },1500) 
            setTimeout(()=>{
                this.setState({show3: true})
            },2500) 

        }
        const burgerlist = burgers.map((key, index) => {
            const burgername = key.name;
            const singleprice=key.singleprice;
            const setprice=key.setprice;
            if (name != null) {
                console.log("name");
                if (name != "" && burgername.includes(name)) {
                    num += 1;
                    return (
                        <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                            <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.jpg`).default } alt="menu_class"/>
                            <div className="name">{burgername}</div>
                            <div className="price">단품: {singleprice}</div>
                            <div className="price">세트: {setprice} </div>
                        </div>);
                }
                else return (null);
            }
            else if (ingredient !== null) {
                //console.log("ingred");
                if (key.ingredient === ingredient){
                    num += 1;
                    return (
                        <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                            <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.jpg`).default } alt="menu_class"/>
                            <div className="name">{burgername}</div>
                            <div className="price">단품: {singleprice}</div>
                            <div className="price">세트: {setprice} </div>
                        </div>);
                }
                else return (null);
            }
            else {
                console.log("show all");
                return (
                    <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                        <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.jpg`).default } alt="menu_class"/>
                        <div className="name">{burgername}</div>
                        <div className="price">단품: {singleprice}</div>
                        <div className="price">세트: {setprice} </div>
                    </div>);
            }
        })
        if (name != null && num === 0) 
            return (<>
                {this.state.show && <div className="dialog">"{name}"에 대한 검색 결과가 없습니다. 입력한 내용을 다시 확인해주세요</div>}
            </>)
        if (name != null)
            return (<>
                {this.state.show0 && <><div  className='dialog' id='answer'>{name}</div><br/><br/><br/></>}
                {this.state.show && <div  className='dialog'>"{name}"에 대한 검색 결과입니다. </div>}
                {this.state.show2 && <div  className='dialog'>원하시는 메뉴를 선택하고 주문하기를 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div><button id='select' onClick={this.orderMenu.bind(this)}>주문하기</button></>}
            </>)
        if (ingredient != null) 
            return (<>
                {this.state.show0 && <><div  className='dialog' id='answer'>{ingredient}</div><br/><br/><br/></>}
                {this.state.show && <div  className='dialog'>주재료가 {ingredient}인 햄버거입니다. </div>}
                {this.state.show2 && <div  className='dialog'>원하시는 메뉴를 선택하고 주문하기를 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div><button id='select' onClick={this.orderMenu.bind(this)}>주문하기</button></>}
            </>)
        if (name == null && ingredient == null) return (<>
                {this.state.show0 && <><div  className='dialog' id='answer'>모든 메뉴 보기</div><br/><br/><br/></>}
                {this.state.show && <div  className='dialog'>"모든 메뉴 보기"를 선택했습니다. </div>}
                {this.state.show2 && <div  className='dialog'>원하시는 메뉴를 선택하고 주문하기를 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div><button id='select' onClick={this.orderMenu.bind(this)}>주문하기</button></>}
            </>)
    }

    optionyes(){
        //console.log(this.state.optionSelect);
        this.setState({optionSelect: true});
    }
    optionno(){
        //console.log(this.state.optionSelect);
        this.setState({optionSelect: false});
    }
    render(){
        console.log(this.state.info);
        let order = null;
        let option=null;
        let button1=null;
        let button2=null;
        if(this.state.order){
            option=<div className="dialog">옵션을 선택하시겠습니까?</div>
            button1=<button onClick={this.optionyes.bind(this)}>네.</button>
            button2=<button onClick={this.optionno.bind(this)}>아니요.</button>
            console.log(this.state.optionSelect);
            if(this.state.optionSelect){
                order = <OptionChange name={this.state.menu} patty_count={this.state.info.patty_num} cheeze_count={this.state.info.cheeze} onion_state={this.state.info.onion} tomato_state={this.state.info.tomato} lettuce_state={this.state.info.lettuce} sauce_state={this.state.info.sauce} single={this.state.info.singleprice} set={this.state.info.setprice}></OptionChange>
            }
        }

        return(
            <div id='contain'>
                {this.results()}
                {option}
                {button1}{button2}
                {order}

            </div>
        )
    }
}

export default ShowBurgers;