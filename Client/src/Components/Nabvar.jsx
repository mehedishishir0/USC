import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/uss-logo.png'
import { IoCloseSharp } from "react-icons/io5";
import arrowDown from '../assets/iconmonstr-arrow-up-lined-240.png'
import arrowUp from '../assets/iconmonstr-arrow-up-lined-64.png'
import Headroom from 'react-headroom'

const Nabvar = () => {

    const [openMenu, setOpneMenu] = useState(false)
    const [showResult, setShowResult] = useState(false)
    return (
       <Headroom >
         <div className='z-50' >
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="select-none max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-20 rounded-md" alt="Flowbite Logo" />
                        <span className="self-center lg:text-2xl  font-semibold whitespace-nowrap text-orange-500 ">Ullapara science collage</span>
                    </NavLink>

                    <button onClick={() => setOpneMenu(true)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={` w-72 h-[28rem] no-scrollbar overflow-scroll absolute top-[-15px] ${openMenu ? 'right-[0]' : '-right-80'} md:hidden border border-gray-100 rounded-lg bg-gray-50   dark:bg-gray-800  dark:border-gray-700  transition-all duration-700`}>
                        <ul id='nav-Item' className=" relative gap-2 flex flex-col font-medium p-4  mt-4">
                            <li className='flex justify-between mb-6 mt-3 py-2 px-3 '>
                                <img src={logo} className='h-10' alt="" />
                                <IoCloseSharp onClick={() => {setOpneMenu(false), setShowResult(false)}}  className="cursor-pointer text-4xl dark:text-white text-black" />
                            </li>
                            <li onClick={()=>setOpneMenu(false)}>
                                <NavLink to={'/'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white " aria-current="page">Home</NavLink>
                            </li>
                            <hr className='border-gray-500' />
                            <li>
                                {<button onClick={() => setShowResult(!showResult)} data-dropdown-toggle="dropdownNavbar" className=" flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 ">Result {showResult ? <img src={arrowUp} className=' h-6' /> : <img src={arrowDown} className=' h-6' />} </button>}
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbar" className={`${showResult ? 'h-20' : 'h-0'} px-3 overflow-hidden transition-all duration-500  bg-gray-50   dark:bg-gray-900  dark:border-gray-800 `}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li onClick={()=>setOpneMenu(false)}>
                                            <NavLink to={'/1st-year'} className="block px-4 pb-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1st Year</NavLink>
                                        </li>
                                        <hr className='border-gray-700 ' />
                                        <li onClick={()=>setOpneMenu(false)}>
                                            <NavLink to={'/2nd-year'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2nd Year</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <hr className='border-gray-500' />
                            <li onClick={()=>setOpneMenu(false)}>
                                <NavLink to={'/about'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ">About</NavLink>
                            </li>
                            <hr className='border-gray-500' />
                            <li onClick={()=>setOpneMenu(false)}>
                                <NavLink to={'/admission'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Admission</NavLink>
                            </li>
                            <hr className='border-gray-500' />
                            <li onClick={()=>setOpneMenu(false)}>
                                <NavLink to={'/contact'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Contact</NavLink>
                            </li>
                            <hr className='border-gray-500' />
                        </ul>
                    </div>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul id='nav-Item' className="relative flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink  to={'/'} className="block py-2 px-3 text-white md:hover:text-blue-700 md:dark:hover:text-blue-500 rounded md:bg-transparent md:p-0  md:dark:bg-transparent" aria-current="page">Home</NavLink>
                            </li>
                            <li id="dropdownNavbarLink">
                                <button data-dropdown-toggle="dropdownNavbar" className=" flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Result<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbar" className={`z-10 absolute top-6 left-12 hidden font-normal  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                    <ul className=" py-2 text-sm text-gray-700 dark:text-gray-400 " aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <NavLink to={'/1st-year'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1st Year</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/2nd-year'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2nd Year</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <NavLink to={'/about'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/admission'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admission</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
       </Headroom>
    )
}

export default Nabvar