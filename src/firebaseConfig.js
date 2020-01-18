import Firebase from 'firebase';

import {firebaseConfig} from  '../firebaseConfig.js';

// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenu = db.ref('menu');
export const dbOrders = db.ref('orders');