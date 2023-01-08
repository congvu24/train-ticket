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
                  <img src="https://cdn-icons-png.flaticon.com/512/3989/3989569.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>Convenience</p>
                    <p className='text-xs text-gray-500'>
                      You can book train tickets from the comfort of your own home or office, without having to visit a train station or travel agent.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://cdn-icons-png.flaticon.com/512/5129/5129353.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>Ease of use</p>
                    <p className='text-xs text-gray-500'>
                      Our website is designed to be easy to use, with a simple and straightforward booking process.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://cdn-icons-png.flaticon.com/512/2854/2854320.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>Competitive prices</p>
                    <p className='text-xs text-gray-500'>
                      We offer competitive prices on train tickets and often have special offers and discounts available.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://cdn-icons-png.flaticon.com/512/475/475438.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>Wide selection</p>
                    <p className='text-xs text-gray-500'>
                      We have a wide selection of trains and routes available, so you can find the best option for your travel needs.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://cdn-icons-png.flaticon.com/512/2500/2500132.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>Flexibility</p>
                    <p className='text-xs text-gray-500'>
                      You can book tickets in advance or last minute, depending on your travel plans and cancel anytime before the trip
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} className="my-2">
                <div className='flex items-center justify-between shadow-md p-4'>
                  <img src="https://cdn-icons-png.flaticon.com/512/2706/2706950.png" alt="logo" className="w-12 block mr-4" width={50} />
                  <div>
                    <p className='font-semibold'>Customer support</p>
                    <p className='text-xs text-gray-500'>
                      We have a dedicated customer support team available to assist you with any questions or issues you may have.
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
                  <p className='mb-0'>Ha Noi - Ho Chi Minh(HN-HCM)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>Ho Chi Minh - Ha Noi(HCM-HN)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>Ho Chi Minh - Hoi An(HCM-HA)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>Ha Noi - Da Nang(HN-DN)</p>
                  <Button>Search train</Button>
                </div>
              </Col>
              <Col span={12}>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>Vinh - Nghe An(VI-NA)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>Quan Binh - Hoi An(QB-HA)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>Ha Noi - SaPa(HN-SP)</p>
                  <Button>Search train</Button>
                </div>
                <div className='mb-2 flex items-center justify-between p-4 border-b border-dashed'>
                  <p className='mb-0'>Da Lat - Ho Chi Minh(DL-HCM)</p>
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
