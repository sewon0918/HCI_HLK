import React from 'react';
import './index.css';
import UserInformation from '../UserInformation';
import ShowBurgers from '../ShowBurgers';
import NameSearch from '../NameSearch';
import Ingredient from '../Ingredient'

class SelectMethod extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.name.bind(this);
        this.ingredient = this.ingredient.bind(this);
        this.recommend = this.recommend.bind(this);
        this.all = this.all.bind(this);
        this.state = {isName: 0, isAll: 0, isIngredient: 0, isAll: 0, phone: "", show: false, show2: false};
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },1000)
        setTimeout(()=>{
            this.setState({show2: true})
        },3000) 
     }

    menuClick(id){
        const elements = document.getElementsByClassName("menu");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        console.log(id)
        document.getElementById(id).style.backgroundColor = 'yellow';
    
        // console.log("jj")
    }
    name(){
        console.log("name")
        this.setState({isName: 1}); 
    }

    ingredient(){
        console.log("ingredient")
        this.setState({isIngredient: 1}); 
    }

    recommend(){
        console.log("recommend")
        this.setState({isRecommend: 1}); 
    }

    all(){
        console.log("all")
        this.setState({isAll: 1}); 
    }

    render(){
        const isName = this.state.isName;
        let ifName = null;
        if (isName > 0) {
            ifName = <NameSearch/> 
        }

        const isIngredient = this.state.isIngredient;
        let ifIngredient = null;
        if (isIngredient > 0) {
            ifIngredient = <Ingredient/> 
        }

        const isRecommend = this.state.isRecommend;
        let ifRecommend = null;
        if (isRecommend > 0) {
            ifRecommend = <UserInformation />
        }

        const isAll = this.state.isAll;
        let ifAll = null;
        if (isAll > 0) {
            ifAll = <ShowBurgers name={null} ingredient={null}/>
        }
        return(
            <div>
                {this.state.show && <div className = 'dialog'>어서오세요. 헬로버거입니다!</div>}
                {this.state.show2 && <div className = 'dialog'>주문하실 방식을 선택해주세요.
                
                
                
                </div>}
                {this.state.show2 &&<div  className = 'dialog2'  >
                    <button id="name" className = 'button' onClick = {this.name}> 이름으로 찾기 </button>
                    <button id="ingredient" className = 'button' onClick = {this.ingredient}> 주재료로 찾기 </button>
                    <button id="recommend" className = 'button' onClick = {this.recommend}> 추천받기 </button>
                    <button id="all" className = 'button' onClick = {this.all}> 모든 메뉴 보기 </button>
                </div>}
                {ifName}
                {ifIngredient}
                {ifRecommend}
                {ifAll}


                
            </div>
        )
    }
}

export default SelectMethod;