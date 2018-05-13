import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Drawer, IconButton} from 'material-ui';
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
        // this is for menu button icon
      </IconButton>
      <Drawer open={this.state.drawerOpen}>
          
      <IconButton variant="fab" color="primary" aria-label="add" onClick={this._toggleDrawer}>
      //  this is for close button icon
      </IconButton>
      </Drawer>
      </MuiThemeProvider>

    )
  }
}

export default Navi;