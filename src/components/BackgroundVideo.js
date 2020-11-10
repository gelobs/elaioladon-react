import React from "react";
import styled from "styled-components";
import videoSource from "../video/oliveoil.mp4";


export default function BackgroundVideo() {
  return (
      <VideoWrapper className="container-fluid">
      <video autoPlay="autoplay" width="100%" loop="loop">
        <source src={videoSource} type="video/mp4" />
      </video>
      </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
    position: relative;
    width: 75%;
    object-fit: contain;
    padding: 0;
`
