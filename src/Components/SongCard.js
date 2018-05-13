import React, {Component} from 'react';
import {Card, CardTitle, CardMedia} from 'material-ui';

import '../index.css';






class SongCard extends Component{

    render(){
        return(
            
            <Card>
            <CardMedia>
                <img src="../Images/akeys.jpg" alt="none" className="songCardImg" />
            </CardMedia>
                <CardTitle title="Piano" subtitle="Alicia Keys" />
            </Card>
            

        )
    }
}

export default SongCard;