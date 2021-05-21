import React from 'react';
import './index.css';
import ShowBurgers from '../ShowBurgers';

class NameSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", submitted: false};
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
    onSubmit() {
        const name = document.getElementById("name").value;
        console.log(name);
        this.setState({name: name, submitted: true}); 
    }

    render(){
        const submitted = this.state.submitted;
        const name = this.state.name;
        let showResult = null;
        if (submitted) {
            showResult = <ShowBurgers name={name}></ShowBurgers>
        }
        return(
            <div>
                <div  className='dialog'>"이름으로 찾기"를 선택했습니다. </div>
                <div  className='dialog'>"버거 이름을 아래 칸에 입력하고 확인버튼을 눌러주세요. </div>
                <div> 
                    <input id = "name"/> 
                    <button onClick = {this.onSubmit.bind(this)}> 확인 </button>
                </div>
                {showResult}
                
            </div>
        )
    }
}

export default NameSearch;