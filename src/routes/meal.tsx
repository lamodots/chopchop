import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { mealData } from '../data'




function Meal() {
  
  let { id } = useParams()
  const [food, setFoods] = useState(mealData)

 useEffect(()=> {

  setFoods(
    food.filter((item) => item.id === Number(id))
)
 },
 

 
 [])
  

 const [{
  name,
  category,
  image,
  price,
  ingredients
}] = food;


   return (
    <div className=' max-w-[1520px]  grid lg:grid-cols-2 gap-8 px-4 py-10'>
       <div className='border-none hover:scale-105 duration-300'>
          <img src={image} alt={name}  className='w-full h-full object-cover rounded-lg' />
       </div>
       <div>
            <h1 className='text-orange-500 font-bold text-2xl text-left mb-6'>{name}</h1>
            <p className=' bg-orange-800 w-fit px-2 py-2 rounded-full text-white'>{category}</p>
            <p className=' font-bold text-2xl mt-4'> {price}</p>
            <ul className=' list-disc ml-4 mt-4'>
              {
                ingredients.map((item, index)=> {
                  return (
                  
                      <li key={index}>{item}</li>
                  
                  )
                })
              }
            </ul>
       </div>
    </div>
  )
}

export default Meal