import { Button, Checkbox, Col, Input, Row, Select, Steps } from 'antd'
import React from 'react'
import { FaClock, FaHome, FaPrint, FaTrain } from 'react-icons/fa'

export default function TicketPage() {
  return (
    <div className='bg-gray-100 h-full min-h-full'>
      <div style={{ maxWidth: 1280 }} className="mx-auto py-8">
        <Steps
          progressDot
          current={2}
          items={[
            {
              title: 'Information',
            },
            {
              title: 'Payment',
            },
            {
              title: 'Result',
            },

          ]}
        />
        <div className='my-4 p-4 rounded shadow bg-white'>
          <div>
            <h2 className='text-xl font-bold text-center'>Your ticket</h2>
          </div>
          <div>
            <h3 className='text-center'><span>Thank for using our service. Have a good trip!</span></h3>
            <div className='flex flex-col items-center justify-center'>
              <img className='block' style={{ width: 500 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" />
              <div>
                <Button shape="round" ><FaPrint className='inline-block text-blue-500 mr-2' fontSize={20}/> Click here to print ticket</Button>
              </div>
            </div>
          </div>
          <div>
            <p>Attention:</p>
            <ul>
              <li>Please show your ticket to the ticket inspector before boarding</li>
              <li>Your ticket will be send to your email</li>
              <li>Please contact us as soon as possible if you have any problem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
