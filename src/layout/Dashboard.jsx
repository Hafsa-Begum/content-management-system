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
         link: '/',
         linkName: 'Go home'
      }
   ]
  return (
    
<div className='flex'>
      <div class="w-1/4 h-screen bg-dark text-white">
         <div class="h-full overflow-y-auto py-4 px-3 bg-black">
            <ul class="space-y-2 px-12 py-3">
               <li className='pl-8'>
                  <NavLink className="text-yellow-500" to={'/dashboard/content'}>Content List</NavLink>
               </li>
               <li className='pl-8 mt-4 mb-8'>
                  <NavLink className="text-yellow-500"  to={'/dashboard/add-content'}>Add Content</NavLink>
               </li>
               <li className='pl-4'>
                  <NavLink className="text-yellow-500 mt-8 px-8 py-2 border rounded" to={'/'}>Go home</NavLink>
               </li>
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