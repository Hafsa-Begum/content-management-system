import React from 'react'
import ContentList from '../../components/ContentList/ContentList'

const Home = () => {
  return (
    <div>
      <h1 className='pt-2 pr-8 text-right'>Get content of
        <button className='mx-2 p-2 border rounded bg-yellow-500'>Most read</button>
        <button className='mx-2 p-2 border rounded bg-yellow-500'>Javascript</button>
        <button className='mx-2 p-2 border rounded bg-yellow-500'>AWS</button>
        <button className='mx-2 p-2 border rounded bg-yellow-500'>VueJs</button>
        <button className='mx-2 p-2 border rounded bg-yellow-500'>Nuxt</button>
      </h1>
      <ContentList/>
    </div>
  )
}

export default Home