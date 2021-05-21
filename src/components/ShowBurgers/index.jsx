import React from 'react';
import './index.css';
<<<<<<< HEAD
import burgers from '../../Data/burger.json'
import OptionChange from '../OptionChange';
=======
import 고추장 from '../../images/1.png';
import 직화 from '../../images/2.png';
import burgers from '../../Data/burger.json';
>>>>>>> 4049d6ae3a21eaa247150e96f98750a52adf3bf6

class ShowBurgers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu: "", results: 0, order: false, show: false, show2: false, show3: false, query:""};
    }


    menuClick(id){
        const elements = document.getElementsByClassName("showBurger");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border="3px solid white";
        }
        console.log(id)
        document.getElementById(id).style.border = '3px solid red';
        this.setState({menu: id, order: false}); 
    
        // console.log("jj")
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
            if (name != null) {
                console.log("name");
                if (name != "" && burgername.includes(name)) {
                    num += 1;
                    return (
                        <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername)}>
                            <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.jpg`).default } alt="menu_class"/>
                            <div className="name">{burgername}</div>
                        </div>);
                }
                else return (null);
            }
            else if (ingredient !== null) {
                console.log("ingred");
                if (key.ingredient === ingredient){
                    num += 1;
                    return (
                        <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername)}>
                            <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.jpg`).default } alt="menu_class"/>
                            <div className="name">{burgername}</div>
                        </div>);
                }
                else return (null);
            }
            else {
                console.log("show all");
                return (
                    <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername)}>
                        <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.jpg`).default } alt="menu_class"/>
                        <div className="name">{burgername}</div>
                    </div>);
            }
        })
        if (name != null && num === 0) 
            return (<>
                {this.state.show && <div className="dialog">검색 결과가 없습니다. 입력한 내용을 다시 확인해주세요</div>}
            </>)
        if (name != null)
            return (<>
                {this.state.show && <div  className='dialog'>"{name}"에 대한 검색 결과입니다. </div>}
                {this.state.show2 && <div  className='dialog'>원하시는 메뉴를 선택하고 주문하기를 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div><button onClick={this.orderMenu.bind(this)}>주문하기</button></>}
            </>)
        if (ingredient != null) 
            return (<>
                {this.state.show && <div  className='dialog'>주재료가 {ingredient}인 햄버거입니다. </div>}
                {this.state.show2 && <div  className='dialog'>원하시는 메뉴를 선택하고 주문하기를 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div><button onClick={this.orderMenu.bind(this)}>주문하기</button></>}
            </>)
        if (name == null && ingredient == null) return (<>
                {this.state.show && <div  className='dialog'>"모든 메뉴 보기"를 선택했습니다. </div>}
                {this.state.show2 && <div  className='dialog'>원하시는 메뉴를 선택하고 주문하기를 눌러주세요. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div><button onClick={this.orderMenu.bind(this)}>주문하기</button></>}
            </>)
    }

    render(){
        let order = null;
        if (this.state.order) {
            order = <OptionChange name={this.state.menu} ></OptionChange>
        }
        return(
            <div>
                {this.results()} 
                {order}


                
            </div>
        )
    }
}

export default ShowBurgers;