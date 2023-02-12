import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
   const routeLinks = [
      {
         id: 1,
         link: '/dashboard/content',
         linkName: 'Content List',
         linkStyle: ''
      },
      {
         id: 2,
         link: '/dashboard/add-content',
         linkName: 'Add Content'
      },
      {
         id: 3,
         link: '/dashboard/add-video-content',
         linkName: 'Add Video Content'
      },
      {
         id: 4,
         link: '/',
         linkName: 'Go home'
      }
   ]
  return (
    
<div className='flex'>
      <div class="w-1/4 h-screen bg-dark text-white">
         <div class="h-full overflow-y-auto py-4 px-3 bg-black">
            <ul class="space-y-2 px-12 py-3">
               {
                  routeLinks.map(link=>
                     <li className='pl-8'>
                  <NavLink className="text-yellow-500" to={link.link}>{link.linkName}</NavLink>
               </li>)
               }
            </ul>
         </div>
      </div>
  <div className='w-3/4 px-4'>
    <Outlet/>
  </div>
</div>

  )
}

export default Dashboard