import { useMutation } from '@tanstack/react-query';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import React from 'react'
import { apis } from '../api';

export default function LoginForm({
    onLogin
}) {
    const mutateLogin = useMutation((data: any) => apis.admin.login(data), {
        onSuccess: (response) => {
            //   navigate(`/payment/${response.data}`)
            console.log(response)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))

            onLogin(true)
        },
        onError: (error) => {
            console.log(error)
            notification.error({ message: "Login failed, try again" })
        }
    });

    const onFinish = (values: any) => {
        console.log('Success:', values);
        mutateLogin.mutate({ email: values.email, password: values.password })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='w-1/3 mx-auto px-4 py-8 bg-pink-100 rounded shadow'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!', type: "email" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div >
    )
}
