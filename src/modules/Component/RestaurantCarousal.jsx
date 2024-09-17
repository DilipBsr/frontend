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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div className="m-5 mx-10 ">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {Restaurant.map((item)=>(
            <div className='lg:px-36 sm:px-0'>
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
