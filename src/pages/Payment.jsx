import { Button, Checkbox, Col, Input, Row, Select, Steps } from 'antd'
import React from 'react'
import { FaClock, FaHome, FaTrain } from 'react-icons/fa'

export default function PaymentPage() {
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
                  <img className='block' style={{ width: 500 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" />
                  <p>Thời hạn thanh toán: 30s</p>
                </div>
              </div>
              <div>
                <p>Lưu ý:</p>
                <ul>
                  <li>Quý khách vui lòng thanh toán trong thời gian giao dịch.</li>
                  <li>Quá thời gian trên, vé giữ chỗ của Quý khách sẽ tự động hủy.</li>
                  <li> Vé trẻ em từ 1 tuổi sẽ được tính là 01 vé.</li>
                  <li>Quý khách có mặt trước 10 phút giờ tàu chạy để làm thủ tục xuất bến.</li>
                  <li>Ghế ngồi tự do.</li>
                  <li>Vé không hoàn, không đổi - Mọi thắc mắc cần hỗ trợ xin vui lòng liên hệ tổng đài: 1900.63.68.30</li>
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
