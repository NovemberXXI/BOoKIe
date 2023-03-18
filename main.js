// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  confirmUserWithEmailAndConfirmEmail,
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

var email,
  confirmEmail,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;
// buyer
const userLog = document.querySelector(".buyer");
const buyerEmail = document.querySelector(".email");
const buyerEmailConfirm = document.querySelector(".confirm-email");
const continueButton = document.querySelector(".continuebtn");

// seller

const admin = document.querySelector(".seller");
const adminEmail = document.querySelector(".adminemail");
const adminPassword = document.querySelector(".password");
const signInBtn = document.querySelector(".admin-sign-in");
const createAccBtn = document.querySelector(".admin-create");

// create accont

const createAccont = document.querySelector("#create-acct");
const addAdminEmail = document.querySelector(".add-admin-email");
const confirmAdminEmail = document.querySelector(".confirm-email-signup");
const createPassword = document.querySelector(".create-admin-password");
const confirmPassword = document.querySelector(".confirm-password-signup");
const createAcctBtn = document.querySelector(".create-acct-btn");
const returnBtn = document.querySelector(".return-btn");

// buyer continue to explore

continueButton.addEventListener("click", function () {
  window.location = "./main.html";
});
