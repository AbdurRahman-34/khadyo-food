import React from 'react';
import video from './not-found.mp4'

const NotFound = () => {

    return (
        <video muted autoPlay loop controls = '' width="100%" height="700px">
          <source src={video} type="video/webm" />
          <source src="./not-found.mp4" type="video/mp4"
  />
          Sorry, your browser doesn't support videos.
        </video>
      );
    };

export default NotFound;