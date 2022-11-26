import { Button, Checkbox, Col, Input, Row, Select, Steps } from 'antd'
import React from 'react'
import { FaClock, FaHome, FaTrain } from 'react-icons/fa'
import {useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {apis} from "../api";
import {LoadingOutlined} from "@ant-design/icons";
import _ from "lodash"
import moment from "moment";

export default function Trippage() {

  const [searchParams, setSearchParams] = useSearchParams();

  const tripCode = searchParams.get("tripCode");
  const chairId = parseInt((searchParams.get("chair")));

  const {isLoading, data} = useQuery(["trip", tripCode  ],()=> apis.trips.getById(tripCode))

  const trip = data?.data;
  const chair = _.get(trip, "attributes.train.data.attributes.Chair", []).find(chairItem=> {
    const id = _.get(chairItem, "chair_class.data.id", null)
    return id === chairId
  });

  console.log(chair)

  const timeDiff = moment.duration(moment(_.get(trip, "attributes.endDate", "NULL")).diff(_.get(trip, "attributes.startDate", "NULL")))
  var hours = (timeDiff.asHours()).toFixed(0);
  var minutes = (timeDiff.asMinutes()) % 60;


  if(isLoading) return <LoadingOutlined />

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
                <h3><span>{_.get(trip, 'attributes.startStation.data.attributes.name', null)} - {_.get(trip, 'attributes.endStation.data.attributes.name')}</span> | <span>{moment(_.get(trip,"attributes.startDate")).format(("ll"))}</span></h3>
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
                  <Input placeholder='Email' size='large' />
                  <p className='text-xs text-gray-500'>Your email id will be used only for sending Train related communication.</p>
                </div>
                <div>
                  <p className='font-semibold mb-1'>Enter your phone:</p>
                  <Input placeholder='Phone number' size='large' />
                  <p className='text-xs text-gray-500'>Your Mobile number will be used only for sending Train related communication.</p>
                </div>
              </div>
            </div>
            <div className='my-4 p-4 rounded shadow bg-white'>
              <div>
                <h2 className='text-xl font-bold'>Traveler Information</h2>
              </div>
              <div className='flex items-center justify-between'>
                <div className='mr-1 flex-1'>
                  <Select placeholder="Gender" style={{ width: "100%" }}>
                    <Select.Option>Male</Select.Option>
                    <Select.Option>Female</Select.Option>
                  </Select>
                </div>
                <div className='mr-1 flex-1' >
                  <Input placeholder='Full name' style={{ width: "100%" }} />
                </div>
                <div className='mr-1 w-24' >
                  <Input type="number" placeholder='Age' style={{ width: "100%" }} />
                </div>
                <div className='mr-1 flex-1'>
                  <Input placeholder='ID number' style={{ width: "100%" }} />
                </div>
                <div className='flex-1'>
                  <Select placeholder="Nationality" style={{ width: "100%" }}>
                    <Select.Option>Vietnamese</Select.Option>
                    <Select.Option>Foreigner</Select.Option>
                  </Select>
                </div>
              </div>
              <div className='flex justify-end'><Button className='ml-auto my-2 block' type='primary'>Add Passenger</Button></div>
            </div>
            <div className='my-4 p-4 rounded shadow bg-yellow-100 flex items-center justify-between'>
              <div>
                <p className='font-semibold mb-2'>Travel Advisory for All Passengers</p>
                <p className='text-gray-500 mb-2'>Please check Travel Advisory by relevant authorities.</p>
              </div>
              <div>
                <Button type='default' shape='round' color='transparent'>View Guidelines</Button>
              </div>
            </div>
            <Checkbox>I understand and agree to the rules of this fare, and the Terms & Conditions, Cancellation and  Refund Policy</Checkbox>
            <div className='flex justify-center my-4'>
              <Button size='large' type='primary'>Continue Booking</Button>
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
