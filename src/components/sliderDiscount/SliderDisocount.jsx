import React, {useRef} from 'react'
import SlideImage from './SlideImage/SlideImage'
import { GrNext,GrPrevious } from "react-icons/gr";
import "./SliderDisocount.css"

const slides = [
  {
    id: 1,
    url: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/7383bea2-e2ca-11ee-9350-4a8d0ea0ae1e_c152d103_604c_48fc_9400_f8dff8f06e4d.png",title:"test1"},
  {
    id: 2,
    url: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/c2c70974-dab9-11ee-b124-06de50b92d93_a1e65263_ea8b_46f5_a441_72483a3294ca.png",title:"test2"},
  {
    id: 3,
    url: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/70b11898-d9f9-11ee-b29a-c26acd8ab92b_1aff6cf5_b9eb_4422_9307_ab965c55c277.png",title:"test3"},
  {
    id: 4,
    url: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/7383bea2-e2ca-11ee-9350-4a8d0ea0ae1e_c152d103_604c_48fc_9400_f8dff8f06e4d.png",title:"test4"},
  ]


const SliderDisocount = () => {
  let slideRef = useRef(null)
  const scrollByPercentage = (direction, percent) => {
    const container = slideRef.current;
    const containerWidth = container.scrollWidth - container.clientWidth;
  
    // Определяем направление прокрутки и насколько пикселей нужно прокрутиться
    const pixelsToScroll = containerWidth * (percent / 100) * (direction === 'next' ? 1 : -1);
  
    // Устанавливаем новое значение прокрутки
    container.scrollLeft += pixelsToScroll;
  };
  
  const prev = () => {
    scrollByPercentage('prev', 45);
  };
  
  const next = () => {
    scrollByPercentage('next', 45);
  };
  

  return (
    <div className='wrapper' ref={slideRef}>
       <button className='btn_arrow prev' onClick={prev}>
            <GrPrevious/>
        </button>
      {
        slides.map(item => <SlideImage slide={item} key={item.id} />)
      }
        <button className='btn_arrow next' onClick={next}>
            <GrNext/>
        </button>
    </div>
  )
}

export default SliderDisocount