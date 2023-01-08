import { Button, Checkbox, Col, Input, Row, Select, Steps, notification } from 'antd'
import React, { useState } from 'react'
import { FaClock, FaHome, FaTrain } from 'react-icons/fa'
import { useNavigate, useParams, useRoutes } from 'react-router-dom'
import QRCode from 'qrcode'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { apis } from '../api'

export default function PaymentPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  if (!orderId) navigate("/")

  const { isLoading, data, error } = useQuery(["order", orderId], () => apis.tickets.retrieve(orderId), { refetchInterval: 1000 })

  const [qrCode, setQrCode] = useState(null)

  useEffect(() => {
    QRCode.toDataURL(`http://146.190.98.185:8080/v1/tickets/${orderId}/payment-ticket`)
      .then(url => {
        setQrCode(url)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (data && data.data.state === "success") {
      notification.success({ message: "Payment received!. Issuing ticket now..." })
      setTimeout(() => {
        navigate(`/ticket/${data.data.id}`, { replace: true })
      }, 500)
    }
  }, [data])


  if (!qrCode) return <div>Loading...</div>

  return (
    <div className='bg-gray-100 h-full min-h-full'>
      <div style={{ maxWidth: 1280 }} className="mx-auto py-8">
        <Steps
          progressDot
          current={1}
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
        <Row gutter={16}>
          <Col span={18}>
            <div className='my-4 p-4 rounded shadow bg-white'>
              <div>
                <h2 className='text-xl font-bold'>Payment</h2>
              </div>
              <div>
                <h3><span>Payment with E-wallet MoMo</span></h3>
                <div className='flex flex-col items-center justify-center'>
                  <img className='block' style={{ width: 500 }} src={qrCode} />
                  {/* <p>Thời hạn thanh toán: 30s</p> */}
                </div>
              </div>
              <div>
                <p>Attentions:</p>
                <ul>
                  <li>Please complete the payment in time</li>
                  <li>If the time is out, your order will be cancel</li>
                  <li>Do not leave this page until getting the payment result</li>
                  <li>If there is any issue with the payment, please contact: 1900.63.68.30</li>
                </ul>
              </div>
            </div>

          </Col>
          <Col span={6}>
            <div className='my-4 p-4 rounded shadow bg-white'>
              <div>
                <h2 className='text-xl font-semibold'>Price summarize</h2>
              </div>
              <div>
                <p className='flex items-center justify-between'><span className='font-bold'>Single Passenger Fare</span><span>1.500.00VND</span></p>
                <p className='flex items-center justify-between'><span className='font-bold'>Tax</span><span>0VND</span></p>
                <p className='flex items-center justify-between'><span className='font-bold'>Reservation Charge</span><span>150.000VND</span></p>
                <p className='flex items-center justify-between'><span className='font-bold'>Total Charge</span><span>2.000.00VND</span></p>
              </div>
            </div>
            <div className='my-4 p-4 rounded shadow bg-white'>
              <div>
                <h2 className='text-xl font-semibold'>Voucher</h2>
              </div>
              <div className='flex items-center justify-between'>
                <Input placeholder='Enter your voucher code' />
                <Button type="primary" className='ml-2'>Apply</Button>
              </div>
            </div>

          </Col>
        </Row>
      </div>
    </div>
  )
}
