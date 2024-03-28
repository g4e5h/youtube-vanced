import React from 'react'
import { Link } from "react-router-dom";
import { SEARCH_PARAM_KEY_FOR_VIDEO } from '../utils/constants';

const VideoCard = ({ id, snippet: { title = "", channelTitle = "", publishedAt = "", thumbnails: { medium: mediumThumbnail = "" } }, statistics: { viewCount = "" } }) => {
 
  publishedAt = publishedAt.split('T')[0];
  if (publishedAt.split('-').length === 3) {
    publishedAt=publishedAt.split('-');  
    const m = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    publishedAt=`${publishedAt[2]} ${m[parseInt(publishedAt[1],10)-1]}, ${publishedAt[0]}`
  }

  if (!id) {
    return (
      <div className='rounded-xl p-2 m-2 w-[30%] h-auto flex flex-col justify-center' />
    );
  }

  return (
    <div className='rounded-xl p-2 m-2 w-[30%] h-auto shadow-lg flex flex-col justify-center'>
      <Link to={"/watch?" + SEARCH_PARAM_KEY_FOR_VIDEO + "=" + (id.videoId || id)}
       state={{ title: title, publishedAt: publishedAt, channelTitle: channelTitle, viewCount: viewCount }} >
        <img className='rounded-xl w-[95%]' src={mediumThumbnail?.url} alt='thumbnail' />
        <ul className='ml-2'>
          <li className='font-bold py-2'>{title}</li>
          <li className='py-1 font-semibold text-gray-700'>{channelTitle}</li>
          {viewCount ? <li className='text-gray-700'>{viewCount} views</li>
            : <li className='text-gray-700'>Published on : {publishedAt}</li>}
        </ul>
      </Link>

    </div>
  )
}

export const adVideoCard = (nameOfAdvertiser) => {
  return (props) =>
  (<div className='border border-stone-800 p-2 w-[95%] rounded-xl h-auto shadow-lg '>
    <VideoCard {...props} />
    <li>Ad : {nameOfAdvertiser}</li>
  </div>
  )
}

export default VideoCard;