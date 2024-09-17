import React, { useState } from 'react'
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { TopItems } from '../../assets/Store/topItems';

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
    <div className='multipic slider-container w-screen p-5 '>
    <Slider ref={slider => (sliderRef = slider)} {...settings}>
          {TopItems.map((item)=>(
            <div key={item.dish}>
              <h3>
                <img className='w-28 h-28 p-2 lg:w-64 lg:h-64 rounded-full' src={item.image}  alt="Image" />
                <span>{item.dish}</span>
              </h3>
            </div>
          ))}
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
