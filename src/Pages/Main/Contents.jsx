import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Content from '../../components/Content/Content'
import loadContentData from '../../redux/thunk/contents/fetchContents'

const Contents = () => {
  const {pathname} = useLocation()
  const contents = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContentData());
    console.log('contents', contents, pathname.type)
  }, [dispatch]);
  return (
    <div class="container my-12 mx-auto pl-4 md:px-12">
      {
        pathname != '/' ? <h1 className='text-right'>Get content of
        <button className='mx-2 p-2 border rounded bg-yellow-500'>Most read</button>
        <button className='mx-2 p-2 border rounded bg-yellow-500'>Javascript</button>
        <button className='mx-2 p-2 border rounded bg-yellow-500'>AWS</button>
        <button className='mx-2 p-2 border rounded bg-yellow-500'>VueJs</button>
        <button className='mx-2 p-2 border rounded bg-yellow-500'>Nuxt</button>
      </h1> : ''
      }
      <h1 className='text-center text-5xl pb-16'>
        {
          pathname != '/'? 'All ' : 'Popular '
        }
         contents</h1>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">  
      {
      contents?.map(content => <Content content={content} key={content?._id}/>)
      }
      </div>
    </div>
  )
}

export default Contents