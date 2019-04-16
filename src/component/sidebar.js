import React from "react";
import { SideNav, Nav } from "react-sidenav";
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as Navigation,
  ExampleBody as Body
} from "./containers";
import Playlist from './playlist'
import Player from './player'
import list from '../jsons/library1.json'

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
    }
  }
  
  state = { selectedPath: "1" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  handleClick = (e) =>{
   this.setState({cc:e})
  } 

  render() {
    console.log("lists>>>>", list)
    console.log("cc value",this.state.cc)
    const postItems = list.map(product => (
   <Nav><a onClick={() => this.handleClick(product.id)} >{product.title}</a></Nav>

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
          </SideNav>
        </Navigation>
        <Body >
            {this.state.cc && <Player list={list[this.state.cc - 1]} counter={this.state.cc}/>}
        </Body>
      </AppContainer>
    );
  }
}
