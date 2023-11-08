import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/sass/VideoPlayer.scss'; // Asegúrate de tener el archivo CSS importado correctamente

const VideoPlayer = () => {
  const location = useLocation();
  const videoId = location.pathname.split('/').pop();

  if (!videoId) {
    return <div>No video URL provided</div>;
  }

  const vimeoUrl = `https://player.vimeo.com/video/${videoId}`;

  return (
    <div className="video-player-container">
      <iframe
        src={vimeoUrl}
        className="video-player-frame"
        autoPlay
        allowFullScreen
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
