import { db } from '../Firebase';

export const GET_MUSIC = 'get_music';
export const FETCH_MUSIC = 'fetch_music';
export const STASH_URL = 'stash_url';
export const CURRENT_SONG = 'current_song';
export const GET_ART = 'get_art';

export const getMusic = () => {
    return dispatch =>{
    db.ref("music/tracks").on('value', music =>{
        dispatch({
            type: GET_MUSIC,
            payload: music.val()
            })
        })

    }
}

export const getArtwork = ()=>{
    return dispatch=>{
        db.ref('album-art/').on('value', artwork =>{
            dispatch({
                type: GET_ART,
                payload: artwork.val()
            })
        })
    }
}

export const storeUrls = (url) =>{
    return{
        type: STASH_URL,
        payload: url
    };

    
}

export const fetchMusic = () =>{
    return{
        type: FETCH_MUSIC,
        payload: getMusic()
    }
}

export const currentSong = (songId) =>{
    return{
        type: CURRENT_SONG,
        payload: songId
    }
}

 

