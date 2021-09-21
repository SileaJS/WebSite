// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBb9d0h1NOUqhPcJKkomUpwvdXa7C6bO28",
	appId: "1:427173895301:web:7850aa63dccb907e17ddec",
	authDomain: "sileajs.firebaseapp.com",
	databaseURL: "https://sileajs.firebaseio.com",
	measurementId: "G-2KTSBJ1HZB",
	messagingSenderId: "427173895301",
	projectId: "sileajs",
	storageBucket: "sileajs.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);
