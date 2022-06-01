
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'
import { getDatabase,ref,child,set,get } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js"

// import { analytics } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7nNqYFOgu9JRvyNnYqfOnrhfpEfasbBg",
  authDomain: "web-view-counter.firebaseapp.com",
  projectId: "web-view-counter",
  storageBucket: "web-view-counter.appspot.com",
  messagingSenderId: "947701022392",
  appId: "1:947701022392:web:f6593f9cbc171ca6433e4d",
  measurementId: "G-SDX1Q283LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//********************************************************* */
// creating variables
var userViews=123;
// write
// const database = getDatabase(app);
// set(ref(database, 'gavin/'), {clicks: 2});

// read
const dbRef = ref(getDatabase());
get(child(dbRef, `gavin/clicks`)).then((snapshot) => {
  if (snapshot.exists()) {
    // console.log(snapshot.val());
    userViews=snapshot.val();
    userViews=userViews+1;
    // console.log(userViews);
    const database = getDatabase(app);
    set(ref(database, 'gavin/'), {clicks: userViews});
    document.getElementById('footerText').innerHTML="Total number of visitors: "+userViews;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

//increament implementation
// userViews++;
// userViews=userViews+1;
console.log(userViews);




