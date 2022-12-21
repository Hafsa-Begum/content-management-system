import React from 'react'
import {FaHeart} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { clickToRead} from '../../redux/actions/contentActions';

const Content = ({content}) => {
  const {pathname} = useLocation()
  const {title, description, image, dateCreated, createdBy, _id} = content;
  const dispatch = useDispatch()
  return (
    
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      
      <article class="overflow-hidden rounded-lg shadow-lg">
      
          <img alt="Placeholder" class="block h-64 w-full" src={image}/>
      
      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
      <h1 class="text-lg">
        <a class="no-underline hover:underline text-black" href="#">
          {title}
        </a>
      </h1>
      <p class="text-grey-darker text-sm">
        {dateCreated}
      </p>
      </header>
      <main className='leading-tight text-center text-gray-500 p-2 md:p-4'>
        <p>{description}</p>
        <NavLink to={`/content/${_id}`}>
        <button className='mt-4' onClick={()=>dispatch(clickToRead(content))}>
          {
            pathname != '/reading-history' ? <span className='border rounded text-white py-2 px-28 bg-black'>Click to read</span> : <span className='border rounded text-white py-2 px-28 bg-green-500'>Already read</span>
          }
        </button>
        </NavLink>
      </main>
      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
      <a class="flex items-center no-underline hover:underline text-black" href="#">
      <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
       <p class="ml-2 text-sm">
          {createdBy}
       </p>
      </a>
      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
        <span class="hidden">Like</span>
        <FaHeart color='red' fontSize={'1.5rem'}/>
      </a>
      </footer>
      </article>
      
    </div>
  )
}

export default Content