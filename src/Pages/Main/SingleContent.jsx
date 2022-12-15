import React from 'react'
import { useParams } from 'react-router-dom'

const SingleContent = () => {
    const {id} = useParams()
  return (
    <div>SingleContent {id}</div>
  )
}

export default SingleContent