import React from 'react'
import dguy from '../assets/uberforcourierapp.png'

function Delivery() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-[#F15F5C] font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-4'>
            <img className='w-[550px] mx-auto my-4' src={dguy} />
            <div className='flex flex-col justify-center'>
                    <p className='text-[#450b0a] font-bold '>Get App</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Beyond the Ordinary: Burgers, Pizzas, Salads, Veggie Feasts - Your Palate's Paradise!</h1>
                    <p>Welcome to our culinary haven, where every bite tells a story of passion and quality. Indulge in our savory burgers, crafted with the finest ingredients and grilled to perfection, offering a symphony of flavors in every mouthful. Explore our tantalizing pizzas, crowned with the freshest toppings and baked to crispy, cheesy delight, promising an irresistible experience with every slice</p>
                    <button className='bg-[#F15F5C] text-white w-[200px] font-medium rounded-md my-6 md:mx-0 mx-auto py-3'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery