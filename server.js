const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.static(__dirname + '/public'));


const youtubeUrl = 'https://www.googleapis.com/youtube/v3/videos?id={videoId}&fields=items(id,snippet(channelId,title,categoryId),contentDetails)&part=snippet,statistics,contentDetails&key=AIzaSyCbjnsW7xO-cPJI2ZIjrTVGFXINWxyKbzU';



app.get('/api/video/:videoId', (req, res) => {
    let videoId = req.params.videoId;
    request(youtubeUrl.replace('{videoId}', videoId), function(err, res, body){
        res.send(body);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));