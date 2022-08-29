import React from 'react';
import ReactLoading from 'react-loading';

function Loading({ type, color }) {
  return <ReactLoading type={type} color={color} height={667} width={375} />;
}

export default Loading;
