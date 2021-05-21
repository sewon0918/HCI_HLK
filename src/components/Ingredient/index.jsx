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
    menuClick(id){
        const elements = document.getElementsByClassName("ingred");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        console.log(id)
        document.getElementById(id).style.backgroundColor = 'yellow';
        this.setState({ingredient: id, submitted: false})
    
        // console.log("jj")
    }

    render(){
        const submitted = this.state.submitted;
        const name = this.state.name;
        const Q1 = "소"
        let showResult = null;
        if (submitted) {
            showResult = <ShowBurgers ingredient={this.state.ingredient}></ShowBurgers>
        }
        return(
            <div>
                {this.state.show && <div  className='dialog'>"주재료로 찾기"를 선택했습니다. </div>}
                {this.state.show2 && <div  className='dialog'>원하시는 재료를 선택하고 확인버튼을 눌러주세요. </div>}
                {this.state.show3 && <><table width="70%"> 
                    <tr>
                        <td><img id = "소" className="ingred" src={ 소 } alt="menu1" onClick={this.menuClick.bind(this, "소")}/>
                        <div>소</div></td>
                        <td><img id = "치킨" className="ingred" src={ 닭 } alt="menu1" onClick={this.menuClick.bind(this, "치킨")}/>
                        <div>치킨</div></td>
                        <td><img id = "새우" className="ingred" src={ 새우 } alt="menu1" onClick={this.menuClick.bind(this, "새우")}/>
                        <div>새우</div></td>
                        <td><img id = "비건" className="ingred" src={ 비건 } alt="menu1" onClick={this.menuClick.bind(this, "비건")}/>
                    <div>비건</div></td>                        
                    </tr>

                </table>
                <button onClick={this.submit.bind(this)}>확인</button>
                {showResult}</>}
                
            </div>
        )
    }
}

export default Ingredient;