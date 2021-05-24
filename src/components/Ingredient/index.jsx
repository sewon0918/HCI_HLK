import React from 'react';
import './index.css';
import 소 from '../../images/cow.png';
import 닭 from '../../images/chicken.png';
import 새우 from '../../images/shrimp.png';
import 비건 from '../../images/carrot.png';
import ShowBurgers from '../ShowBurgers';

class Ingredient extends React.Component {
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
        },1000) 
        setTimeout(()=>{
            this.setState({show3: true})
        },2000) 
     }

    menuClick(id){
        const elements = document.getElementsByClassName("ingred");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
            elements[i].style.border='1px solid black';
        }
        console.log(id)
        document.getElementById(id).style.backgroundColor = 'lightpink';
        document.getElementById(id).style.border = '3px solid red';
        this.setState({ingredient: id, submitted: false})
    
        // console.log("jj")
    }
    onSubmit() {
        const name = document.getElementById("name").value;
        console.log(name);
        this.setState({name: name, submitted: true}); 
    }
    click(e){
        console.log(e);
        this.setState({ingredient: e, submitted: false})
    }
    submit() {
        console.log("확인");
        this.setState({submitted: true});
    }

    render(){
        const submitted = this.state.submitted;
        let showResult = null;
        if (submitted) {
            showResult = <ShowBurgers ingredient={this.state.ingredient}></ShowBurgers>
        }
        return(
            <div>
                {<div  className='dialog' id='answer'>주재료로 찾기</div>}
                {this.state.show2 && <div  className='dialog_long'>원하시는 재료를 선택하고 확인버튼을 눌러주세요. </div>}
                {this.state.show3 && <><table width="70%"><tbody>
                    <div className='dialog2'>
                    <tr>
                        <td><img id = "소" className="ingred" src={ 소 } alt="menu1" onClick={this.menuClick.bind(this, "소")}/></td>
                        <td><img id = "치킨" className="ingred" src={ 닭 } alt="menu1" onClick={this.menuClick.bind(this, "치킨")}/></td>
                        <td><img id = "새우" className="ingred" src={ 새우 } alt="menu1" onClick={this.menuClick.bind(this, "새우")}/></td>
                        <td><img id = "비건" className="ingred" src={ 비건 } alt="menu1" onClick={this.menuClick.bind(this, "비건")}/></td>                        
                    </tr>
                    <tr>
                        <th>소</th><th>치킨</th><th>새우</th><th>비건</th>
                    </tr></div></tbody>
                </table>
                <button id='ingredChoice'onClick={this.submit.bind(this)}>확인</button>
                {showResult}</>}
                
            </div>
        )
    }
}

export default Ingredient;