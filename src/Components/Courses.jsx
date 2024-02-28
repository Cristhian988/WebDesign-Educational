// import React from 'react'
import CoursesCard from '../Layout/CoursesCard'
import Heading from '../Layout/Heading'

import webImg from '../assets/web-dev.svg'
import appImg from '../assets/App-dev.svg'
import graphicImg from '../assets/graphic.svg'
import digitalImg from '../assets/digital.svg'

export default function Courses() {
  return (
    <div className='min-h-screen flex flex-col items-center gap-16 md:px-32 px-5 mb-16'>
        <Heading title1="Our" title2="Courses" />
        <div className='flex flex-wrap justify-center gap-6'>
            <CoursesCard img={webImg} title="Web Development" />
            <CoursesCard img={appImg} title="App Development" />
            <CoursesCard img={graphicImg} title="Graphic Designer" />
            <CoursesCard img={digitalImg} title="Digital Marketing" />
        </div>
    </div>
  )
}
