import React from 'react';
import './index.css';
import UserInformation from '../UserInformation';

class SelectMethod extends React.Component {
    constructor(props) {
        super(props);
        this.recommend = this.recommend.bind(this);
        this.state = {isRecommend: 0, phone: "", show: false, show2: false};
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

    recommend(){
        console.log("dskj")
        this.setState({isRecommend: 1}); 
    }

    render(){
        const isRecommend = this.state.isRecommend;
        let ifRecommend = null;
        if (isRecommend > 0) {
            ifRecommend = <UserInformation />
        }
        return(
            <div>
                {this.state.show && <div className = 'dialog'>어서오세요. 헬로버거입니다!</div>}
                {this.state.show2 && <div className = 'dialog'>주문하실 방식을 선택해주세요.
                
                
                
                </div>}
                {this.state.show2 &&<div  className = 'dialog2'  >
                    <button id="name" className = 'button'> 이름으로 찾기 </button>
                    <button id="ingredient" className = 'button'> 주재료로 찾기 </button>
                    <button id="recommend" className = 'button' onClick = {this.recommend}> 추천받기 </button>
                    <button id="all" className = 'button'> 모든 메뉴 보기 </button>
                </div>}
                {ifRecommend}


                
            </div>
        )
    }
}

export default SelectMethod;