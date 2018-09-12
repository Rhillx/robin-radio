import React, { Component } from 'react';

import {music, artwork} from '../Reducers';
import {getMusic, getArtwork} from '../Actions/songs_actions';
import {connect} from 'react-redux';
import CurrentPlayingSong from './CurrentPlayingSong';
import MediaControl from './MediaControl';



class TrackPlayer extends Component {
    state = { 
        art: null,
        songs: null,
        artist: '',
        album: '',
        title: '',
        artwork: '',
        isPlayingSong: false
     }


    componentWillMount(){
        this.props.getArtwork();
        this.props.getMusic();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props){

            const art = Object.values(nextProps.artwork)
            const songs = Object.values(nextProps.music)
            this.setState({art, songs})

            setTimeout(()=>{
        const x = document.getElementById('audio');
        const song = this.state.songs;
        const random = Math.floor(Math.random() * song.length);

        x.setAttribute('src', song[random].url )
        x.setAttribute('data-artist', song[random].artist )
        x.setAttribute('data-album', song[random].album )
        x.setAttribute('data-title', song[random].title )

        const artist = x.getAttribute('data-artist');
        const album = x.getAttribute('data-album');
        const title = x.getAttribute('data-title');
    
        return this.state.art.map(cover => {
            const coverTitle = cover.album;

            if(coverTitle === album){
                this.setState({
                    artist: artist,
                    album: album,
                    title: title,
                    artwork: cover.artURL,
                })
            }
        })

        }, 8000);

        
    }
}

playSong = () => {
     const x = document.getElementById('audio')

     x.play();
     this.setState({isPlayingSong: true})
 }

nextSong = () => {

        const x = document.getElementById('audio');
        const song = this.state.songs;
        const random = Math.floor(Math.random() * song.length);

        x.setAttribute('src', song[random].url )
        x.setAttribute('data-artist', song[random].artist )
        x.setAttribute('data-album', song[random].album )
        x.setAttribute('data-title', song[random].title )

        const artist = x.getAttribute('data-artist');
        const album = x.getAttribute('data-album');
        const title = x.getAttribute('data-title');
    
        return this.state.art.map(cover => {
            const coverTitle = cover.album;

            if(coverTitle === album){
                this.setState({
                    artist: artist,
                    album: album,
                    title: title,
                    artwork: cover.artURL,
                    isPlayingSong: true
                })
            }
        })

        x.play();
}


     




    render() {
     console.log(this.state)
     console.log(this.props)
        return (
            <div>
                <CurrentPlayingSong song={this.state}/>
                <MediaControl 
                    play={()=> this.playSong()}
                    next={()=> this.nextSong()}
                />
       
           
            </div>
        );
    }
}

const mapStateToProps = ({artwork, music}) => ({artwork, music});

export default connect(mapStateToProps, {getArtwork, getMusic})(TrackPlayer);