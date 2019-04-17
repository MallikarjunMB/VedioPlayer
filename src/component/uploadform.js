
import React,{Component} from 'react';


import firebase from 'firebase';

import {app,ref,ref2} from './base';






export default class Uploadform extends Component
{

constructor(props)
{
  super(props);
  this.state ={
    videoTitle:null,
    videoDesc:null,
    startTime:null,
    endTime:null,
    userId:null,
    videoURl:null,
    formErrors :{
      videoTitle:"",
      videoDesc:"",
      startTime:"",
      endTime:"",
      videoURl:""
    },
    success:""
  }
this.saveUploadVideoDetails=this.saveUploadVideoDetails.bind(this);
}
 saveUploadVideoDetails =() =>
{
  var user = firebase.auth().currentUser.email;
  console.log("inisde user --",user);

  console.log("inisde save --",this.state.videoURl);
  var data={
  videoTitle:this.state.title,
  startTime:this.state.startTime,
  endTime:this.state.endTime,
  videoURl:this.state.url,
  userId:user
  }
    console.log("ref---",ref);

  ref2.push(data)
  .then(()=>
{
  console.log("inide then -----");
  this.props.history.push('/');
})
.catch (()=> {
  console.log("inide catch -----");

  // app.auth().createUserWithstartTimeAndendTime(username,endTime)
  console.log("inside sign up catch");
  this.setState({error:"Error while savig data.."})
})
}


handleSubmit = e=>
{
  console.log("inside submit");
  e.preventDefault();
  
    console.log(`--Submit---,{videoTitle:${this.state.videoTitle} videoDesc:${this.state.videoDesc} startTime:${this.state.startTime} endTime:${this.state.endTime}`);
    //this.props.storeValues(this.state
    this.saveUploadVideoDetails()


    // app.auth().writeUserData(this.state.videoTitle,this.state.videoDesc,this.state.startTime,this.state.endTime)
    // console.log("after create in signup");
    // this.setState({success:"Registration Done Successfully..." })
}

handleChange = e =>
{
  e.preventDefault();
  const{name, value}=e.target;

  this.setState({[name]:value },() => console.log(this.state))

}


  render()
  {
     const {formErrors}=this.state;
    return(
        <div>
      <form onSubmit={this.handleSubmit} noValidate>
      <label>Video Title</label>
      <input type='text' name='title' onChange={this.handleChange} />
      <br /><br />
      <label>Video Url</label>
      <input type='text' name='url' onChange={this.handleChange} />
      <br /><br />
      <label>Start Time</label>
      <input type='text' name='startTime' onChange={this.handleChange} />
      <br /><br />
      <label>End Time</label>
      <input type='text' name='endTime' onChange={this.handleChange} />
      <br /><br />

      <button type='submit'>Upload</button>

      </form>
    </div>
    );
  }
}


