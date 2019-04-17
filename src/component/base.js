import Rebase from 're-base';
import firebase from 'firebase';
const config={
    apiKey: "AIzaSyB8AA9TZd4PQT-fR7z-E3z7QPO-2srf4rA",
    authDomain: "grap-tab.firebaseapp.com",
    databaseURL: "https://grap-tab.firebaseio.com",
    projectId: "grap-tab",
    storageBucket: "grap-tab.appspot.com",
    messagingSenderId: "767571602414"
};
const app=  firebase.initializeApp(config);
const database=firebase.database();
const ref=database.ref('signUpDetails');
const ref2=database.ref('videoRecord');
const ref3=database.ref('grap-tab').child('videoRecord');
const loginCre=app.database().ref().child("email" &&  "password");
const base=Rebase.createClass(app.database());
ref2.once('value',gotdata,errdata)
const rootref=firebase.database().ref().child('signUpDetails');
 function gotdata(data)
{
  console.log("videolist data");
  console.log(data.val());
}

 function errdata (err)
{
  console.log("inside err");
  console.log(err);
}
export {app,base,ref,loginCre,ref2}
 
