import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { fetchFilters } from "../../api/api";

const HomePage = ()=>{
    const {data} = useOutletContext()
    const {topAlbums, newAlbums, songs} = data;

    return<>
        
        <Hero />
        <div>
            <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            <Section 
                title="Songs" 
                data={songs} 
                type="songs"
                filterSource = {fetchFilters}
            />
        </div>
    </>
}

export default HomePage;