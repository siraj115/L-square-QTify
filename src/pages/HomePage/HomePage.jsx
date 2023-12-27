import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";

const HomePage = ()=>{
    const {data} = useOutletContext()
    const {topAlbums, newAlbums, songs} = data;

    return<>
        
        <Hero />
        <div>
            <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            {/*<Section title="Songs" data={topAlbums} type="songs"/>*/ }
        </div>
    </>
}

export default HomePage;