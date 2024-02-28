/* eslint-disable react/prop-types */
// import React from 'react'

export default function ReviewCard(props) {
  return (
    <div className='w-full md:w-1/3 bg-white border-2 border-gray-400 md:border-none p-5 rounded-lg hover: shadow-[0_3px_8px_rgb(0,0,0,.24)]transition-all'>
        <div>
            <p className='text-gray-400 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consectetur error, dolores quae ipsa quos enim corporis magni
          obcaecati tempore natus eos?</p>
        </div>
        <div className='flex flex-row justify-center'>
            <img className='rounded-full w-1/4' src={props.img} alt="img" />
        </div>
    </div>
  )
}
