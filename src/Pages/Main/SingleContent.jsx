import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchSingleContent from '../../redux/thunk/contents/fetchSingleContent'

const SingleContent = () => {
    const {id} = useParams()
    const content= useSelector((state)=> state.content?.content)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchSingleContent(id))
    },[dispatch])
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-3/4 mx-auto'>
        <h1 className='text-3xl my-16'>
        Title: {content?.title}
        </h1>
        <div>
          <img className='w-3/4' src={content?.image} alt="" />
        </div>
        <p className='text-2xl mt-8 mb-4'>{content?.description}</p>
        <p className='text-2xl'>{content?.body}</p> 
        <div className='flex justify-between items-center'>
          <p className='text-3xl my-16'>Written by: <br />{content?.createdBy}</p>
          <p className='text-3xl my-16'>Date: <br />{content?.dateCreated}</p>
        </div>    
      </div>
    </div>
  )
}

export default SingleContent