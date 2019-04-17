import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Playlist from './playlist';

export default class player extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  url:'',
        //  start:null,
        //  end:null, 
        //  count:0,
        //  play:""
      }
    }
    // componentWillMount(){

    //   this.setState({count:this.props.counter})
    //   console.log('cmWM prop count',this.props.count)
    //   console.log('cmWM state count',this.state.count)
    //     this.setState({url:this.props.lists[this.state.count].url,
    //         start:this.props.lists[this.state.count].start,
    //         end:this.props.lists[this.state.count].stop,
            

    //     })
    // }
    // componentWillUpdate
    // componentWillUpdate(){
    //   this.setState({count:this.props.counter})
  
    //     this.setState({url:this.props.lists[this.state.count].url,
    //         start:this.props.lists[this.state.count].start,
    //         end:this.props.lists[this.state.count].stop,
    //       })

    // }
    // setcounter = () =>{
    //     this.setState({count:this.state.count + 1})
    // }

    // onStop = () =>{
    //     console.log('In onStop count', this.state.count)
    //     console.log('In onStop function')
        
    //     this.setcounter()
    //     this.setState({
    //         count:this.state.count++,
    //         url:this.props.lists[this.state.count].url,
    //         start:this.props.lists[this.state.count].start,
    //         end:this.props.lists[this.state.count].stop

    //     })
        // this.setcounter()
        
        // const count = this.setState.count;


    // }
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('in scu count', this.state.count)
//         if(this.state.url == this.props.lists[this.state.count].url) {
//              return true
//         }
//         return false
//    }
  render() {
      console.log('props...>',this.props)
      // console.log('render Count ', this.state.count)
      // console.log('render url ', this.state.url)
      // console.log('this.props.list.start----',this.props.list.start)
      // console.log('this.props.list.end----',this.props.list.stop)
      
      
    return (
      <div>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing /> */}
        <ReactPlayer
  url={this.props.list.videoURl}
  controls="true"
  youtubeConfig={{
    playerVars: {
      start: this.props.list.startTime,
      end:this.props.list.endTime
    }
  }}
  playing
onReady={()=>this.setState({play:"playing"})}

//   onEnded={this.onStop} 
onEnded={this.onStop}
/>
      </div>
    )
  }
}


// _setIndex() {
//     return (this.state.index == this.state.videos.length-1) ? 0 : this.state.index++
// }

// render() {
//     return (
//        <div>
//            <ReactPlayer url={this.state.videos[this.state.index]} playing onEnded={() => this.setState({ index: this._setIndex()})} />
//        </div>
//     )
// }

