import React, { Component } from 'react'
import Login from './login'
import Welcome from './welcome'
import firebase from 'firebase'

export default class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:{}
      }
    }
 
  render() {
    return (
      <div >
          {this.state.user ? (<Welcome />) : (<Login />)}
        {/* {this.state.user &&
          <button onClick={() => firebase.auth().signOut()}>LogOUT</button>
        } */}
      </div>
    )
  }
  componentDidMount = () => {
      console.log('in cmpt did M')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
        // User is signed in.

      //   document.getElementById("login").style.display = "block";
      //   document.getElementById("welcome").style.display = "none";
      } else {
          this.setState({user:null})
        // No user is signed in.
      //   document.getElementById("login").style.display = "none";
      //   document.getElementById("welcome").style.display = "block";
      }
  });  
  }
}
