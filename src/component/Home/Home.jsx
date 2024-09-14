import React from 'react'
import "../../CSS/Home.css";
import Multicarousal from './Multicarousal';
import Search from './Search'
import Card from './Card';
function Home() {
  return (
    <div>
        <section className='banner w-100 h-52 lg:h-lvh mb-5 flex relative justify-center items-center -z-50'>
        
        </section>
      <section className='body '>
      <center className='flex flex-wrap justify-center '>
      <Multicarousal/>
      <Search/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </center>
      </section>
    </div>
  )
}

export default Home;
