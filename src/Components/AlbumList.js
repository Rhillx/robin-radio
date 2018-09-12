import React, { Component } from 'react';
import albumArt from '../JSON/albumArt';
import {getArtwork} from '../Actions/songs_actions';
import {artwork} from '../Reducers';
import {connect } from 'react-redux';

import AlbumDetail from './AlbumDetail';


class AlbumList extends Component{
    state = {
        albums: []
    }


componentWillMount(){
    this.props.getArtwork();

}

componentWillReceiveProps(nextProps){
    if(nextProps.artwork != this.props.artwork){
        console.log(nextProps.artwork)
        this.setState({albums: nextProps.artwork})
    }
    
   
}

 renderAlbums = () => {
 const albumss = Object.values(this.state.albums)
    // console.log(albumss)
 return albumss.map(album =>

    <div className="album">
    <a href ={album.album}>
    <AlbumDetail key={album.album} album={album}/>
    </a>
    </div>

 )}

    render(){
        console.log(this.state.albums)
        return(
            <div className="albumList">
               {this.renderAlbums()}
            </div>
        )
    }
}

const mapStateToProps = ({artwork}) => ({artwork})

export default connect(mapStateToProps, {getArtwork})(AlbumList);