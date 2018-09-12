import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Drawer, IconButton} from 'material-ui';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';

import {Link} from 'react-router-dom';

// import {Close, Menu} from '@material-ui/icons';

const style = {
  drawer: {
    backgroundImage: ' linear-gradient(#6C30C4, lightgray)'
  }
}


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
      <div>
      <IconButton onClick={this._toggleDrawer} color="white">
        <Menu color='white'/>
      </IconButton>
      <Drawer open={this.state.drawerOpen} style={style.drawer}>
      <Close onClick={this._toggleDrawer}/>
      <div className="drawer-item">
                    <Link to="/">
                       <RaisedButton label="Robin Radio" labelColor="#6C30C4" fullWidth={true}/>
                    </Link>
                </div>

                <div className="drawer-item">
                    <Link to="/albums">
                        <RaisedButton label="Albums" labelColor="#6C30C4" fullWidth={true} />
                    </Link>
                </div>
            
                <div className="drawer-item">
                    <Link to="/records">
                        <RaisedButton label="Songs" labelColor="#6C30C4" fullWidth={true} />
                    </Link>
                </div>
                <div className="drawer-item">
                    <Link to="/playlist">
                        <RaisedButton label="Playlist" labelColor="#6C30C4" fullWidth={true} />
                    </Link>
                </div>
      </Drawer>
      </div>

    )
  }
}

export default Navi;