// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBCCa8gyaVUHfD5E9CV_hW4hd6jMf84GgI",
  authDomain: "bookie-81d8f.firebaseapp.com",
  projectId: "bookie-81d8f",
  storageBucket: "bookie-81d8f.appspot.com",
  messagingSenderId: "183034405741",
  appId: "1:183034405741:web:3a472f1525a0cfde16f064",
  measurementId: "G-9SC2EMMZXF",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth();
// auth

// buyer
const buyer = document.getElementsByClassName("buyeremail");
const buyerEmail = document.getElementsByClassName("email");
const buyerEmailConfirm = document.getElementsByClassName("confirm-email");
const continueButton = document.getElementsByClassName("continuebtn");

// seller

const admin = document.getElementsByClassName("seller");
const adminEmail = document.getElementsByClassName("adminemail");
const adminPassword = document.getElementsByClassName("password");
const signInBtn = document.getElementsByClassName("admin-sign-in");
const createAccBtn = document.getElementsByClassName("admin-create");

// create accont

const createAccont = document.getElementsById("create-acct");
const addAdminEmail = document.getElementsByClassName("add-admin-email");
const confirmAdminEmail = document.getElementsByClassName(
  "confirm-email-signup"
);
const createPassword = document.getElementsByClassName("create-admin-password");
const confirmPassword = document.getElementsByClassName(
  "confirm-password-signup"
);
const createAcctBtn = document.getElementsByClassName("create-acct-btn");
const returnBtn = document.getElementsByClassName("return-btn");

// buyer continue to explore

var email,
  password,
  signupEmail,
  signupPassword,
  confirmEmail,
  confirmCreatePassword;

continueButton.addEventlistener("click", function () {
  var isVerified = true;

  Email = buyerEmail.value;
  confirmEmail = buyerEmailConfirm.value;
  if (signupEmail != confirmSignupEmail) {
    windown.alert("Please check email for correction");
    isVerified = false;
  }
});

if (isVerified) {
  createUserWithEmailAndPassword(auth, Email, confirmEmail)
    .then((userCredential) => {
      window.location = "./main.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      window.alert("Error occurred. Try again.");
      window.alert(errorMessage);
    });
}
