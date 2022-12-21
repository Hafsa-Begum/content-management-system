import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-wrap py-16 px-12'>
        <div className='w-1/2 flex justify-center items-center px-8'>
            <h1 className='text-3xl leading-10'><span className='text-5xl text-yellow-500'>Content</span> is information <br />
             presented with a purpose distributed  <br /> to people in a form through a channel!</h1>
        </div>
        <div className='w-1/2'>
            <img src="/images/hero.png" alt="" />
        </div>
    </div>
  )
}

export default HeroSection