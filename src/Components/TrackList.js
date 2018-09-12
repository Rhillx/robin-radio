import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getMusic} from '../Actions/songs_actions';
import {music} from '../Reducers';




class TrackList extends Component {
    state = { 
        tracks: null
     }


componentWillMount(){
    this.props.getMusic();
}

componentWillReceiveProps(nextProps){
    // console.log(this.props.music)

    if(nextProps.music !== this.props.music){

        const music = Object.values(nextProps.music)

       music.map(data =>{
        //    console.log(data)
        this.setState({tracks:data});
       })

    }
}









    render() {

        console.log(this.props)
        console.log("state is" + this.state)
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = ({music}) => ({music});

export default connect(mapStateToProps, {getMusic})(TrackList);   
