import React, { useState, useRef, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import YOUTUBE_VANCED_LOGO from "../static/youtube_vanced.png"
import useSearchSuggestions from '../utils/useSearchSuggestions';
import { updateSearchValue } from '../utils/searchSlice';


const ListItem = ({ searchSuggetion,setShowSearchSuggestion,setSearchQuery,handleSearchSubmit})=> {
 
  return(
  <li onClick={()=>{setSearchQuery(searchSuggetion); setShowSearchSuggestion(false); handleSearchSubmit(undefined,searchSuggetion);}} className='shadow-sm pl-4 p-2 w-full text-ellipsis text-nowrap hover:bg-stone-100 overflow-hidden cursor-pointer'>
    🔍 &nbsp; {searchSuggetion}
  </li>
)};

const Header = () => {

  const dispatch = useDispatch();
  const navigate= useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestion, setShowSearchSuggestion] =useState(true);

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  const searchSuggestions = useSearchSuggestions(searchQuery);

  function handleSearchSubmit(e,searchSuggestion=searchQuery){
     e?.preventDefault();
     e?.target?.firstChild?.firstChild?.blur();
     //* UPDATING SEARCH VALUE IN STORE (will trigger search for yt api)
     dispatch(updateSearchValue(searchSuggestion));
     navigate('/');
  }

  function handleClearSearchAction(){ 
    setSearchQuery("");
    if(location.pathname==="/"){
      handleSearchSubmit(undefined,"");
    }
  }

  return (
    <div className='grid grid-flow-col p-1 shadow-lg bg-stone-950 w-full items-center'>

      <div className='pl-8 flex items-center col-span-1 box-border overflow-hidden'>
        <img onClick={toggleMenuHandler} className='cursor-pointer h-10 w-10 rounded-full hover:outline-dashed outline-white outline-2' src='https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg' alt='hamburger menu' />
        <Link to='/' onClick={()=> dispatch(updateSearchValue(""))}>
          <img className='h-14 ml-14 hover:animate-pulse cursor-pointer' src={YOUTUBE_VANCED_LOGO} alt='vanced logo' />
        </Link>
      </div>

        {/* //* SEARCHBAR SECTION */}
      <form  onSubmit={(e)=>handleSearchSubmit(e,searchQuery)}  className='col-span-10 relative flex items-center h-[60%]'>

        <div className='w-3/4 flex border-2 rounded-l-3xl hover:border-red-400 focus:border-red-400 active:border-red-400' tabIndex="0">
          <input onChange={(e) =>setSearchQuery(e.target.value) } 
          onBlur={()=>setTimeout(()=>setShowSearchSuggestion(false),100)}
          onFocus={()=>setShowSearchSuggestion(true)}
          value={searchQuery} 
          className='w-full p-2 pl-8 rounded-l-3xl focus:shadow-lg outline-none' 
          type='text' 
          placeholder='Search'
           />
          <button type='button' className=' p-2 bg-white outline-none border-none' onClick={handleClearSearchAction}>{searchQuery && "❌"}</button>
        </div>

        <button type='submit'  className='border-2 border-white rounded-r-3xl p-2 px-5  bg-gray-100 hover:bg-gray-200 hover:shadow-lg'>🔍</button>

          {/* //* SUGGESTIONS SECTION  */}
        {
          searchSuggestions.length > 0 && showSearchSuggestion
          &&
          <ul className='rounded-b-lg py-2 ml-[2%] max-h-60 shadow-2xl overflow-y-auto overflow-x-hidden bg-white bg-opacity-95 absolute top-[87%] w-[73%] inline-block text-red-700'>
            {searchSuggestions.map((searchSuggestion, idx) => <ListItem handleSearchSubmit={handleSearchSubmit} searchSuggetion={searchSuggestion} setShowSearchSuggestion={setShowSearchSuggestion} setSearchQuery={setSearchQuery} key={searchSuggestion + idx} />)}
          </ul>
        }

      </form>

        {/* //* USER PROFILE IMAGE */}
      <div className='col-span-1 flex items-center '>
        <img className='border border-white hover:border-dashed  rounded-full h-10 w-10 border-black cursor-pointer' src='https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png' alt='user' />
      </div>

    </div>
  )
}



export default Header