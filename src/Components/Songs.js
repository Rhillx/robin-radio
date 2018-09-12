import React, { Component } from 'react';

import {connect} from 'react-redux';

import {getMusic, getArtwork} from '../Actions/songs_actions';
import {music, artwork} from '../Reducers';
import {ListItem, List} from 'material-ui/List';
import {Link} from 'react-router-dom';


class Songs extends Component {
    state = { 
        songs: [],
        art: []
     }

    componentWillMount(){
        this.props.getArtwork();
        this.props.getMusic();

    }


    componentWillReceiveProps(nextProps){

        if(nextProps !== this.props){

            const songs = Object.values(nextProps.music)
            const art = Object.values(nextProps.artwork)
           this.setState({songs, art})

        }


    }

 

                     
    renderSongs = () => {
         this.state.songs.map(song => {
            <div> 
           <Link to={song.url}>
                    <ListItem
                        key = {song.id}
                        primaryText = {song.title}
                        secondaryText = {song.album}
                        onClick={() => this.playSong(song.url)}
                    />
            </Link>
            </div>
       
            });
        }

    render() {

        return (
            <div className="song-list">
                <List>
                  {this.renderSongs()}
                  heyyyyy
                </List>
            </div>
        )
    }
}

const mapStateToProps = ({music, artwork}) => ({music, artwork});

export default connect(mapStateToProps, {getMusic, getArtwork})(Songs);