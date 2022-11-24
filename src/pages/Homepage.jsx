import { useQuery } from '@tanstack/react-query'
import { Button, Col, DatePicker, Layout, Row, Select } from 'antd'
import React from 'react'
import { FaTrain } from 'react-icons/fa'
import { apis } from '../api'
import FAQ from '../components/FAQ'
import SearchBar from '../components/SearchBar'


export default function Homepage() {


  return (
    <div>
      <SearchBar />
      <div style={{ maxWidth: 1280 }} className="mx-auto">
        <div className='mx-20 '>
          <h2 className='text-xl text-center my-4 font-extrabold'>Why Book Train Tickets from EaseMyTrip</h2>
          <div className='mt-4'>
            <Row gutter={18}>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://www.easemytrip.com/images/train-img/IRCTC-logo-nw2.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>IRCTC Authorised Partner</p>
                    <p className='text-xs text-gray-500'>
                      EaseMytrip is authorized partner of IRCTC, booking train tickets since 2018.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://www.easemytrip.com/images/train-img/IRCTC-logo-nw2.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>IRCTC Authorised Partner</p>
                    <p className='text-xs text-gray-500'>
                      EaseMytrip is authorized partner of IRCTC, booking train tickets since 2018.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://www.easemytrip.com/images/train-img/IRCTC-logo-nw2.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>IRCTC Authorised Partner</p>
                    <p className='text-xs text-gray-500'>
                      EaseMytrip is authorized partner of IRCTC, booking train tickets since 2018.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://www.easemytrip.com/images/train-img/IRCTC-logo-nw2.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>IRCTC Authorised Partner</p>
                    <p className='text-xs text-gray-500'>
                      EaseMytrip is authorized partner of IRCTC, booking train tickets since 2018.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://www.easemytrip.com/images/train-img/IRCTC-logo-nw2.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>IRCTC Authorised Partner</p>
                    <p className='text-xs text-gray-500'>
                      EaseMytrip is authorized partner of IRCTC, booking train tickets since 2018.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://www.easemytrip.com/images/train-img/IRCTC-logo-nw2.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>IRCTC Authorised Partner</p>
                    <p className='text-xs text-gray-500'>
                      EaseMytrip is authorized partner of IRCTC, booking train tickets since 2018.
                    </p>
                  </div>
                </div>
              </Col>

            </Row>
          </div>
        </div>
        <div className='mx-20 my-8 py-4'>
          <h2 className='text-center font-semibold text-xl'>Top Train Ticket Booking Routes</h2>
          <div className='p-4 border rounded mt-8'>
            <Row gutter={20}>
              <Col span={12}>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>NEW DELHI -JAMMU TAWI(NDLS-JAT)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>NEW DELHI -JAMMU TAWI(NDLS-JAT)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>NEW DELHI -JAMMU TAWI(NDLS-JAT)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>NEW DELHI -JAMMU TAWI(NDLS-JAT)</p>
                  <Button>Search train</Button>
                </div>
              </Col>
              <Col span={12}>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>NEW DELHI -JAMMU TAWI(NDLS-JAT)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>NEW DELHI -JAMMU TAWI(NDLS-JAT)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>NEW DELHI -JAMMU TAWI(NDLS-JAT)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>NEW DELHI -JAMMU TAWI(NDLS-JAT)</p>
                  <Button>Search train</Button>
                </div>

              </Col>
            </Row>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  )
}
