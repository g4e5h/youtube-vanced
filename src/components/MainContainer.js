import React, { useEffect } from 'react'
import VideoContainer from "./VideoContainer";
import ButtonsList from './ButtonsList';
import { useDispatch } from 'react-redux';
import {openMenu} from '../utils/appSlice'

const MainContainer = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(openMenu());
  }, []);

  return (
    <div className='col-span-10'>
        <ButtonsList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;