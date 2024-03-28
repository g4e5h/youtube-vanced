import React from 'react'
import { dummyCommentData } from '../utils/constants'


const Comment = ({ data: { name="", text="", replies } }) => {
    return (
        <div className='flex items-center bg-stone-100 rounded-xl p-1 m-1'>
            <img className='w-8 h-8 rounded-full' alt='user' src='https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {

    return comments?.map((comment, idx) => (
        <div className='comment-subcomment-container' key={comment.text+idx ?? idx}>
            <Comment data={comment}  />
            <div className='pl-2 ml-6 border-l-2 border-stone-400'>
                <CommentsList comments={comment?.replies} />
            </div>
        </div>
    ));

}

const CommentsContainer = () => {
    return (
        <div className=' p-3 shadow-sm '>
            <h1 className='text-bold text-2xl p-2 '>Comments:</h1>
            <CommentsList comments={dummyCommentData} />
        </div>
    )
}

export default CommentsContainer