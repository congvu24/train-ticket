import { useQuery } from '@tanstack/react-query'
import { Button, DatePicker, Select, message } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import { FaTrain } from 'react-icons/fa'
import { useNavigate, useParams, useRoutes, useSearchParams } from 'react-router-dom'
import { apis } from '../api'

export default function SearchBar() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    // const route = ();
    const path = window.location.pathname;

    const isListPage = path == "/list"

    const { data: dataStation, isLoading: isLoadingStation } = useQuery(["station"], () => apis.stations.retrieve())
    const [startStation, setStartStation] = useState(searchParams.get("start") || "")
    const [endStation, setEndStation] = useState(searchParams.get("end") || "")
    const [departureTime, setDepartureTime] = useState(searchParams.get("time") ? new Date(parseInt(searchParams.get("time"))) : new Date())

    const handleSearch = () => {
        if (!startStation || !endStation || !departureTime) return message.error("Filter data is missing")
        else {
            if (startStation == endStation) return message.error("Start station can not be the same as end station")

            if (isListPage) return {
                // handle search without navigating to list page
            }

            const query = `start=${startStation}&end=${endStation}&time=${departureTime.getTime()}`
            return navigate(`/list?${query}`)
        }
    }

    return (
        <div className='px-20 py-4 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <h1 className='text-center text-white text-2xl flex items-center justify-center'>
                <FaTrain fontSize={24} className="mr-2" /> Book Train Tickets
            </h1>
            <div className=' bg-white p-6 my-8 rounded shadow-md max-w-6xl mx-auto'>
                <div className='flex items-end justify-around'>
                    <div className="mr-4 flex-1">
                        <p className='mb-2 text-gray-500'>From station:</p>
                        <Select placeholder="From" size="large" style={{ maxWidth: 300, width: "100%" }}
                            value={startStation}
                            onChange={value => setStartStation(value)}
                        >
                            {dataStation?.data?.map(item =>
                                <Select.Option value={item.attributes.stationCode}>{item.attributes.name}</Select.Option>
                            )}
                        </Select>
                    </div>
                    <div className="mr-4 flex-1">
                        <p className='mb-2 text-gray-500'>Destination station:</p>
                        <Select placeholder="Destination" size="large" style={{ maxWidth: 300, width: "100%" }}
                            value={endStation}
                            onChange={value => setEndStation(value)}
                        >
                            {dataStation?.data?.map(item =>
                                <Select.Option value={item.attributes.stationCode}>{item.attributes.name}</Select.Option>
                            )}
                        </Select>
                    </div>
                    <div className='mr-4 flex-1'>
                        <p className='mb-2 text-gray-500'>Departure date:</p>
                        <DatePicker defaultValue={moment(departureTime)} size='large' style={{ maxWidth: 300, width: "100%" }} showHour={true} showMinute={true} showTime={true} showSecond={false}
                            onChange={(value, dateString) => setDepartureTime(dateString)}
                        />
                    </div>
                    <div className='w-32'>
                        <Button size='large' className='w-full' onClick={handleSearch}>Search</Button>
                    </div>
                </div>
                <p className='mt-2 px-4 text-right text-gray-400 text-xs'>* Trip information provided by official VietNam railway</p>
            </div>

        </div>
    )
}
