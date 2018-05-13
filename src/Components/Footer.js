import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline'
import FastForward from 'material-ui/svg-icons/av/fast-forward';
import FastRewind from 'material-ui/svg-icons/av/fast-rewind';
import {music, artwork} from '../Reducers';
import {getMusic, getArtwork} from '../Actions/songs_actions';
import {connect} from 'react-redux';
import SongInfo from './SongInfo';
// import $ from 'jquery';





class Footer extends Component{
    state={
    songs: [],
    albumArt: [],
    isPlayingSong: false,
    currentSong: {
        artist: '',
        album: '',
        title: '',
        artwork: ''
    }
  }

  componentWillMount(){
    this.props.getMusic();
    this.props.getArtwork();
   
//    Time delay to run logic
   setTimeout(()=>{
     const tracks = this.props.music.tracks;
     const songsArr = Object.values(tracks);
     const albumArt = this.props.artwork
     const artArr = Object.values(albumArt)

    //  setting song state to list of songs
    this.setState({songs: this.state.songs.concat(songsArr)})
    this.setState({albumArt: this.state.albumArt.concat(artArr)})

     
    // Get audio Tag and set/remove attributes
     const x = document.getElementById('audio')
     const track = this.state.songs
     const randomTrack = Math.floor(Math.random() * track.length)
     const art = this.state.albumArt

    
    x.setAttribute('src', track[randomTrack].url)
    x.setAttribute('data-artist', track[randomTrack].artist)
    x.setAttribute('data-album', track[randomTrack].album)
    x.setAttribute('data-title', track[randomTrack].title)

    const currArtist = x.getAttribute('data-artist')
    const currAlbum = x.getAttribute('data-album')
    const currTitle = x.getAttribute('data-title')

    art.forEach(artURL =>{
        const currArtAlbum = artURL.album;
        const currArt = artURL.artURL;

        if(currArtAlbum === currAlbum){
        // Setting the state for the current song playing
        this.setState({currentSong: {
            artist: currArtist,
            album: currAlbum,
            title: currTitle,
            artwork: currArt
            },
            isPlayingSong: true
        })
        
        }
    })

}, 3000)
    //  End time delay for logic
}


// Play song function
playSong = () =>{
    const x = document.getElementById('audio')

     x.play();
    this.setState({isPlayingSong: true})
}
// pause song function
pauseSong =() =>{
    const x = document.getElementById('audio')

     x.pause();
    this.setState({isPlayingSong: false})
}
// Skip song function
nextSong = () =>{
const x = document.getElementById('audio')

    const art = this.state.albumArt
    const track = this.state.songs
    const randomTrack = Math.floor(Math.random() * track.length)
    x.removeAttribute('src')
    x.removeAttribute('data-artist')
    x.removeAttribute('data-album')
    x.removeAttribute('data-title')
    x.setAttribute('src', track[randomTrack].url)
    x.setAttribute('data-artist', track[randomTrack].artist)
    x.setAttribute('data-album', track[randomTrack].album)
    x.setAttribute('data-title', track[randomTrack].title)

    const currArtist = x.getAttribute('data-artist')
    const currAlbum = x.getAttribute('data-album')
    const currTitle = x.getAttribute('data-title')

    art.forEach(artURL =>{
        const currArtAlbum = artURL.album;
        const currArt = artURL.artURL;

        if(currArtAlbum === currAlbum){
            this.setState({currentSong: {
                artist: currArtist,
                album: currAlbum,
                title: currTitle,
                artwork: currArt
                }
            })
        }
    })
     x.play();
    this.setState({isPlayingSong: true})
}
// End skip song fucntion


// Previous song function
prevSong = () =>{
    const x = document.getElementById('audio')

    console.log('====================================');
    
     console.log(this.state);
      
    console.log('====================================');
}


// Play/Pause button render
renderPlayButton(){
    if(this.state.isPlayingSong){
        return (
            <IconButton
                    iconStyle={styles.largeIcon}
                    onClick = {()=>this.pauseSong()}
                >
                    <PauseCircleOutline color='white' hoverColor='grey'/>
                </IconButton>
        )
    } else {
        return (
            <IconButton
                    iconStyle={styles.largeIcon}
                    onClick = {()=>this.playSong()}
                >
                        <PlayCircleOutline color='white' hoverColor='grey'/>
                </IconButton>
        )
    }
}



    render(){
       
        return(
            <div>
            <SongInfo song={this.state}/>
            <div className="footer">
                    <div className='mediaBtn'>
                <IconButton
                    iconStyle={styles.largeIcon}
                    onClick = {()=>this.prevSong()}
                >
                    <FastRewind color='white' hoverColor='grey'/>
                </IconButton>
                
                    {this.renderPlayButton()}
                <IconButton
                    iconStyle={styles.largeIcon}
                    onClick={()=>this.nextSong()}
                >
                    <FastForward color='white' hoverColor='grey'/>
                </IconButton>
                <audio id="audio" className='audio' controls preload='auto'></audio>
                </div>
            </div>
            </div>
            
        )
    }
}

const styles = {
  largeIcon: {
    width: 30,
    height: 30,
    
    }
}


const mapStateToProps = ({music, artwork}) => ({music, artwork});

export default connect(mapStateToProps, {getMusic, getArtwork})(Footer);