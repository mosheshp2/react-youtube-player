import React, { Component } from 'react';


export default class VideoList extends Component {

    getVideos = () => {
        return this.props.videoIds;
    }

    render(){
        const rows = [];
        this.getVideos().forEach((videoId) => {
            //TODO: resolve id to video text and duration;

            rows.push(
                <li key={videoId}>{videoId}</li>
            );
        });
        return(
            <div className="VideoList">
                <p>Videos:</p>
                <ul>
                    {rows}
                </ul>

            </div>
        );
    }
}
