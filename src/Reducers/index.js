import {combineReducers} from 'redux';
import { music, songUrls, currentSong, artwork} from './songs_reducer';
// import music from './music_reducer';

// import data from './dummyDataRed';




const rootReducers = combineReducers({

    music,
    songUrls,
    currentSong,
    artwork,
})

export default rootReducers;