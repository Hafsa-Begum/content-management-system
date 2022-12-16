import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchSingleContent from '../../redux/thunk/contents/fetchSingleContent'

const SingleContent = () => {
    const {id} = useParams()
    const content = useSelector((state)=> state.content.contents)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchSingleContent(id))
      console.log('content', content)
    },[dispatch])
  return (
    <div>SingleContent {content.title}</div>
  )
}

export default SingleContent