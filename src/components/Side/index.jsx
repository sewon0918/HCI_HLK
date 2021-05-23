import React from 'react';
import ShowSides from '../ShowSides';

class Side extends React.Component {
    constructor(props){
        super(props);
        this.state={show:false, show1:false, show2:false};
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
        },1500)  
    }

    render(){
        let showside = <ShowSides />
        return(
            <div>
                {this.state.show && <div className = 'dialog' id='answer'>사이드 메뉴</div>}
                {this.state.show2 && <div className = 'dialog'>원하시는 메뉴를 선택해주세요.</div>}
                {this.state.show3 && showside}
            </div>
        )
    }
}

export default Side;