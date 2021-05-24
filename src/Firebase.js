import firebase from "firebase";
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4DHLmx6UfS5vnwIgpsyWVWmshXG54Jss",
    authDomain: "hci-hlk-f2fb4.firebaseapp.com",
    databaseURL: "https://hci-hlk-f2fb4-default-rtdb.firebaseio.com",
    projectId: "hci-hlk-f2fb4",
    storageBucket: "hci-hlk-f2fb4.appspot.com",
    messagingSenderId: "107533714020",
    appId: "1:107533714020:web:9d788582b11733b01f9571",
    measurementId: "G-X9MWCVJ3L1"
};

// firebaseConfig 정보로 firebase 시작
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// 필요한 곳에서 사용할 수 있도록 내보내기
export default firebase ;