import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    IconButton, 
    Dialog,
    TextField} from 'material-ui';
// import {Search, Close} from '@material-ui/icons';



class SearchButton extends React.Component{

state = {modalIsOpen: false}

_toggleModal = () =>{
    if(this.state.modalIsOpen){
        this.setState({modalIsOpen: false})
    }else{
        this.setState({modalIsOpen: true})
    }
}

    render(){

        return(
            <MuiThemeProvider>
            <IconButton onClick={this._toggleModal}>
                <Search/>
            </IconButton>
            <Dialog open={this.state.modalIsOpen}>
                <div className="searchCloseBtn">
                    <IconButton variant="fab" color="primary" aria-label="add" onClick={this._toggleModal}>
                        <Close />
                    </IconButton>
                </div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="search"
                        label="search"
                        type="text"
                        placeholder="search for Album, Artist or Song title"
                        fullWidth
                     />
            </Dialog>
            </MuiThemeProvider>
        )
    }
}

export default SearchButton;