/* eslint-disable react/prop-types */
// import React from 'react'

export default function CoursesCard(props) {
  return (
    <div className="flex flex-col items-center justify-between bg-white border-2 border-gray-400 md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[0_3px_8px_rgb(0,0,0,.24)] transition-all">
        <div className="w-3/5">
            <img src={props.img} alt="" />
        </div>
        <div>
            <h3 className="font-semibold text-lg text-center my-5">{props.title}</h3>
            <p className="text-gray-400 text-center md:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>
        </div>
    </div>
  )
}
