import React from "react";
import styled from "styled-components";
import videoSource from "../video/oliveoil.mp4";


export default function BackgroundVideo() {
  return (
      <VideoWrapper className="container-fluid">
      <video autoPlay="autoplay" loop="loop">
        <source src={videoSource} type="video/mp4" />
      </video>
      </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
    position: relative;
    height: 100vh;
    object-fit: contain;
    width: 80%;
    overflow: hidden;
`
