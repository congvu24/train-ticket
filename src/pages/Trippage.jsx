import { Button, Checkbox, Col, Input, message, Row, Select, Steps } from 'antd'
import React, { useState } from 'react'
import { FaClock, FaHome, FaTrain } from 'react-icons/fa'
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apis } from "../api";
import { LoadingOutlined } from "@ant-design/icons";
import _ from "lodash"
import moment from "moment";
import Traveler from '../components/Traveler';
import { formatCurrency } from '../utils';

const RESERVATION_FARE = 10000;
const TAX_PERCENT = 0;

export default function Trippage() {

  // Trip section
  // =============

  const [searchParams, setSearchParams] = useSearchParams();

  const tripCode = parseInt(searchParams.get("tripCode"));
  const chairId = parseInt(searchParams.get("chair"));

  const { isLoading, data } = useQuery(["trip", tripCode], () => apis.trips.getById(tripCode))

  const trip = data?.data;
  const chair = _.get(trip, "attributes.train.data.attributes.Chair", []).find(chairItem => {
    const id = _.get(chairItem, "chair_class.data.id", null)
    return id === chairId
  });
  const chairPrice = _.get(chair, "price") || _.get(chair, "chair_class.data.attributes.price");

  const timeDiff = moment.duration(moment(_.get(trip, "attributes.endDate", "NULL")).diff(_.get(trip, "attributes.startDate", "NULL")))
  var hours = (timeDiff.asHours()).toFixed(0);
  var minutes = (timeDiff.asMinutes()) % 60;


  // Reservation section
  // =============


  const [traveler, setTraveler] = useState([])
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptTerm, setAccept] = useState(false);

  const numberTraveler = traveler.length;

  const getTotal = (quantity = 0, fareEach = 0, taxPercent = 0, addition = 0) => {
    if (quantity == 0) return 0;

    const subTotal = quantity * fareEach;
    return subTotal + subTotal * taxPercent + addition;
  }


  const handleSubmit = () => {

    if (!acceptTerm) {
      message.info("You have to accept the terms before making payment.")
    }
    else if (!phone || !email) {
      message.info("Your booking information is missing.")
    }
    else if(numberTraveler == 0){
      message.info("Please input traveler information.")
    }
    else {
      console.log({
        email,
        phone,
        traveler,
        chairId,
        tripCode
      })
    }
  }

  // Render
  // =============

  if (isLoading) return <LoadingOutlined />

  return (
    <div className='bg-gray-100 h-full min-h-full'>
      <div style={{ maxWidth: 1280 }} className="mx-auto py-8">
        <Steps
          progressDot
          current={0}
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
                <h2 className='text-xl font-bold'>Train Information</h2>
              </div>
              <div>
                <h3><span>{_.get(trip, 'attributes.startStation.data.attributes.name', null)} - {_.get(trip, 'attributes.endStation.data.attributes.name')}</span> | <span>{moment(_.get(trip, "attributes.startDate")).format(("ll"))}</span></h3>
                <div className='flex items-center'>
                  <div className='mr-24'>
                    <p className='text-blue-500 text-xl font-bold'>Train express</p>
                    <p className='mb-2'><span className='font-semibold'>Train no:</span> {_.get(trip, 'attributes.train.data.attributes.trainCode', null)}</p>
                    <p className='mb-2'><span className='font-semibold'>Class:</span> {_.get(chair, "chair_class.data.attributes.name")}</p>
                    <p className='mb-2'><span className='font-semibold'>Chair price:</span> {_.get(chair, "price") || _.get(chair, "chair_class.data.attributes.price")} VND</p>
                  </div>
                  <div className='flex-1 px-4 pl-24'>
                    <Steps
                      items={[
                        {
                          title: moment(_.get(trip, "attributes.startDate", "NULL")).format("LT"),
                          status: 'wait',
                          icon: <FaTrain />,
                        },
                        {
                          subTitle: `${hours}h ${minutes}m`,
                          status: 'wait',
                          icon: <FaClock />,
                        },
                        {
                          title: moment(_.get(trip, "attributes.endDate", "NULL")).format("LT"),
                          status: 'wait',
                          icon: <FaHome />,
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='my-4 p-4 rounded shadow bg-white'>
              <div>
                <h2 className='text-xl font-bold'>Contact Information</h2>
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='font-semibold mb-1'>Enter your email:</p>
                  <Input placeholder='Email' size='large'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  <p className='text-xs text-gray-500'>Your email id will be used only for sending Train related communication.</p>
                </div>
                <div>
                  <p className='font-semibold mb-1'>Enter your phone:</p>
                  <Input placeholder='Phone number' size='large'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
                  <p className='text-xs text-gray-500'>Your Mobile number will be used only for sending Train related communication.</p>
                </div>
              </div>
            </div>
            <Traveler updateList={setTraveler} />
            <div className='my-4 p-4 rounded shadow bg-yellow-100 flex items-center justify-between'>
              <div>
                <p className='font-semibold mb-2'>Travel Advisory for All Passengers</p>
                <p className='text-gray-500 mb-2'>Please check Travel Advisory by relevant authorities.</p>
              </div>
              <div>
                <Button type='default' shape='round' color='transparent'>View Guidelines</Button>
              </div>
            </div>
            <Checkbox value={acceptTerm} onChange={(e) => setAccept(e.target.value)}>I understand and agree to the rules of this fare, and the Terms & Conditions, Cancellation and  Refund Policy</Checkbox>
            <div className='flex justify-center my-4'>
              <Button onClick={handleSubmit} size='large' type='primary'>Continue Booking</Button>
            </div>
          </Col>
          <Col span={6}>
            <div className='my-4 p-4 rounded shadow bg-white'>
              <div>
                <h2 className='text-xl font-semibold'>Price summarize</h2>
              </div>
              <div>
                <p className='flex items-center justify-between'><span className='font-bold'>Single Passenger Fare</span><span>{formatCurrency(chairPrice)}</span></p>
                <p className='flex items-center justify-between'><span className='font-bold'>Tax</span><span>{TAX_PERCENT}%</span></p>
                <p className='flex items-center justify-between'><span className='font-bold'>Reservation Charge</span><span>{formatCurrency(RESERVATION_FARE)}</span></p>
                <p className='flex items-center justify-between'><span className='font-bold'>Total Charge</span><span>{formatCurrency(getTotal(numberTraveler, chairPrice, TAX_PERCENT, RESERVATION_FARE))}</span></p>
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
