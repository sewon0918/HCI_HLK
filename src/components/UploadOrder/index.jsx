import React from 'react';
import './index.css';
import firebase from '../../Firebase';

class UploadOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:false, show2:false, show3:false, end:false, phone_number:this.props.phone_number}
        this.upload = this.upload.bind(this);
    }

    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },1500);
        setTimeout(()=>{
            this.setState({show2: true})
         },3000);
         setTimeout(()=>{
            this.setState({show3: true})
         },4500);
         if(this.state.phone_number !== ''){
             this.upload();
         }
     }
    
    upload(){
        var phone_number = '';
        if (this.state.phone_number !== ''){
            phone_number = this.state.phone_number;
        }else {
            phone_number = document.getElementById('phone_number').value;
        }
        var menu = [];

        firebase.database().ref('recommendation/').on('value', function(snapshot){
            var myValue = snapshot.val();
            if (myValue!=null){
                var keyList = Object.keys(myValue)
            }
            if (keyList != null){
                for (var i=0; i<keyList.length; i++){
                    if(keyList[i] == phone_number){
                        menu = myValue[String(phone_number)];
                    }
                }
            }
        })
        setTimeout(()=>{
            firebase.database().ref('menu/').on('value', function(snapshot){
                var myValue = snapshot.val();
                if (myValue!=null){
                    var keyList = Object.keys(myValue)
                }
                if (keyList != null){
                    for (var i=0; i<keyList.length; i++){
                        if (myValue[i].category == 'burgers' || myValue[i].category == 'set'){
                            if (!(menu.includes(myValue[i].name))){
                                menu.push(myValue[i].name);
                            }
                        }
                    }
                }
            })
         },2000);
        setTimeout(()=>{
            firebase.database().ref('recommendation/'+phone_number).set(menu);
         },4000);
        this.setState({end:true});
    }

    render(){
        let finish = null;
        let no_phone = null;
        if (this.state.end){
            finish = <div className='dialog_cart'>감사합니다</div>
        }
        if (this.state.phone_number == ''){
            no_phone = <div>
            {this.state.show && <div className='dialog_cart' >주문기록 기반 추천서비스를 원하시면</div>}
            {this.state.show2 && <div className='dialog_cart'>전화번호를 입력해주세요</div>}
            {this.state.show3 && <div className='dialog_cart'><input id='phone_number' />
             <button id='phone' className='button' onClick={this.upload}>확인</button></div>}
        </div>
        }
        return(
            <div>
                {no_phone}
                {finish}
            </div>
        )
    }
}

export default UploadOrder;