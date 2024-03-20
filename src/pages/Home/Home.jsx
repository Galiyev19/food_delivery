import React from 'react'

import SliderDisocount from '../../components/sliderDiscount/SliderDisocount';

import "./Home.css"

const Home = () => {

    return(
    <div className='home_container'>
        <h2 className='title_var_2'>Акции</h2>
        <SliderDisocount/>
    </div>
    )
}

export default Home;