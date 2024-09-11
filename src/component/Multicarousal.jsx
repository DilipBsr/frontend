import React, { useState } from 'react'
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

function Multicarousal() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="multipic slider-container w-screen p-10">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div>
          <h3>
            <img src="src\assets\images\burger-.jpg" alt="Image" />
          </h3>
        </div>
        <div>
          <h3><img src="src\assets\images\burger-.jpg" alt="Image" /></h3>
        </div>
        <div>
          <h3><img src="src\assets\images\burger-.jpg" alt="Image" /></h3>
        </div>
        <div>
          <h3><img src="src\assets\images\burger-.jpg" alt="Image" /></h3>
        </div>
        <div>
          <h3><img src="src\assets\images\burger-.jpg" alt="Image" /></h3>
        </div>
        <div>
          <h3><img src="src\assets\images\burger-.jpg" alt="Image" /></h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center", display:'block', width:'100%' }}>
        <button className="button" onClick={play}>
          <PlayArrowIcon/>
        </button>
      </div>
    </div>
  );
}

export default Multicarousal;
