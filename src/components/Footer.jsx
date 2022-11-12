import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='py-12 bg-gray-700 mt-auto px-8 flex items-center justify-between'>
            <div>
                <div className='flex items-center w-16 justify-between'>
                    <FaFacebook className='text-white' fontSize={24} />
                    <FaTwitter className='text-white' fontSize={24} />
                </div>
            </div>
            <div className='text-white'>
                <p>© 2022 MYTOURVN. LTD.</p>
                <p>Country Vietnam VNI</p>
            </div>
        </div>
    )
}
