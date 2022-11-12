import React from 'react'
import { FaPlane, FaBus, FaHotel, FaCar, FaTrain } from "react-icons/fa";


export default function Header() {
    return (
        <div className='px-4 py-8 h-12 w-full flex items-center shadow-md'>
            <div>
                <a href="/">
                    <img src="/logo.svg" alt="logo" className="w-32 h-10" />
                </a>
            </div>
            <div className='flex items-center justify-start ml-8'>
                <a href="#" className='mx-2 flex items-center justify-around px-2 py-1 w-24 rounded-full border border-gray-200'>
                    <FaPlane fontSize={20} className="w-10 text-blue-500"/>
                    <span className='ml-2 font-semibold text-gray-500'>Flights</span>
                </a>
                <a href="#" className='mx-2 flex items-center justify-around px-2 py-1 w-24 rounded-full border border-gray-200'>
                    <FaHotel fontSize={20} className="w-10 text-blue-500"/>
                    <span className='ml-2 font-semibold text-gray-500'>Hotels</span>
                </a>
                <a href="#" className='mx-2 flex items-center justify-around px-2 py-1 w-24 rounded-full border-2 border-blue-500 bg-blue-500 text-white'>
                    <FaTrain fontSize={20} className="w-10"/>
                    <span className='ml-2 font-semibold text-white'>Trains</span>
                </a>
                <a href="#" className='mx-2 flex items-center justify-around px-2 py-1 w-24 rounded-full border border-gray-200'>
                    <FaCar fontSize={20} className="w-10 text-blue-500"/>
                    <span className='ml-2 font-semibold text-gray-500'>Cabs</span>
                </a>
                <a href="#" className='mx-2 flex items-center justify-around px-2 py-1 w-24 rounded-full border border-gray-200'>
                    <FaBus fontSize={20} className="w-10 text-blue-500"/>
                    <span className='ml-2 font-semibold text-gray-500'>Bus</span>
                </a>

            </div>
        </div>
    )
}
