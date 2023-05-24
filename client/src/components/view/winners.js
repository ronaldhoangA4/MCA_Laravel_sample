import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import Model from '../model';

const Winners = () => {
  const[videos, setVideos] = useState([{id:0, name:'', youtubeId:''}]);
  Model.fetch('/getVideos').then(response => { setVideos(response); setCurrentVideo(videos[0].youtubeId) });

  const [currentVideo, setCurrentVideo] = useState(videos[0].youtubeId);
  const selectVideo = (youtubeId) => {
    setCurrentVideo(youtubeId);
  };
  
  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Winners</title>
      </Helmet>
      <section>
        <div class="box title">
          <h1>Winners</h1>
        </div>
      </section>
      <h1>Winners's Delivery Video</h1>
      <div class="horizontal-flex">
        <div className="flex-item">
          <ReactPlayer url={'https://www.youtube.com/watch?v='+ currentVideo} playing loop controls />
        </div>
        <div className="vertical-flex">
          {videos.map((video) => (
            <div
              role="tab"
              key={video.youtubeId}
              className={`video-item ${currentVideo === video.youtubeId ? 'playing' : ''}`}
              onClick={() => selectVideo(video.youtubeId)}
            >
              <img src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`} alt={`${video.name}`} />
              <label>{video.name}</label>
            </div>
          ))}
        </div>
      </div>
      <section>
        <div class="box">
          <h1>Recent live draw videos</h1>
          <ul>
            <li><a href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=620580016613664" name="1 Day Maloo GTS-R">1 Day Maloo GTS-R </a></li>
            <li><a href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=620580016613664" name="Harley Davidson CVO Street Glide">Harley Davidson CVO Street Glide </a></li>
            <li><a href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=197615695935038" name="VIP RAM 2500">VIP RAM 2500 </a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Winners;
