import React, { Component } from 'react';
import YouTube from 'react-youtube'
import './player.css'
class Player extends Component {

    loadNext(){
        this.props.loadNextVideo();
    }

    componentDidMount() {
        //https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCbjnsW7xO-cPJI2ZIjrTVGFXINWxyKbzU&fields=items(id,snippet(channelId,title,categoryId),contentDetails)&part=snippet,statistics,contentDetails
    }


    render() {
        let text = '';
        function onStateChange(event, e){
            console.log(event, e);
            switch(event.data) {
                case 0:
                    text='video ended ';
                    this.loadNext();

                    break;
                case 1:
                    text='video playing ' + event.target.getDuration();
                    break;
                case 2:
                    text='video paused at ' + event.target.getCurrentTime();
                    break;
                default:
                    text='other'  ;
                    break;
            }
            console.log(text);

        };

        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: this.props.videoId ? 1 : null
            }
        };
        return (
            <div className="Player">
                <h3>Video in player: {this.props.videoId}</h3>
                <YouTube videoId={this.props.videoId} onStateChange={onStateChange.bind(this)} opts={opts} />
                <div>{text}</div>
            </div>
        );
    }
}

export default Player;