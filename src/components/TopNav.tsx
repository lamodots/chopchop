import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch , AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { TbTruckReturn} from 'react-icons/tb'
import { FaUserFriends, FaGoogleWallet} from 'react-icons/fa'
import { MdHelp , MdOutlineFavorite} from 'react-icons/md'
import { BsFillCartFill, BsPerson} from 'react-icons/bs'
import { Link , NavLink} from 'react-router-dom'

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false)  /* State to toggle the sidebar*/
  return (
    /**navigiation bar start */
    <div className='max-w-[1520px]  mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                    <div onClick={()=> setSideNav(!sideNav)} className="cursor-pointer">
                        <AiOutlineMenu size={25} />
                    </div>
                    <Link to="."><h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2'>Chop<span className='text-[#F15F5C] font-extrabold'>Chop</span></h1></Link>
            </div>
            <div className="items-center bg-gray-300 rounded-full flex px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input type="text"  className=' bg-transparent w-full p-2 focus:outline-none' placeholder='search meal'/>
            </div>
            <button className='bg-[#F15F5C]  text-white  hidden  md:flex items-center py-2 rounded-full'> 
                <BsFillCartFill /> Cart
             </button>

             {/** THE OVER LAY */}
            {
                sideNav ? ( <div className='bg-black/40 fixed w-full h-screen z-10 top-0 left-0 cursor-pointer' onClick={()=> setSideNav(!sideNav)}></div>): ("")
            }

            {/* sidebar */}
            <div className={sideNav ? "fixed top-0 left-0 w-[300px] bg-white z-10 duration-300 h-screen p-4"
                : "fixed top-0 left-[-100%] w-[300px] bg-white z-10 duration-300 h-screen"
            } >
                <AiOutlineClose size={25} onClick={()=> setSideNav(!sideNav)} className=" float-right mt-2 cursor-pointer"/>
                <Link to='.'><h2 className=' text-2xl'>Chop<span className='text-[#F15F5C] font-extrabold'>Chop</span></h2></Link>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4  flex cursor-pointer' >
                           <NavLink to="/account" className={  ({isActive, isPending})=> isActive ? 'text-[#F15F5C] flex': isPending ? 'text-black flex' : 'text-black flex'}><BsPerson size={25} className='mr-4 text-white bg-black rounded-full'/>
                            My Account

                            </NavLink>
                        </li>
                        <li className='text-xl py-4  flex cursor-pointer'>
                           <NavLink  className={  ({isActive, isPending})=> isActive ? 'text-[#F15F5C] flex': isPending ? 'text-black flex' : 'text-black flex'} to="/delivery" ><TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full'/>
                            Delivery
                            </NavLink>
                        </li>
                        <li className='text-xl py-4  flex cursor-pointer'>
                            <NavLink  to='/favourite' className={  ({isActive, isPending})=> isActive ? 'text-[#F15F5C] flex': isPending ? 'text-black flex' : 'text-black flex'}><MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full'/>
                            My Favourite
                            </NavLink>
                        </li>
                        <li className='text-xl py-4  flex cursor-pointer'>
                            <NavLink  className={  ({isActive, isPending})=> isActive ? 'text-[#F15F5C] flex': isPending ? 'text-black flex' : 'text-black flex'} to="/wallet" ><FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full'/>
                            My Wallet
                            </NavLink>
                        </li>
                        <li className='text-xl py-4  flex cursor-pointer' >
                            <NavLink className={  ({isActive, isPending})=> isActive ? 'text-[#F15F5C] flex': isPending ? 'text-black flex' : 'text-black flex'} to="/help" ><MdHelp size={25} className='mr-4 text-white bg-black rounded-full'/>
                            Help
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
            {/* sidebar  end*/}
            
    </div>
    
  )
}

export default TopNav