import React from 'react';
import './index.css';

class OptionChange extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div  className='dialog'>원하시는 옵션을 선택해주세요.</div>
        )
    }
}
export default OptionChange;