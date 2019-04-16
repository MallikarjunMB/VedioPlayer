import React, { Component } from 'react'
import Navbar from './navBar'
import Sidebar from './sidebar'

export default class Welcome extends Component {
  render() {
    return (
      <div>
       
        <Navbar />
        <Sidebar />
        
      </div>
    )
  }
}