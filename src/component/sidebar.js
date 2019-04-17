import React from "react";
import { SideNav, Nav } from "react-sidenav";
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as Navigation,
  ExampleBody as Body
} from "./containers";

import Player from './player'
import list from '../jsons/library1.json'
import AddVideo from './uploadform'
import axios from 'axios';

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const theme = {
  selectionColor: "#C51162"
};

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cc:null,
       show:false,
       video:[]
    }
  }
  
  state = { selectedPath: "1" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  handleClick = (e) =>{
    console.log("event",e)
   this.setState({cc:e})
  } 

  onButtonclick = () =>{
    this.setState({show:true})
    if(this.state.show==true){
      this.setState({show:false})
    }
   
  }

  componentDidMount() {
    axios.get('https://grap-tab.firebaseio.com/videoRecord.json')
    .then(res => this.setState({video:  Object.values(res.data)})
    )
    .catch(err=>{
      console.log(err.response.data)
    })
    console.log('state from CDM',this.state.video)
  }



  render() {
    //this.state.video.indexOf(product.videoTitle
    // console.log('Video element ', ref2.once('value', ()))
    console.log("lists>>>>", list)
    console.log("cc value",this.state.cc)
    console.log("videovalue",this.state.video)
    const postItems = this.state.video.map((product, index) => (
   <Nav><a onClick={() => this.handleClick(index + 1)} >{product.videoTitle}</a></Nav>

    ));
    return (
      <AppContainer>
        <Navigation>
          <SideNav
            defaultSelectedPath="1"
            theme={theme}
            onItemSelection={this.onItemSelection}
          >
            <Nav id="1">
              My Library
            {postItems}
            </Nav>
            <button onClick={this.onButtonclick}>Add vedio</button> 
            {/* <Button onClick={this._onButtonClick}>Button</Button> */}
        {/* {this.state.show ?
           <AddVideo /> :
           null
        } */}
          </SideNav>
        </Navigation>
        <Body >
        {this.state.show ?
           <AddVideo /> :
           null
        }
            {this.state.cc && <Player list={this.state.video[this.state.cc - 1]} counter={this.state.cc}/>}
        </Body>
      </AppContainer>
    );
  }
}
