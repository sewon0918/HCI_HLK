import firebase from "firebase";
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiHqqW2KmDb8jYrTWPlLz8nO_k2KII-Ro",
        authDomain: "helloburger-1508d.firebaseapp.com",
        projectId: "helloburger-1508d",
        storageBucket: "helloburger-1508d.appspot.com",
        messagingSenderId: "566629365401",
        appId: "1:566629365401:web:e170df1d413fa0ab062a08"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);


// 필요한 곳에서 사용할 수 있도록 내보내기
export default firebase ;