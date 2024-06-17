import React, { useEffect, useState } from 'react'
import Bnaner from "../components/BnanerHome"
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScroll from "../components/HorizontalScroll"
// import axios from 'axios'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)
  const { data : nowPlayingData } = useFetch('/movie/now_playing')
  const { data : topRatedData } = useFetch('/movie/top_rated')
  const { data : popularTvShowData } = useFetch('/tv/popular')
  const { data : onTheAirShowData } = useFetch('/tv/on_the_air')
  
  return (
    <div>
        <Bnaner/>
        <HorizontalScroll data={trendingData} heading={"Trending"} trending={true}/>
        <HorizontalScroll data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
        <HorizontalScroll data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
        <HorizontalScroll data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"}/>
        <HorizontalScroll data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
        
    </div>
  )
}

export default Home