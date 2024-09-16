import React, { useState } from 'react'
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Restaurant } from '../../assets/Data/Restaurant';

function RestaurantCarousal() {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div className="pl-10 pr-10 gap-10 w-screen flex-wrap items-center justify-center">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {Restaurant.map((item)=>(
          <div key={item.place} className='pl-5 pr-5'>
             <img src={item.image} alt="Restaurnat"/>
              {item.place}
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

export default RestaurantCarousal;
