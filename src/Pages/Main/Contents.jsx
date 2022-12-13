import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Content from '../../components/Content/Content'
import loadContentData from '../../redux/thunk/contents/fetchContents'

const Contents = () => {
  const contents = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContentData());
    console.log('contents', contents)
  }, [dispatch]);
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">

      
      {
      contents.map(content => <Content content={content} key={content?._id}/>)
      }
      </div>
    </div>
  )
}

export default Contents