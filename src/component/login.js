import React, { Component } from 'react'
import firebase from 'firebase'
import Welcome from './welcome';
import Message from './message'


class Login extends Component {
    constructor(props) {
      super(props)
    //this.login = this.login.bind(this);
      this.state = {
         email : '',
         password : ''
      }
    }

    login=(e) =>{
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        // firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ...
        //   });
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    // componentWillMount(){
    //     console.log("in cmp w m")
    //     const config = {
    //         apiKey: "AIzaSyB8AA9TZd4PQT-fR7z-E3z7QPO-2srf4rA",
    //         authDomain: "grap-tab.firebaseapp.com",
    //         databaseURL: "https://grap-tab.firebaseio.com",
    //         projectId: "grap-tab",
    //         storageBucket: "grap-tab.appspot.com",
    //         messagingSenderId: "767571602414"
    //       };
    //       firebase.initializeApp(config);
    // }
  render() {
      console.log("in render", this.state.user)
    return (
      <div className="container">
      <div id="login" style={{textAlign:'center',margin:'250px', border:'2px solid blue', height:200, width:200}}>
        <form onSubmit={this.login}>
        <input style={{padding:'10px'}} type='Email' placeholder='Email' id="email" onChange={this.handleChange} /><br /><br/>
        <input style={{padding:'10px'}} type='password' placeholder='Password' id="password" onChange={this.handleChange} /><br /><br />
        <button style={{padding:'3px'}} type='submit' > Login </button>
        </form>
        </div>
        
      </div>
    )
  }


}
export default Login;



// firebase.auth().onAuthStateChanged(function(user) {
//     console.log("in fire auth")
//     if (user) {
//       // User is signed in.

//     //   document.getElementById("login").style.display = "block";
//     //   document.getElementById("welcome").style.display = "none";
//     } else {
//       // No user is signed in.
//     //   document.getElementById("login").style.display = "none";
//     //   document.getElementById("welcome").style.display = "block";
//     }
//   });


// <div class="wrapper">
// 	<div class="container">
// 		<h1>Welcome</h1>
		
// 		<form class="form">
// 			<input type="text" placeholder="Username">
// 			<input type="password" placeholder="Password">
// 			<button type="submit" id="login-button">Login</button>
// 		</form>
// 	</div>
