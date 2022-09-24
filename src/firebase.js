import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBNm053q6TodvHVe4Glv49kfqmeqG60G84",
    authDomain: "mychat-4ed18.firebaseapp.com",
    projectId: "mychat-4ed18",
    storageBucket: "mychat-4ed18.appspot.com",
    messagingSenderId: "17933225427",
    appId: "1:17933225427:web:7cfe238c8ba68fac213326",
  })
  .auth();
