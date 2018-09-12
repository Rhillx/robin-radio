import React from 'react';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline'
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import IconButton from 'material-ui/IconButton';




const styles = {
  largeIcon: {
    width: 45,
    height: 45,
    // backgroundColor: 'red',
    paddingBottom: 10,
    
    },
    btn:{
        padding: 0,
        display: 'flex',
        justingContent: 'center',
        alignItems: 'center',
    }
}





const MediaControl = (props) => (

        <div className='mediaBtn'>
                <IconButton
                    iconStyle={styles.largeIcon}
                    
                >
                    <SkipPrevious color='white' hoverColor='grey' style={styles.btn} />
                </IconButton>
                <IconButton
                    iconStyle={styles.largeIcon}
                    onClick={props.play}
                >
                    <PlayCircleOutline color='white' hoverColor='grey'/>
                </IconButton>
                <IconButton
                    iconStyle={styles.largeIcon}
                    onClick={props.next}
                >
                    <SkipNext color='white' hoverColor='grey'/>
                </IconButton>
                <audio id="audio" className='audio' controls></audio>
                <span className="duration">5:00</span>
        </div>

);

export default MediaControl;