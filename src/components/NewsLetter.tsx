import React from 'react'

function NewsLetter() {
  return (
    <div className='max--w-[1520px] m-auto text-white px-4 py-4 bg-[#24262b]'>
            <div className='mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h2>Need advice on how to improve your flow ?</h2>
                    <p>Sign up to join our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row  items-center justify-between w-full'>
                        <input type="text" className='p-3 flex w-full rounded-md h-8'  placeholder='Enter your email' />
                        <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4   h-8'>Notify me</button>
                    </div>
                    <p>We are concerned about the security of your data, Read {""}
                    <span className='text-[#00df9a]'>Privacy Policy</span></p>
                </div>
                <hr className=' bg-white ' />
            </div>
    </div>
  )
}

export default NewsLetter