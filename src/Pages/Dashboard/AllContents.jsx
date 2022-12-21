import React from 'react'
import { useEffect } from 'react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import loadContentData from '../../redux/thunk/contents/fetchContents';
import removeContent from '../../redux/thunk/contents/removeContent';

const AllContents = () => {
    const contents = useSelector((state) => state.content.contents);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(loadContentData());
    }, [dispatch]);
  
    const handleClick =()=>{
      console.log('Clicked!!!')
    }
  return (
    <div class='flex flex-col justify-center items-center h-full w-10/12 ml-8'>
      <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header class='px-5 py-4 border-b border-gray-100'>
          <div class='font-semibold text-gray-800'>Contents</div>
        </header>

        <div class='overflow-x-auto p-3 w-full'>
          <table class='table-auto w-10/12 ml-8'>
            <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Title</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Description</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Author</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Date</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody class='text-sm divide-y divide-gray-100'>
              {contents.map(({ title, createdBy, dateCreated, description, _id }) => (
                <tr key={_id}>
                  <td class='p-2'>
                    <div class='font-medium text-gray-800'>{title}</div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left capitalize'>{description}</div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left'>
                      
                        <p className='text-green-500 font-medium'>{createdBy}</p>
                      
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left font-medium text-indigo-500'>
                      {dateCreated}
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='flex justify-center'>
                      <button className='text-xl text-red-400 mr-2' onClick={() => dispatch(removeContent(_id))}>
                        <AiFillDelete/>
                      </button>
                      <NavLink to={`/dashboard/edit-content/${_id}`} className='text-xl text-blue-400 ml-2'>
                        <AiFillEdit/>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default AllContents;