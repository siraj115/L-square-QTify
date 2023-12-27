import React, { useState } from "react";
import Styles from "./Section.module.css"
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
const Section = ({title,data, type})=>{
    const [carouselToggle, setCarouselToggle] = useState(false);

    const handleToggle=()=>{
        setCarouselToggle((prevState)=>!prevState);
    }
  //  console.log(type, data)
    return <>
        <div>
            <div className={Styles.header} >
                <h3>{title}</h3>
                <h4 className={Styles.toggleText} onClick={handleToggle}>{!carouselToggle ?"Collapse All":"Show All"}</h4>
            </div>
            {data.length===0 ?(
                <CircularProgress />
            ):(
                <div className={Styles.cardWrapper}>
                    {!carouselToggle?(
                        <div className={Styles.wrapper}>
                            {data.map((ele)=>{
                               return <Card data={ele} type={type}/>
                            })
                                
                            }
                        </div>
                    ):(
                        // Carousel
                        null
                    )}
                </div>
            )}
        </div>
    </>
}

export default Section;