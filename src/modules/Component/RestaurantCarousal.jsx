import React, { useState } from 'react'
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

//Components
import { Restaurant } from '../../assets/Store/Restaurant';
import Card from './Card';

function RestaurantCarousal() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="m-5 flex-col items-center justify-center">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {Restaurant.map((item)=>(
            <div className='px-4 lg:px-36 md:px-48'>
              <Card key={item.place} location={item.place} image={item.image}/>
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
