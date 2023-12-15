import React , {useState} from 'react'
import { mealData } from '../data'
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'
import { Meal } from '../definitions'
import {Link } from 'react-router-dom'
import Pagination from './Pagination'



function Meals() {
 
    
    const [foods, setFoods] = useState(mealData)

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(6)


    // Curerent Page
    const totalData = mealData.length
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = mealData.slice(indexOfFirstData, indexOfLastData)

    const paginate = (pageNumber ) => setCurrentPage(pageNumber )

    const filterCategory = (category:string)=>{
        setFoods(
            mealData.filter((item:Meal) => item.category === category)
        )
    }

   


  return (
   
    <div className='max-w-[1520px] m-auto px-4 py-12'>
             <h2 className='text-orange-500 font-bold text-2xl text-center mb-6 '>Our Meal</h2>
             <div className='flex flex-col lg:flex-row justify-center my-6'>
                <div className='flex justify-center md:justify-center'>
                    <button  onClick={()=> setFoods(currentData)} className='m-1 border-orange-700 text-white  bg-[#F15F5C]  hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
                    <button onClick={()=> filterCategory('Pizza')} className='m-1 border-orange-700 text-white bg-[#F15F5C] hover:bg-white hover:text-orange-700 hover:border-orange-700'>Piza</button>
                    <button onClick={()=> filterCategory('Chicken')} className='m-1 border-orange-700 text-white bg-[#F15F5C] hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chiken</button>
                    <button onClick={()=> filterCategory('Salad')} className='m-1 border-orange-700 text-white bg-[#F15F5C] hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
                    <button onClick={()=> filterCategory('Burger')} className='m-1 border-orange-700 text-white bg-[#F15F5C] hover:bg-white hover:text-orange-700 hover:border-orange-700'>Burger</button>
                </div>
             </div>
             <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 duration-300'>
                    {
                            foods.map((meal:Meal)=> {
                                const {id, name, image, price} = meal;
                            
                                return(
                                    <div className='border-none hover:scale-105 duration-300' key={id}>
                                        <img src={image} alt={name}  className='w-full h-[200px] object-cover rounded-lg'/>
                                        <div className='flex justify-between py-2 px-4'>
                                            <p className='font-bold'>{name.slice(0, 12)}</p>
                                            <p className='bg-[#FFC107] h-16 w-16 flex justify-center items-center rounded-full -mt-10 text-white  border-8 font-bold'>{price}</p>
                                        </div>
                                        <div className='pl-2 py-4 mt-2'>
                                           <Link to={`/meal/${id}`}> <p className='flex items-center cursor-pointer px-2 text-indigo-500 -mt-8'>View more <ArrowSmallRightIcon className='w-5 ml-2'/></p></Link>
                                        </div>
                                        
                                    </div>
                                   
                                   
                                )
                            })
                    }
             </div>
             <Pagination dataPerPage={dataPerPage} totalData={totalData} paginate={paginate} />
    </div>
  )
}

export default Meals