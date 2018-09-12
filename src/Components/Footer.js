import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import PlaylistAdd from 'material-ui/svg-icons/av/playlist-add';

import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline'
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import {music, artwork} from '../Reducers';
import {getMusic, getArtwork} from '../Actions/songs_actions';
import {connect} from 'react-redux';
import CurrentPlayingSong from './CurrentPlayingSong';

import {Line } from 'rc-progress';
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
        artwork: '',
    },
    perc: '',
    duration: null,
    currentTime: null,
  }

  componentWillMount(){
    this.props.getMusic();
    this.props.getArtwork();
   
//    Time delay to run logic
   setTimeout(()=>{
     const tracks = this.props.music.tracks;
     const songsArr = Object.values(tracks);
     const albumArt = this.props.artwork;
     const artArr = Object.values(albumArt);

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
            isPlayingSong: false
        })
        
        }
    })

}, 7000)
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
    this.setState({isPlayingSong: false, perc: 0})
}
// Skip song function
nextSong = () =>{
const x = document.getElementById('audio')

    this.setState({perc: 0})

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
     x.addEventListener('loadedmetadata', ()=>{
        const minutes = Math.floor(x.duration/60);
        const seconds = Math.round(x.duration - minutes *60) ;
        const songDuration = minutes+":"+seconds


        x.setAttribute('data-time', songDuration)
    })

     x.addEventListener('timeupdate', ()=>{
        const currTime = Math.floor(x.currentTime)
        const duration = Math.floor(x.duration)
        const perc = (currTime/duration)*100

        this.setState({perc: perc})

    })




     x.play();
    this.setState({isPlayingSong: true})

   
}
// End skip song fucntion
componentDidMount(){

    setTimeout(()=>{  

    const x = document.getElementById('audio')

    x.addEventListener('loadedmetadata', ()=>{
        const minutes = Math.floor(x.duration/60);
        const seconds = Math.round(x.duration - minutes *60) ;
        const songDuration = minutes+":"+seconds


        x.setAttribute('data-time', songDuration)
        this.setState({duration: songDuration})
    })

    x.addEventListener('timeupdate', ()=>{
        const currTime = Math.floor(x.currentTime)
        const duration = Math.floor(x.duration)
        const timeMinute = Math.floor(currTime/60)
        const timeSec= Math.round(currTime + timeMinute*60) 
        const perc = (currTime/duration)*100

        console.log(timeMinute, timeSec)

        this.setState({perc: perc})

    })


    }, 3000)
}

componentDidUpdate(){
    if(this.state.perc === 100){
        this.nextSong();
    }
}
// Previous song function
prevSong = () =>{
    const x = document.getElementById('audio')



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
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
        return(
            
            <div>
            <CurrentPlayingSong song={this.state}/>
            <Paper zdepth={5}>
    
            <Line percent={this.state.perc} strokeWidth="0.5" strokeColor="#ab47bc" />
            
            <div className="footerContainer">
                    <div className='mediaBtn'>
                <IconButton
                    iconStyle={styles.largeIcon}
                    onClick = {()=>this.prevSong()}
                >
                    <SkipPrevious color='white' hoverColor='grey'/>
                </IconButton>
                
                    {this.renderPlayButton()}
                <IconButton
                    iconStyle={styles.largeIcon}
                    onClick={()=>this.nextSong()}
                >
                    <SkipNext color='white' hoverColor='grey'/>
                </IconButton>
                <audio id="audio" className='audio' controls></audio>
                <span className="duration">{this.state.duration}</span>
                </div>
            </div>
            </Paper>
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