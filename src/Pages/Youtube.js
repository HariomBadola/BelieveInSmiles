import React from 'react';
import YouTube from 'react-youtube';
import './Youtube.css'

const Youtube = () => {
    const videoId = "iobL3zAdb9Y";
  
    const opts = {
       
      playerVars: {
        autoplay: 0,
         
      },
    };
  
    return (
        <div className='video-container'>
    <YouTube videoId={videoId} opts={opts} />
    </div>
    );
    
  };
  export default Youtube