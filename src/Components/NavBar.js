import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Drawer, IconButton} from 'material-ui';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';

// import {Close, Menu} from '@material-ui/icons';




class Navi extends Component{

state = { drawerOpen: false}

 _handleClick = () => {
  console.log('CLICKED');
}

_toggleDrawer = () =>{
  if(this.state.drawerOpen){
    this.setState({drawerOpen: false})
  }else{
    this.setState({drawerOpen: true})
  }
}



  render(){
 
    return(
      <MuiThemeProvider>
      <IconButton onClick={this._toggleDrawer} color="white">
        <Menu/>
      </IconButton>
      <Drawer open={this.state.drawerOpen}>
          
      <IconButton variant="fab" color="primary" aria-label="add" onClick={this._toggleDrawer}>
      <Close/>
      </IconButton>
      </Drawer>
      </MuiThemeProvider>

    )
  }
}

export default Navi;