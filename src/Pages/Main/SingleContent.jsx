import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchSingleContent from '../../redux/thunk/contents/fetchSingleContent'

const SingleContent = () => {
    const {id} = useParams()
    const content = useSelector((state)=> state.content.content)
    const dispatch = useDispatch()

    useEffect(async()=>{
      await dispatch(fetchSingleContent(id))
      console.log('content', content)
    },[dispatch])
  return (
    <div>SingleContent {content?.title}</div>
  )
}

export default SingleContent