import React from 'react';
import './index.css';
import ShowBurgers from '../ShowBurgers';

class NameSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", submitted: false, show: false, show2: false, show3: false};
    }
    componentDidMount(){
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


    menuClick(id){
        const elements = document.getElementsByClassName("menu");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        console.log(id)
        document.getElementById(id).style.backgroundColor = 'yellow';
    }
    onSubmit() {
        const name = document.getElementById("search").value;
        console.log(name);
        this.setState({name: name, submitted: true}); 
    }
    handlePress = (e) => {
        if (e.key === "Enter") {
            this.onSubmit();
        }
    }

    render(){
        const submitted = this.state.submitted;
        let showResult = null;
        if (submitted) {
            showResult = <ShowBurgers name={this.state.name}></ShowBurgers>
        }
        return(
            <div>
                {this.state.show && <><div  className='dialog' id='answer'>이름으로 찾기 </div>
                <br className='clear'/>
                <br className='clear'/>
                <br className='clear'/></>}
                {this.state.show2 && <div  className='dialog'>버거 이름을 아래 칸에 입력하고 확인버튼을 눌러주세요. </div>}
                {this.state.show3 && <><div> 
                    <input id = "search" onKeyPress={this.handlePress.bind(this)} autoFocus/> 
                    <button onClick = {this.onSubmit.bind(this)}> 확인 </button>
                </div>{showResult}</>}
                
                
            </div>
        )
    }
}

export default NameSearch;