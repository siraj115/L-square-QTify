import React, { useEffect, useState } from "react";
import Styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg"
import { useSwiper } from "swiper/react";

const CarouselLeftNavigation=()=>{
    const swiper = useSwiper();
    const [isBegining, setIsBegining] = useState(swiper.isBeginning)

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBegining(swiper.isBeginning)
        })
    })
    return<>
        <div className={Styles.leftNavigation}>
            {!isBegining && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
        </div>
    </>
}
export default CarouselLeftNavigation;