import React from 'react'
import { useSelector } from 'react-redux';
import Content from '../../components/Content/Content'

const ReadingHistory = () => {
  const contents = useSelector((state) => state.content.reading_history);
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
        <h1>reading history page</h1>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">

      
      {
      contents.map(content => <Content content={content} key={content?._id}/>)
      }
      </div>
    </div>
  )
}

export default ReadingHistory;