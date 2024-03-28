import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  const isSidebarOpen = useSelector(store=>store.app.isSidebarOpen);

  //* Early return 
  if(!isSidebarOpen){
    return null;
  }

  return (
    <div className="shadow-xl mr-2 col-span-2 box-border">

      <div className='p-10'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <li>Shorts</li>
          <li>Trending</li>
          <li>Live</li>
        </ul>

        <h1 className='pt-5 font-bold'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>

        <h1 className='pt-5 font-bold'>Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar