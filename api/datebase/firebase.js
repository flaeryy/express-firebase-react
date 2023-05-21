const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getStorage, ref, getDownloadURL } = require("firebase/storage");
require("dotenv").config();
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
console.log("firebase");

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase);
const storage = getStorage(firebase);

module.exports = { db, storage };
