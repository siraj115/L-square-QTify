import React, {useEffect} from 'react';
import Styles from "./Carousel.module.css"
// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({data})=>{
    const swiper = useSwiper();
    useEffect(()=>{
        swiper.slideTo(0);
    },[data]);
    return <></>
}
 const Carousel = ({data, renderComponent}) => {
  return (
    <div className={Styles.wrapper}>
        <Swiper
        // install Swiper modules
        initialSlide={0}
        style={{padding: "0px 20px"}}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
        >
            <Controls data={data} />
            <CarouselRightNavigation/>
            <CarouselLeftNavigation/>
            {
                data.map((ele)=>(
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  );
};

export default Carousel;