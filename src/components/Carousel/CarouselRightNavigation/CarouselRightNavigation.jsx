import React, { useEffect, useState } from "react";
import Styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg"
import { useSwiper } from "swiper/react";

const CarouselRightNavigation=()=>{
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd)

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isBeginning)
        })
    })
    return<>
        <div className={Styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
        </div>
    </>
}
export default CarouselRightNavigation;