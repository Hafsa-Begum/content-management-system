import React from 'react'
import { useEffect } from 'react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import loadContentData from '../../redux/thunk/contents/fetchContents';
import removeContent from '../../redux/thunk/contents/removeContent';

const ContentList = () => {
    const contents = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContentData());
  }, [dispatch]);

  const handleClick =()=>{
    console.log('Clicked!!!')
  }
  return (
    <div id = "app" class="bg-white min-h-screen">
  <div class="max-w-6xl mx-auto px-8 py-8">
    <h2 class="uppercase font-bold text-gray-600 text-3xl text-center pb-8">Responsive Tables with Tailwindcss</h2>
    <div class="relative">
      <table class="sm:shadow-2xl border-collapse w-fullxx">
        <thead class="sm:visible invisible absolute sm:relative bg-gray-100">
          <tr class="border-t-2 border-gray-400 sm:flexxx sm:inline-block">
            <th class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                  <div class="flex items-center" classes="[object Object]">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">TitleId</p>
                    </div>
                  </div>
            </th>
            <th class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                  <div class="flex items-center" classes="[object Object]">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">Title</p>
                    </div>
                  </div>
            </th>
            <th class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                  <div class="flex items-center" classes="[object Object]">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">Author</p>
                    </div>
                  </div>
            </th>
            <th scope="col"
                class="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created at
            </th>
            <th scope="col"
                class="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            contents.map(content=> 
                <tr key={content._id} class="hover:bg-gray-100 hover:cursor-pointer">
                <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                  <div class="flex items-center" classes="[object Object]">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">{content._id}</p>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                  <span>{content.title}</span>
                </td>
                <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                  <ul classes="[object Object]">
                    <li><a href="#">{content.createdBy}</a></li>
                  </ul>
                </td>
                <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
                    classes="[object Object]">
                    {content.dateCreated}
                  </span>
                </td>
                <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                  <span
                    class="relative inline px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
                    classes="[object Object]">
                    <span onClick={() => dispatch(removeContent(content._id))}>
                      <AiFillDelete/>
                      </span>
                      <NavLink to={`/content/${content._id}`}>
                       <AiFillEdit onClick={handleClick}/>
                      </NavLink>
                  </span>

                </td>
              </tr>
          )}     
        </tbody>
      </table>    
    </div>
  </div>
</div>
  )
}

export default ContentList