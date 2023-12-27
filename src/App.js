import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import {StyledEngineProvider} from "@mui/material"
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
//"swiper": "^9.1.0"
function App() {
  const [data, setData] = useState({});
  const [searchData, setSearchData] = useState();
  const generateData = (key, source)=>{
    source().then((data)=>{
      setData((prevdata)=>{
        return {...prevdata, [key]:data};
      })
    })
  }
  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  },[])
  const {topAlbums=[], newAlbums=[], songs=[]} = data;
  //console.log(topAlbums)
  return (
    <>
      <StyledEngineProvider injectFirst>
        
        <Navbar searchData={[...topAlbums,...newAlbums]}/>  
        <Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
      </StyledEngineProvider>
    </>
  );
}

export default App;
