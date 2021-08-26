import React from 'react';

const VideoMain = () => {
  return (
    <div className="col-md-8">
      <div>
        <iframe 
          width="100%" 
          height="480" 
          src="https://www.youtube.com/embed/4BZw4r-7zfo" 
          title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
      <div>
        <h1 className="h5">
          Youssoupha​ #MONROI #NEPTUNETERMINUS Youssoupha - MON ROI (Clip officiel).
        </h1>
      </div>
      <hr />
    </div>
  )
}

export default VideoMain;
