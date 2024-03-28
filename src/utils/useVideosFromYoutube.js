import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEOS_URL, YOUTUBE_VIDEOS_URL } from "./constants";
import { useSelector } from "react-redux";

export default function useVideosFromYoutube(){
  
  const searchQueryValue=useSelector(store=>store.search.searchValue);

  const [videosData, setVideosData] = useState([]);
    
    useEffect(()=>{
        getVideos( searchQueryValue.length>0 ? 
          YOUTUBE_SEARCH_VIDEOS_URL+searchQueryValue : 
          YOUTUBE_VIDEOS_URL );
    },[searchQueryValue])
  
    const getVideos = async(URL)=>{
      let data= await fetch(URL);
      data = await data.json();
      setVideosData(data?.items);
    }

    return videosData;
}