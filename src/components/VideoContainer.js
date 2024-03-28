import React from 'react'
import VideoCard from './VideoCard'
import useVideosFromYoutube from '../utils/useVideosFromYoutube'

const VideoContainer = () => {

  //* fetching videos data after the initial render of VideoContainer
  //* and after every update to the searchValue from the store (search slice)
  let videosDataArray = useVideosFromYoutube();

  // currently width of each VideoCard=30%  [WILL USE GRID IN FUTURE FOR BETTER EXP]
  // below code makes sure that we have 3 cards for each row
  if(videosDataArray?.length>0 && videosDataArray.length%3!==0){
       let tempArr=Array(3 - videosDataArray.length%3).fill({snippet:{thumbnails:{}}});
       videosDataArray=[...videosDataArray, ...tempArr];
  }

  return (
    <div className='flex flex-wrap justify-around'>
      {videosDataArray.map((videoData,idx) =>{
        return <VideoCard {...videoData} statistics={videoData.statistics || {}} key={videoData.id+idx ?? idx} />
       })
      }
    </div>
  )
}

export default VideoContainer