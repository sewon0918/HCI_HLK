import React from 'react';
import './index.css';
import burgers from '../../Data/burger.json'
import OptionChange from '../OptionChange';
import Payment from '../Payment';
import Setmenu from '../Setmenu';
import HowMany from '../HowMany';

class ShowBurgers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu: "", results: 0, order: false, show0: false, show: false, show2: false, show3: false, query:null, info: null, optionSelect:0, set: 0};
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show0: true})
        },200)
        setTimeout(()=>{
           this.setState({show: true})
        },2000)
        setTimeout(()=>{
            this.setState({show2: true})
        },4000) 
        setTimeout(()=>{
            this.setState({show3: true})
        },7000) 
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
        const {recommend} = this.props;
        const {phone} = this.props;
        console.log("name", name);
        console.log("ingredient", ingredient);
        console.log("phone", phone);
        let num = 0;
        if (this.state.query !== name) {
            this.setState({query: name, show: false, show2: false, show3: false, order: false});
            setTimeout(()=>{
               this.setState({show: true})
            },500)
            setTimeout(()=>{
                this.setState({show2: true})
            },2000) 
            setTimeout(()=>{
                this.setState({show3: true})
            },4500) 

        }
        let nextButton = null;
        if (this.state.menu !== "") {
            nextButton = <button id='select' onClick={this.orderMenu.bind(this)}>다음</button>;
        }
        const burgerlist = burgers.map((key, index) => {
            const burgername = key.name;
            const singleprice=key.singleprice;
            const setprice=key.setprice;
            if (name != null) {
                console.log("name");
                if (name !== "" && burgername.includes(name)) {
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
            else if (ingredient !== undefined && ingredient !== null) {
                console.log("ingred");
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
            else if (phone!==null && recommend){
                console.log("recommend")
                if (burgername.includes("불고기")){
                    return (
                        <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                            <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.jpg`).default } alt="menu_class"/>
                            <div className="name">{burgername}</div>
                            <div className="price">단품: {singleprice}</div>
                            <div className="price">세트: {setprice} </div>
                        </div>);
                }
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
            return null;
        })
        if (name != null && num === 0) 
            return (<>
                {this.state.show && <div className="dialog">"{name}"에 대한 검색 결과가 없습니다. 입력한 내용을 다시 확인해주세요</div>}
            </>)
            if (this.state.order)
                return (
                <div id = 'answer' className="resultBurger">
                    <img className="image" src={ require(`../../Data/Image/burgers/${this.state.menu}.jpg`).default } alt="menu_class"/>
                    <div className="name">{this.state.menu}</div>
                </div>)
        if (name != null)
            return (<>
                {<div  className='dialog' id='answer'>{name}</div>}
                {this.state.show && <div  className='dialog'>"{name}"에 대한 검색 결과입니다. </div>}
                {this.state.show2 && <div  className='dialog_long'>원하시는 메뉴를 선택하고 "다음"을 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
            </>)
        if (ingredient != null) 
            return (<>
                {<div  className='dialog' id='answer'>{ingredient}</div>}
                {this.state.show && <div  className='dialog'>주재료가 {ingredient}인 햄버거입니다. </div>}
                {this.state.show2 && <div  className='dialog_long'>원하시는 메뉴를 선택하고 "다음"을 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
            </>)
        if (recommend)
            return(<>
                {<div  className='dialog'>"{phone}" 님의 추천메뉴입니다.</div>}
                {this.state.show && <div  className='dialog_long'>원하시는 메뉴를 선택하고 "다음"을 눌러주세요. </div>}
                {this.state.show2 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
            </>)
        if (name == null && ingredient == null) return (<>
                {<div  className='dialog' id='answer'>모든 메뉴 보기</div>}
                {this.state.show && <div  className='dialog'>"모든 메뉴 보기"를 선택했습니다. </div>}
                {this.state.show2 && <div  className='dialog_long'>원하시는 메뉴를 선택하고 "다음"을 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
            </>)
    }

    optionyes(){
        //console.log(this.state.optionSelect);
        this.setState({optionSelect: 1});
    }
    optionno(){
        //console.log(this.state.optionSelect);
        this.setState({optionSelect: -1});
    }
    setmenu(){
        this.setState({set: 1});
    }
    singlemenu(){
        this.setState({set: -1});
    }
    render(){
        console.log(this.state.info);
        let order = null;
        let option=null;
        let ifset = null;
        let minioption=null;
        if(this.state.set > 0){
            ifset=<Setmenu set_price={this.state.info.setprice} name={this.state.menu}></Setmenu>
        }
        if(this.state.set < 0){
            ifset=<HowMany price={this.state.info.singleprice} menu={this.state.menu} drinkOrSide={"burgers"}></HowMany>
        }
        if(this.state.order){
            option=<><div className="dialog">{this.state.menu}(을)를 선택하셨습니다.</div></>
            //minioption=<><div className="dialog2"><button className="button" onClick={this.optionyes.bind(this)}>네.</button><button className="button" onClick={this.optionno.bind(this)}>아니요.</button></div></>
            console.log(this.state.optionSelect);
            if(true){
                //minioption=<div className='dialog' id='answer'>네</div>;
                order = <OptionChange name={this.state.menu} patty_count={this.state.info.patty_num} cheeze_count={this.state.info.cheeze} onion_state={this.state.info.onion} tomato_state={this.state.info.tomato} lettuce_state={this.state.info.raddish} sauce_state={this.state.info.sauce} single_price={this.state.info.singleprice} set_price={this.state.info.setprice}></OptionChange>
            }
            /*
            if(this.state.optionSelect < 0){
                //minioption=<div className='dialog' id='answer'>아니요</div>;
                order = <><div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                <div className="dialog2"><button className='button' onClick={this.singlemenu.bind(this)}>단품</button><button className='button' onClick={this.setmenu.bind(this)}>세트</button></div>{ifset}</>
            }*/
        }

        return(
            <div id='contain'>
                {this.results()}
                {option}
                {minioption}
                {order}

            </div>
        )
    }
}

export default ShowBurgers;