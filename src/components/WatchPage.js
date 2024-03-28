import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import { SEARCH_PARAM_KEY_FOR_VIDEO } from '../utils/constants';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const { state:{title, publishedAt,viewCount,channelTitle} }=useLocation();
  const [subscribed, setSubscribed]=useState(false);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
 
  //* EXTRACT SEARCH PARAM WITH KEY  {currently -> "V"}
  const videoId = searchParams.get(SEARCH_PARAM_KEY_FOR_VIDEO);

  useEffect(() => {
    dispatch(closeMenu());
    window.scrollTo(0,0);
  }, []);

  return (
    <div className='grid grid-flow-col'>

    <div className='flex flex-col col-span-9 '>
      <div className='col-span-10 p-3'>
        <iframe className='rounded-xl h-[60vh] w-full'
          src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>

        <div className='bg-stone-100 rounded-md p-2 my-1'>
            <h1 className='font-bold text-2xl'> {title}</h1>
            <div className='font-semibold text-sm text-stone-500 flex justify-between my-1'>
              <span>Released: {publishedAt} </span>
              {viewCount && <span className='mx-5'>{viewCount} views</span>}
             </div> 

             <div className='font-semibold text-stone-800 flex my-2 py-1 justify-between items-center'>
              <h3 className='text-xl'>{channelTitle}</h3>
              <button onClick={()=>setSubscribed(x=>!x)} className='rounded-lg text-white bg-black p-2 mx-5 hover:bg-red-900 active:bg-red-950'>{subscribed?"Unsubscribe":"Subscribe"}</button>
             </div> 
            
        </div>
      </div>

      <CommentsContainer />
      
    </div>

    <div className='col-span-3'>
         <LiveChat />
    </div>

    
    </div>
  )
}

export default WatchPage