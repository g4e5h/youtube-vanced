import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import {generateRandomName} from "../utils/helper"
import { DG_USER_IMAGE_FOR_CHAT } from '../utils/constants';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store=> store.chat.messages);
    const [chatInputMessage, setChatInputMessage] = useState("");

    useEffect(() => {
        const i = setInterval(()=>{
            //* MOCK API CALL AND FETCHING MESSAGES
            let name = generateRandomName();
            dispatch(addMessage({
                username:name,
                message:`Hi my name is ${name} 😀`,
            }));
        },1000);

        //! Don't forget to clear the interval 
        return () => clearInterval(i);

    }, [])

    function handleChatSubmit(e){
        e.preventDefault();
        dispatch(addMessage({username:"Deepesh Grover", message:chatInputMessage, imgSrc:DG_USER_IMAGE_FOR_CHAT}));
        setChatInputMessage("");
    }

    return (
        <div className='p-3 w-[35vw] bg-slate-100   rounded-2xl mt-3 shadow-xl'>
            <h1 className="font-bold pb-2 border-y-2">Live Chat 🚀</h1>
            <div className='m-1 p-1 bg-slate-50 overflow-x-auto h-64 shadow-sm flex flex-col-reverse rounded-xl'>
                {chatMessages.map((chatMessage, idx) => <ChatMessage {...chatMessage} key={chatMessage.message.slice(0,5)+idx ?? idx} />)}
            </div>
            <form onSubmit={handleChatSubmit} className='border-y-2 flex justify-center align-center p-2 my-3'>
                <input onChange={(e)=>setChatInputMessage(e.target.value)} value={chatInputMessage} className='w-full h-full py-2 px-3 border border-rose-400 rounded-lg box-border focus:outline-dotted outline-red-500' type='text' />
                <button type='submit' className='mx-1 px-3 bg-rose-700 text-white rounded-lg box-border'>Submit</button>
            </form>
        </div>
    )
}

export default LiveChat