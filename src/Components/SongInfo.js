import React from 'react';

const SongInfo = song => {
    console.log(song)
    

    return(

        <div>
            <div className="img">
                        <img src={song.song.currentSong.artwork} alt="none" className="art"/>
                    </div>
            <div className="songInfoContainer">
                <h4 className="songName">{song.song.currentSong.title}</h4>
                <span className="songArtist">{song.song.currentSong.artist}</span>
                <span className="songAlbum">{song.song.currentSong.album}</span>
            </div>
        </div>

    );
}

export default SongInfo;