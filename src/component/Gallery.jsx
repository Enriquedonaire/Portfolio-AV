import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const Gallery = ({images}) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);



const handleImageClick = (url) => {
  const videoId = url.split('/').pop();
  console.log("error", videoId ) 
    setSelectedVideoId(videoId);
  window.location.href = `/video/${videoId}`;
  
};

  return (
    <section className="slider container-fluid">
      <div className="row all">
        {images.map((image) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-0" key={image.id}>
            <div className="item" onClick={() => handleImageClick(image.url)} >
              <div className="line-top"></div>
              <img src={image.imagePath} width="100%" height="100%" alt={image.alt} />
              <div className="item-alt">
                <div className="line-top"></div>
                <img src={image.altImagePath} width="100%" height="100%" alt={image.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedVideoId && <VideoPlayer videoUrl={selectedVideoId} />}
    </section>
  );
};

export default Gallery;

