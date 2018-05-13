import {FETCH_MUSIC} from '../Actions/songs_actions';

const FETCH_MUSIC_PENDING = 'fetch_music_pending';
const FETCH_MUSIC_FULFILLED = 'fetch_music_fulfilled';
const FETCH_MUSIC_REJECTED = 'fetch_music_rejected';

const INT_STATE = {
    status: '',
    music: [],
}


export default (state = INT_STATE, action)=>{
    switch(action.type){
        case FETCH_MUSIC_PENDING:
            return {...state, status: 'pending'};
            break;
        case FETCH_MUSIC_FULFILLED:
            return {...state, music: action.payload, status: 'recieved' };
            break;
        case FETCH_MUSIC_REJECTED:
            return {...state, status:`${action.payload.message}`};
        default:
            return state;
    }
}