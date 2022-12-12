import React, { useEffect, useState } from 'react'
import Content from '../../components/Content/Content'

const Contents = () => {
  const [contents, setContent] = useState([])
  useEffect(()=>{
    fetch('contents.json')
    .then(res=> res.json())
    .then(data=> 
      setContent(data))
  }, [])
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">

      
      {
      contents.map(content => <Content content={content}/>)
      }
      </div>
    </div>
  )
}

export default Contents