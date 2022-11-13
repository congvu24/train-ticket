import { Button, DatePicker, Select } from 'antd'
import React from 'react'
import { FaTrain } from 'react-icons/fa'

export default function SearchBar() {
    return (
        <div className='px-20 py-4 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <h1 className='text-center text-white text-2xl flex items-center justify-center'>
                <FaTrain fontSize={24} className="mr-2" /> Book Train Tickets
            </h1>
            <div className=' bg-white p-6 my-8 rounded shadow-md max-w-6xl mx-auto'>
                <div className='flex items-end justify-around'>
                    <div className="mr-4 flex-1">
                        <p className='mb-2 text-gray-500'>From station:</p>
                        <Select placeholder="From" size="large" style={{ maxWidth: 300, width: "100%" }} >
                            <Select.Option>Ha Noi</Select.Option>
                            <Select.Option>Ho Chi Minh</Select.Option>
                        </Select>
                    </div>
                    <div className="mr-4 flex-1">
                        <p className='mb-2 text-gray-500'>Destination station:</p>
                        <Select placeholder="Destination" size="large" style={{ maxWidth: 300, width: "100%" }} >
                            <Select.Option>Ha Noi</Select.Option>
                            <Select.Option>Ho Chi Minh</Select.Option>
                        </Select>
                    </div>
                    <div className='mr-4 flex-1'>
                        <p className='mb-2 text-gray-500'>Departure date:</p>
                        <DatePicker size='large' style={{ maxWidth: 300, width: "100%" }} />
                    </div>
                    <div className='w-32'>
                        <Button size='large' className='w-full'>Search</Button>
                    </div>
                </div>
                <p className='mt-2 px-4 text-right text-gray-400 text-xs'>* Trip information provided by official VietNam railway</p>
            </div>

        </div>
    )
}
