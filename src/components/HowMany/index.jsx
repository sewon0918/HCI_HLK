import React from 'react';
import './index.css'

class HowMany extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:false, show2: false, show3: false, number: 1, finish: false};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.pass = this.pass.bind(this);
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

    plus(){
        const changed = this.state.number + 1;
        this.setState({number: changed});
    }

    minus(){
        if (this.state.number > 1){
            const changed = this.state.number - 1;
            this.setState({number: changed});
        }
    }

    pass(){
        this.setState({finish: true});
    }

    render(){
        const {menu} = this.props;
        const number = this.state.number;
        let finish = null;
        if (this.state.finish){
            // finish = <Select menu={menu} number={number}/>
        }
        return(
            <div className='parent2'>
                {this.state.show && <div className = 'dialog'><h3>{menu}를 선택하셨습니다.</h3></div>}
                {this.state.show2 && <div className = 'dialog'><h3>개수를 선택해주세요.</h3></div>}
                {this.state.show3 && 
                    <div id='changeNumber'>
                        <div className='number'>{number}</div><div className='number'>개</div>
                        <button className='number' onClick={this.plus}>+</button><button onClick={this.minus} className='number'>-</button>
                        <button id='okay' className='number' onClick={this.pass}>선택</button>
                        <br className='clear' />
                    </div>
                }
                {/* {finish} */}
            </div>
        )
    }
}

export default HowMany;