import React, { useEffect, useState } from "react";
import Styles from "./Section.module.css"
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
const Section = ({title,data, filterSource, type})=>{
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([{key:"all", label:"All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);


    const handleToggle=()=>{
        setCarouselToggle((prevState)=>!prevState);
    }
    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                const {data} = response;
                setFilters([...filters, ...data])
            })
        }
    },[]);
    const showFilters = filters.length>1;
    //console.log(filters)
    //console.log(selectedFilterIndex)
    const cardsToRender = data.filter((card)=> 
        showFilters && selectedFilterIndex !==0? 
        card.genre.key===filters[selectedFilterIndex].key 
        : card );
    console.log(cardsToRender)

    console.log(title)
    return <>
        <div >
            <div className={Styles.header} >
                <h3>{title}</h3>
               {!showFilters && <h4 className={Styles.toggleText} onClick={handleToggle}>{!carouselToggle ?"Collapse All":"Show All"}</h4>}
               {showFilters && (
                    <div className={Styles.filterWrapper}>
                        <Filters 
                            filters={filters} 
                            selectedFilterIndex={selectedFilterIndex} 
                            setSelectedFilterIndex={setSelectedFilterIndex} 
                        />
                    </div>
               )}
            </div>
            {cardsToRender.length===0 ?(
                <CircularProgress />
            ):(
                <div className={Styles.cardWrapper}>
                    {!carouselToggle?(
                        <div className={Styles.wrapper}>
                            {cardsToRender.map((ele)=>{
                               return <Card data={ele} type={type}/>
                            })}
                        </div>
                    ):(
                       <Carousel 
                            data={cardsToRender}
                            renderComponent={ (data)=> <Card data={data} type={type}  />}
                        />
                    )}
                </div>
            )}
        </div>
    </>
}

export default Section;