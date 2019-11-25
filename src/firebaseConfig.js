import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBBN7ZdtXz6ZlWyvviOeD3xCzUw526Dwl4",
    authDomain: "pizza-planet-5ca8f.firebaseapp.com",
    databaseURL: "https://pizza-planet-5ca8f.firebaseio.com",
    projectId: "pizza-planet-5ca8f",
    storageBucket: "pizza-planet-5ca8f.appspot.com",
    messagingSenderId: "153894857749",
    appId: "1:153894857749:web:d29ac4f14e623e7c58b21c"
};

// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenu = db.ref('menu');
export const dbOrders = db.ref('orders');