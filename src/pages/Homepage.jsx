import { Button, Col, DatePicker, Layout, Row, Select } from 'antd'
import React from 'react'
import { FaTrain } from 'react-icons/fa'
import FAQ from '../components/FAQ'


export default function Homepage() {
  return (
    <div>
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
