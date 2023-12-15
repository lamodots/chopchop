import React from 'react'
import {useForm , SubmitHandler} from 'react-hook-form'
import { FormData } from '../definitions'

const regRex = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w-]+\.)+[\w]{2,63}$/


function NewsLetter() {
  const { register, handleSubmit , formState: { errors }} =useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <div className='max--w-[1520px] m-auto text-white px-4 py-4 bg-[#24262b]'>
            <div className='mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h2>Need advice on how to improve your flow ?</h2>
                    <p>Sign up to join our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div >
                      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:flex-row  items-center justify-between w-full'>
                        <input type='email' {...register("email" , { pattern: regRex, required: 'This filed is required'})}  className='p-3 flex w-full rounded-md h-8 text-black'  placeholder='Enter your email' />
                        <button type='submit' className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4   h-8'>Notify me</button>
                        </form>
                        <p>{errors.email && <span className='text-red-500 absolute'>{errors.email.message}</span>}</p>
                    </div>
                    <p className='mt-8'>We are concerned about the security of your data, Read {""}
                    <span className='text-[#00df9a]'>Privacy Policy</span></p>
                </div>
                <hr className=' bg-white ' />
            </div>
    </div>
  )
}

export default NewsLetter