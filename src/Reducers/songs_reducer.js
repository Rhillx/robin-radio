import {GET_MUSIC, STASH_URL, CURRENT_SONG, GET_ART} from '../Actions/songs_actions';

export const music = (state = [], action) =>{
    switch(action.type){
        case GET_MUSIC:
            return action.payload;
        default:
            return state;
    }
};

export const songUrls = (state = [], action)=>{
    switch(action.type){
        case STASH_URL:
            return [action.payload].concat(action.payload);
        default:
            return state;
    }
}

export const currentSong = (state=null, action)=>{
    switch(action.type){
        case CURRENT_SONG:
            return action.payload;
        default:
            return state;
    }
}

export const artwork =(state=null, action)=>{
    switch(action.type){
        case GET_ART:
            return action.payload;
        default:
            return state;
    }
}