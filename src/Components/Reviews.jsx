// import React from 'react'
import Heading from '../Layout/Heading'
import ReviewCard from '../Layout/ReviewCard'

import img1 from '../assets/images/pic1.png'
import img2 from '../assets/images/pic2.png'
import img3 from '../assets/images/pic3.png'

export default function Reviews() {
  return (
    <div className='min-h-[80hv] flex flex-col items-center justify-center gap-8 md:px-20 px-5'>
        <Heading title1="Our" title2="Reviews" />
        <div className='flex flex-col md:flex-row gap-8 mt-5'>
            <ReviewCard img={img1} />
            <ReviewCard img={img2} />
            <ReviewCard img={img3} />
        </div>
    </div>
  )
}
