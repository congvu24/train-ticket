import { useQuery } from '@tanstack/react-query'
import { Row, Col, Button, Collapse, Checkbox, Divider, Radio } from 'antd'
import { LoadingOutlined } from "@ant-design/icons"
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import { apis } from '../api'
import SearchBar from '../components/SearchBar'
import _ from "lodash"
import moment from 'moment'

export default function Listpage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, data } = useQuery(["trips"], () => apis.trips.retrieve(`populate=deep&filters[startStation]p=[stationCode][$eq]=${searchParams.get("start")}&filters[endStation]p=[stationCode][$eq]=${searchParams.get("end")}`))

  return (
    <div>
      <SearchBar />
      <div className='bg-gray-200'>
        <div style={{ maxWidth: 1280 }} className="mx-auto">
          <Row>
            <Col span={6}>
              <div className='p-4'>
                <div className='bg-gray-100 rounded mb-4'>
                  <div className='p-2 flex items-center justify-between'>
                    <span>Filter by</span>
                    <Button type="link">Reset all</Button>
                  </div>
                  <div className='p-2 bg-white'>
                    <Collapse defaultActiveKey={["1"]}>
                      <Collapse.Panel header="Departure time" key="1">
                        <div >
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="1"><div className='flex  text-sm items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="2"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="3"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="4"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                        </div>
                      </Collapse.Panel>
                    </Collapse>
                  </div>
                </div>
                <div className='bg-gray-100 rounded mb-4'>
                  <div className='p-2 flex items-center justify-between'>
                    <span>Filter by</span>
                    <Button type="link">Reset all</Button>
                  </div>
                  <div className='p-2 bg-white'>
                    <Collapse defaultActiveKey={["1"]}>
                      <Collapse.Panel header="Departure time" key="1">
                        <div >
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="1"><div className='flex  text-sm items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="2"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="3"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="4"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                        </div>
                      </Collapse.Panel>
                    </Collapse>
                  </div>
                </div>
                <div className='bg-gray-100 rounded mb-4'>
                  <div className='p-2 flex items-center justify-between'>
                    <span>Filter by</span>
                    <Button type="link">Reset all</Button>
                  </div>
                  <div className='p-2 bg-white'>
                    <Collapse defaultActiveKey={["1"]}>
                      <Collapse.Panel header="Departure time" key="1">
                        <div >
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="1"><div className='flex  text-sm items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="2"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="3"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                          <div className='w-full mb-2'>
                            <Checkbox className='w-full' name="hello" value="4"><div className='flex text-sm  items-center justify-between w-full'><span className='inline-block mr-6'>Early morning</span> <span className='text-gray-400'>12am - 6am</span></div></Checkbox>
                          </div>
                        </div>
                      </Collapse.Panel>
                    </Collapse>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={18}>
              <div className='bg-white p-4 my-4 rounded  '>
                <div className='flex items-center'>
                  <h2 className='flex items-center text-xl'><span>Delhi All Stations</span> <FaArrowRight className='mx-2' /> <span>(NDLS)HowrahJn(HWH)</span></h2>
                  <Divider type='vertical' />
                  <h2 className='text-xl'>14 Nov 2022</h2>
                </div>
                <div className='mt-4'>
                  <div>
                    <p className='mb-2 text-sm font-semibold text-gray-500'>Sort by:</p>
                    <Radio.Group>
                      <Radio.Button value="large">Large</Radio.Button>
                      <Radio.Button value="default">Default</Radio.Button>
                      <Radio.Button value="small">Small</Radio.Button>
                      <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
                <div className='mt-4'>
                  {data && data?.data.map(item => {
                    console.log(item)

                    const timeDiff = moment.duration(moment(_.get(item, "attributes.endDate", "NULL")).diff(_.get(item, "attributes.startDate", "NULL")))
                    var hours = (timeDiff.asHours()).toFixed(0);
                    var minutes = (timeDiff.asMinutes()) % 60;

                    const chairs = _.get(item, "attributes.train.data.attributes.Chair", [])

                    return (
                      <div className='rounded-md shadow-md overflow-hidden mb-4'>
                        <div className='p-2 px-4 bg-blue-100'>
                          <h3 className='flex items-center mb-0'><span>{_.get(item, "attributes.startStation.data.attributes.stationCode", "NULL")}</span> <FaArrowRight className='mx-2' /> <span>{_.get(item, "attributes.endStation.data.attributes.stationCode", "NULL")}</span></h3>
                        </div>
                        <div className='p-4'>
                          <div className='border-b border-gray-200 flex pb-4 '>
                            <div className='mr-2'>
                              <p className='text-lg font-bold mb-2'>{_.get(item, "attributes.tripCode", "TRIP_CODE")}</p>
                              <p className='p-1 mb-0 rounded bg-blue-100 border border-blue-300 w-fit font-semibold'>{_.get(item, "attributes.train.data.attributes.name")}</p>
                            </div>
                            <div className='flex-1 flex items-center justify-around'>
                              <div>
                                <p className='text-lg font-bold mb-2'>{moment(_.get(item, "attributes.startDate", "NULL")).format("LT")}</p>
                                <p className='text-xs font-semibold text-gray-400 mb-1'>{_.get(item, "attributes.startStation.data.attributes.name", "NULL")}</p>
                                <p className='text-xs font-semibold text-gray-400 mb-1'>{moment(_.get(item, "attributes.startDate", "NULL")).format("ll")}</p>
                              </div>
                              <div className='flex flex-col items-center justify-center'>
                                <p className='mb-0'>{hours}h : {minutes}min</p>
                                <Divider className='m-2' style={{ margin: 0 }} />
                                <Button type="link" ><span className='text-xs'>View Route</span></Button>
                              </div>
                              <div>
                                <p className='text-lg font-bold mb-2'>{moment(_.get(item, "attributes.endDate", "NULL")).format("LT")}</p>
                                <p className='text-xs font-semibold text-gray-400 mb-1'>{_.get(item, "attributes.endStation.data.attributes.name", "NULL")}</p>
                                <p className='text-xs font-semibold text-gray-400 mb-1'>{moment(_.get(item, "attributes.endDate", "NULL")).format("ll")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='px-4 py-0'>
                          <p className='mb-2'>Seat available</p>
                          <div className='flex items-center py-2'>
                            {chairs.map(chair => (
                              <div className='bg-orange-200 mr-2 shadow p-2 border border-dotted rounded flex flex-col items-center'>
                                <p className='mb-2 font-bold'>{_.get(chair, "chair_class.data.attributes.name", 0)}</p>
                                <p className='mb-2 text-xs font-semibold'>{_.get(chair, "price") || _.get(chair, "chair_class.data.attributes.price")} VND</p>
                                <p className='mb-2 text-xs text-gray-500'>12/{_.get(chair, "quantity", 0)} free</p>
                                <Button type="primary" shape='round'>Book now</Button>
                              </div>
                            ))}

                          </div>
                        </div>
                      </div>
                    )
                  })}
                  {!data && <LoadingOutlined />}

                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
