
import { FaFacebookSquare, FaTwitterSquare , FaInstagramSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1520px] m-auto px-4  bg-[#24262b]'>
        <div className=' px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                 <h2 className=' text-2xl sm:text-3xl lg:text-4xl px-2 mb-2'>Chop<span className='text-orange-700 font-extrabold'>Chop</span></h2>
                 <p >ChopChop is your ultimate destination for a gastronomic adventure embracing the essence of burgers, pizzas, salads, and vegetarian delights. With an unwavering dedication to culinary excellence, we craft each burger to perfection, blending premium meats or plant-based alternatives with tantalizing toppings, ensuring every bite bursts with flavor. Our pizzas, baked to crispy, cheesy magnificence, boast an array of fresh ingredients atop a perfected dough, promising a slice of heaven in every bite.</p>
                 <div className='flex gap-4 md:w-[75%] my-6'>
                    <FaFacebookSquare  size={25} className="hover:bg-green-500" />
                    <FaInstagramSquare size={25} className="hover:bg-green-500" />
                    <FaTwitterSquare  size={25} className="hover:bg-green-500"/>

                 </div>
            </div>
            <div className=' lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'> New York</li>
                        <li className='py-2 text-sm'> USA</li>
                        <li className='py-2 text-sm'> India</li>
                        <li className='py-2 text-sm'> Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Categories</h6>
                    <ul>
                        <li className='py-2 text-sm'> Burger</li>
                        <li className='py-2 text-sm'> Pizza</li>
                        <li className='py-2 text-sm'> Veg</li>
                        <li className='py-2 text-sm'> Chicken</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Quick Links</h6>
                    <ul>
                        <li className='py-2 text-sm'> My Account</li>
                        <li className='py-2 text-sm'> Delivery</li>
                        <li className='py-2 text-sm'> My Favourite</li>
                        <li className='py-2 text-sm'> My Wallet</li>
                        <li className='py-2 text-sm'> Help</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Policy</h6>
                    <ul>
                        <li className='py-2 text-sm'>Privacy Policy</li>
                        <li className='py-2 text-sm'> Health and Safty</li>
                        <li className='py-2 text-sm'> Return Policy</li>
                       
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer