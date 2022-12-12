import React from 'react'

const Content = (props) => {
  const {title, description, image, dateCreated, createdBy} = props.content;
  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article class="overflow-hidden rounded-lg shadow-lg">
      <a href="#">
          <img alt="Placeholder" class="block h-auto w-full" src={image}/>
      </a>
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
      <main className='leading-tight p-2 md:p-4'>
        <p>{description}</p>
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
        <i class="fa fa-heart"></i>
      </a>
      </footer>
      </article>
    </div>
  //   <div class="w-64 border">
  //   <img src={image} class="w-full" alt="..."/>
  //   <div class="p-4">
  //     <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{title}</h5>
  //     <p>{description}</p>
  //     <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
  //   </div>
  // </div>
  )
}

export default Content