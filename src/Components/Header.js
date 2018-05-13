import React from 'react';
import '../index.css';
import Navi from './NavBar';
import SearchButton from './SearchButton';
import Paper from 'material-ui/Paper';





const Header = props => {
    return(
        <Paper elevation={10}>
        <div className="headerContainer">
        <div className="navButton">
            <Navi/>
        </div>
        <div className="headerText">
            <h2>{props.headerTitle}</h2>
        </div>
        <div className="searchButton">
            <SearchButton/>
            
        </div >
        </div>
        </Paper>
    )
}

export default Header;