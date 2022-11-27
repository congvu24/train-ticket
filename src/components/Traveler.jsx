import { Select, Input, Button } from 'antd'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';


export default function Traveler({ updateList }) {

    const [gender, setGender] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [national, setNational] = useState("");
    const [id, setId] = useState("")

    const [list, setList] = useState([]);

    const onReset = () => {
        setAge("")
        setName("")
        setGender("")
        setId("")
        setNational("")
    }

    const addPerson = (data: any) => {
        const newList = list;
        newList.push(data);
        setList([...newList]);

        updateList([...newList]);
        onReset();
    }

    const onRemove = (index) => {
        const newList = list;
        newList.splice(index, 1)

        setList([...newList])
    }

    return (
        <div className='my-4 p-4 rounded shadow bg-white'>
            <div>
                <h2 className='text-xl font-bold'>Traveler Information</h2>
            </div>
            {list.map((item, index) => (
                <div className='flex items-center justify-between mb-4'>
                    <div className='mr-1 flex-1'>
                        <p>{String(item.gender).toUpperCase()}</p>
                    </div>
                    <div className='mr-1 flex-1'>
                        <p>{item.name}</p>
                    </div>
                    <div className='mr-1 w-24'>
                        <p>{item.age}</p>
                    </div>
                    <div className='mr-1 flex-1'>
                        <p>{item.id}</p>
                    </div>
                    <div className='flex-1'>
                        <p>{String(item.national).toUpperCase()}</p>
                    </div>
                    <div className='w-20'>
                        <Button danger onClick={() => onRemove(index)}><FaTimes /></Button>
                    </div>
                </div>
            ))}

            <div className='flex items-center justify-between'>
                <div className='mr-1 flex-1'>
                    <Select placeholder="Gender" style={{ width: "100%" }}
                        onChange={(e) => setGender(e)}
                        value={gender}
                    >
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </div>
                <div className='mr-1 flex-1'>
                    <Input onChange={(e) => setName(e.target.value)} value={name} placeholder='Full name' style={{ width: "100%" }} />
                </div>
                <div className='mr-1 w-24'>
                    <Input onChange={(e) => setAge(e.target.value)} value={age} type="number" placeholder='Age' style={{ width: "100%" }} />
                </div>
                <div className='mr-1 flex-1'>
                    <Input onChange={(e) => setId(e.target.value)} value={id} placeholder='ID number' style={{ width: "100%" }} />
                </div>
                <div className='flex-1'>
                    <Select placeholder="Nationality" style={{ width: "100%" }}
                        onChange={(e) => setNational(e)}
                        value={national}
                    >
                        <Select.Option value="vietnamese">Vietnamese</Select.Option>
                        <Select.Option value="foreigner">Foreigner</Select.Option>
                    </Select>
                </div>
            </div>
            <div className='flex justify-end'><Button onClick={() => {
                addPerson({
                    name,
                    age,
                    national,
                    gender,
                    id
                })
            }} className='ml-auto my-2 block' type='primary'>Add Passenger</Button></div>
        </div>
    )
}
