import React from 'react';

const CurrentPlayingSong = song => (

        <div>
            <div className="img">
                        <img src={song.song.artwork} alt={song.song.album} className="art"/>
                    </div>
            <div className="songInfoContainer">
                <h4 className="songName">{song.song.title}</h4>
                <span className="songArtist">{song.song.artist}</span>
                <span className="songAlbum">{song.song.album}</span>
            </div>
        </div>

);
    
    

   


export default CurrentPlayingSong;