// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore ,collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9Ui4E4a1mj2_loZYW0EsSbA4XP0Xz7CQ",
  authDomain: "billii.firebaseapp.com",
  projectId: "billii",
  storageBucket: "billii.firebasestorage.app",
  messagingSenderId: "174226187167",
  appId: "1:174226187167:web:5d73c015ccf19874a553aa",
  measurementId: "G-70Y0JNLKHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
console.log(analytics)
console.log(db)

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'Organizacion');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

getCities(db);