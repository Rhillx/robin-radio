import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardSubtitle} from 'material-ui/Card';



const styles = {
    height: 100,
    width: 100
}


const AlbumDetail = props =>(


    <div>
        <Card>
           <CardMedia>
            <img src={props.album.artURL} alt="none"/>
            </CardMedia>
        </Card>
    </div>
);


export default AlbumDetail;