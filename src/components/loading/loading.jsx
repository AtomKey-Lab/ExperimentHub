import React from 'react';
import loadingGif from './../../Assets/loading.gif';
import './loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default Loading;
