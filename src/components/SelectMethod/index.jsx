import React from 'react';
import './index.css';
import Recommendation from '../Recommendation';
import ShowBurgers from '../ShowBurgers';
import NameSearch from '../NameSearch';
import Ingredient from '../Ingredient';
import 이름 from '../../images/name.png';
import 재료 from '../../images/ingredient.png';
import 추천 from '../../images/recommend.png';
import 모두 from '../../images/all.png';

class SelectMethod extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.name.bind(this);
        this.ingredient = this.ingredient.bind(this);
        this.recommend = this.recommend.bind(this);
        this.all = this.all.bind(this);
        this.state = {isName: 0, isIngredient: 0, isRecommend: 0, isAll: 0, phone: "", show: false, show2: false};
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },1000)
        setTimeout(()=>{
            this.setState({show2: true})
        },2000) 
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
        this.setState({isName: 1, isIngredient: 0, isRecommend: 0, isAll: 0}); 
    }

    ingredient(){
        console.log("ingredient")
        this.setState({isName: 0, isIngredient: 1, isRecommend: 0, isAll: 0}); 
    }

    recommend(){
        console.log("recommend")
        this.setState({isName: 0, isIngredient: 0, isRecommend: 1, isAll: 0}); 
    }

    all(){
        console.log("all")
        this.setState({isName: 0, isIngredient: 0, isRecommend: 0, isAll: 1}); 
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
            ifRecommend = <Recommendation />
        }

        const isAll = this.state.isAll;
        let ifAll = null;
        if (isAll > 0) {
            ifAll = <ShowBurgers name={null} ingredient={null}/>
        }
        return(
            <div>
                {<div className = 'dialog' id='answer'>버거</div>}
                {this.state.show && <div className = 'dialog'>버거를 주문하실 방식을 선택해주세요.</div>}
                {this.state.show &&<div  className = 'dialog2'  >
                    <button id="name" className = 'button' onClick = {this.name}><img id='nameimg' src={ 이름 } /> <div>이름으로 찾기</div> </button>
                    <button id="ingredient" className = 'button' onClick = {this.ingredient}><img id='ingredientimg' src={ 재료 } /> <div>주재료로 찾기</div> </button>
                    <button id="recommend" className = 'button' onClick = {this.recommend}><img id='recommendimg' src={ 추천 } /> <div>추천받기</div> </button>
                    <button id="all" className = 'button' onClick = {this.all}><img id='allimg' src={ 모두 } /> <div>모든 메뉴 보기</div> </button>
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