import React, { Component } from 'react';
import VideoList from './VideoList'
import './Playlist.css'

class Playlist extends Component {

    myText;

    myInput = (e) => {
        this.myText = e.target;
    }

    keyUp = (event) => {
        if(event.keyCode === 13){
           this.addToList();
        }
    }
    addToList = () => {
        let url = this.myText && this.myText.value;
        if(!url) return;

        console.log('add this to list: ' + url);
        this.props.addVideo(url);
        this.myText.value='';
    }

    render() {
        //const videos = this.props.videos;


        return (
            <div className="Playlist">
                <div className="txtVideo">{/*can be extracted to another component*/}
                    <input type="text" id="txtVideo" onChange={(e) => this.myInput(e)} placeholder="Enter youtube video url" onKeyUp={(e) => this.keyUp(e)}/>
                    <button onClick={this.addToList.bind(this)} >Add to list</button>
                </div>

                <VideoList videoIds={this.props.videos}></VideoList>
            </div>
        );
    }
}

export default Playlist;