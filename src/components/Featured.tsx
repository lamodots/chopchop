import React ,  {useState}from 'react';
import { sliders } from '../sliders';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { RxDotFilled} from 'react-icons/rx'


function Featured() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = ()=> {
        const isFirstSlide = currentIndex === 0
        const newindex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newindex)
    }
    const nextSlider = ()=> {
        const isLastSlide = currentIndex === sliders.length - 1
        const newindex = isLastSlide ? 0  : currentIndex + 1
        setCurrentIndex(newindex)
    }

    {/**dots logics */}
    const moveToNextSlide = (slideIndex)=> {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        >

        </div>
        <div className=' hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-orange-500'>
            <BsChevronCompactLeft size={25} onClick={prevSlider} />
        </div>
        <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-orange-500'>
            <BsChevronCompactRight size={25} onClick={nextSlider} />
        </div>
        {/**sliderdots */}
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems, slideIndex) => (
                    <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=> moveToNextSlide( slideIndex)}><RxDotFilled /></div>
                ))
            }
        </div>
    </div>
  )
}

export default Featured