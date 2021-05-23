import React, { useState } from 'react';
import './index.css';
import ShowBurgers from '../ShowBurgers';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import burger from '../../Data/burger.json';
import { useSpeechRecognition } from 'react-speech-kit';

var word = '';
function Voice() {
    const [value, setValue] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
      onResult: (result) => {
        // 음성인식 결과가 value 상태값으로 할당됩니다.
        result = result.split(' ').join('')
        setValue(result);
        word = result;
      },
    });
  
    return (
      <div>
        <div>{value}</div>
        <button onClick={listen}>
          시작
        </button>
        <button onClick={stop}>
          끝
        </button>
        {listening && <div>음성인식 활성화 중</div>}
      </div>
    );
  }

class NameSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", submitted: false, show: false, show2: false, show3: false, transcript:""};
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
        var name = document.getElementById("auto").value;
        if (word !== ''){
            name = word;
        }
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
                {this.state.show && <div  className='dialog' id='answer'>이름으로 찾기 </div>}
                {this.state.show2 && <div  className='dialog'>버거 이름을 아래 칸에 입력하고 확인버튼을 눌러주세요. </div>}
                {this.state.show3 && <div> 
                    {<Autocomplete
                        id='auto'
                        freeSolo={true}
                        options={menulist}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="버거 이름" variant="outlined" />}
                    />}
                    <button onClick = {this.onSubmit.bind(this)}> 확인 </button>
                    <Voice />
                </div>}
                {showResult}
            </div>
        )
    }
}


const menulist = burger;
export default NameSearch;