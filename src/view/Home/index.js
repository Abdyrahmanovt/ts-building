import React from 'react'
import HeroVideo from "../Video/“IHLAS RESIDENCE».mp4"


const Home = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted
                   className='hero-video'
            >
                <source src={HeroVideo} type='video/mp4'/>
            </video>
        </div>
    );
};

export default Home;