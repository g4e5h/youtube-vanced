import React from 'react'
import { DEFAULT_USER_IMAGE_FOR_CHAT } from '../utils/constants';

const ChatMessage = ({username="Guest", message="", imgSrc=DEFAULT_USER_IMAGE_FOR_CHAT}) => {
  return (
    <div className='flex my-1 py-1 text-sm'>
        <img className='h-6 w-6 rounded-full' src={imgSrc} alt="user" />
        <span className='mx-2 font-bold'>{username}</span>
        <span className='ml-1 overflow-hidden text-ellipsis'>{message}</span>
    </div>
  )
}

export default ChatMessage;