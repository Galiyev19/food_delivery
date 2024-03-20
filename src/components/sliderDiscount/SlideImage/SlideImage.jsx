import React from 'react'


import "./SlideImage.css"

const SlideImage = ({slide}) => {
   
    return (
    <div className='slide_container'>
        <img className='slide_img' src={slide.url}/>
    </div>
  )
}

export default SlideImage