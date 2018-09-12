import React from 'react';
import '../index.css';
import Navi from './NavBar';
import SearchButton from './SearchButton';
import Paper from 'material-ui/Paper';

import logoTrans from '../Images/white_logo_color_background.jpg';



const styles ={
    height: 50,
    width: 120,
    color: 'white',
}

const Header = props => {
    return(
        <Paper zDepth={3} style={{marginBottom: 40}}>
        <div className="headerContainer">
        <div className="navButton">
            <Navi/>
        </div>
        <div className="headerText">
            <img src={logoTrans} alt='none' style={styles}/>
        </div>
        <div className="searchButton">
            <SearchButton/>
            
        </div >
        </div>
        </Paper>
    )
}

export default Header;