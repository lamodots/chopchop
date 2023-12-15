import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { topPicks } from '../data';
function TopPicks() {
  return (
    <>
        <h2 className='text-[#F15F5C] font-bold text-2xl text-center '>Top Picks</h2>
        <div className='hidden lg:flex max-w-[1520px] m-auto py-2 px-2'>
            <Splide options={{ rewind: true , perPage: 4, gap: '1rem', drag: 'free', arrows: false}}>
                {
                    topPicks.map((item)=> {
                        const { id, title, price, img} =item
                        return(
                            <SplideSlide key={id}>
                                <div className='rounded-3xl relative'>
                                    <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                                        <p className='px-2 font-bold pt-4'>{title}</p>
                                        <p className='px-2'>{price}</p>
                                        <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add to cart</button>
                                    </div>
                                    <img  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300" src={img} alt={title} />
                                </div>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>

    </>
  )
}

export default TopPicks