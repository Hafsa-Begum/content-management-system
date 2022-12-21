import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    
<div className='flex'>
      <div class="w-1/4 h-screen">
         <div class="h-full overflow-y-auto py-4 px-3 bg-gray-500 rounded dark:bg-gray-800">
            <ul class="space-y-2 px-12 py-3">
               <li>
                  <NavLink to={'/dashboard/content'}>Content List</NavLink>
               </li>
               <li>
                  <NavLink to={'/dashboard/add-content'}>Add Content</NavLink>
               </li>
               <li>
                  <NavLink to={'/'}>Go home</NavLink>
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