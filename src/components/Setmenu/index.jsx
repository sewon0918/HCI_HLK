import React from 'react';
import './index.css';
import ShowDrinks from '../ShowDrinks';
import ShowSides from '../ShowSides';
class Setmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            price:this.props.price
        }
    }


    render(){
        let drinks=<ShowDrinks/>
        let sides=<ShowSides/>
        return(
            <div>
                <div className='dialog'>세트 선택하셨습니다.</div>
                <div className='dialog'>음료 먼저 선택해주세요.</div>
                {drinks}
                <div className='dialog'>사이드를 선택해주세요.</div>
                {sides}
                <div>세트 주문이 완료되었습니다.</div>
            </div>

        )
    }

}
export default Setmenu;