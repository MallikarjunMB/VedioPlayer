import React, { Component } from 'react'
import list from '../jsons/library1.json'
import Player from './player'

export default class Playlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    
    componentWillMount(){
        this.setState({count:this.props.count})
    }
    
  render() {
      console.log('list..>',list)
    return (
      <div>
        {/* <Player lists={list} count={this.state.count}/> */}
      </div>
    )
  }
}



