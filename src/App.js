import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/player';
import Player from "./components/player";
import Playlist from "./components/Playlist";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videoIds: []//"https://www.youtube.com/watch?v=dsxwFHfhzHA", "https://www.youtube.com/watch?v=pThq2qGZqoc"]
        };
    }
    nextVideo = () => {
        console.log('load Next Video');
        let nextState = this.state.videoIds.splice(1);
        this.setState({
            videoIds: nextState
        });
    }
    addVideo = (video) => {
        let videos = this.state.videoIds.concat(video);
        this.setState({
            videoIds: videos
        });
    }
    getVideo(){
        let vid = this.state.videoIds.length > 0 && this.state.videoIds[0];
        return vid && vid.indexOf('v=') > 0 && vid.substr(vid.indexOf('v=') + 2);
    }
  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Youtube playlist player</h1>
        </header>
        <div className="videoSection">
            <Playlist videos={this.state.videoIds} addVideo={this.addVideo.bind(this)}/>
            <Player videoId={this.getVideo()} loadNextVideo={this.nextVideo} />
        </div>
      </div>
    );
  }//"dsxwFHfhzHA"["
}

export default App;
