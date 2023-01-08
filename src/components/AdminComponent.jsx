import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps, Table } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { apis } from '../api';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['Ticket', 'User', 'News'].map((key) => ({
    key,
    label: key,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const columns = [
    {
        title: 'Customer Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Train',
        dataIndex: 'train_name',
        key: 'train_name',
    },
    {
        title: 'Departure station',
        dataIndex: 'journey_departure',
        key: 'journey_departure',
    },
    { title: "Destination station", dataIndex: "journey_arrive", key: "journey_arrive" },
    { title: "Departure time", dataIndex: "departure_time", key: "departure_time", render: (value) => new Date(value).toLocaleDateString() + " " + new Date(value).toLocaleTimeString() },
    { title: "Arrive time", dataIndex: "arrive_time", key: "arrive_time", render: (value) => new Date(value).toLocaleDateString() + " " + new Date(value).toLocaleTimeString() },
    { title: "Number of tickets", dataIndex: "number_of_tickets", key: "number_of_tickets", render: (key, data) => data.travelers?.length },

];

const AdminComponent: React.FC = () => {

    const user = JSON.parse(localStorage.getItem('user') || '{}')

    const { data, isLoading } = useQuery(['all-tickets'], () => apis.tickets.getAll());

    const items: MenuProps['items'] = [

        {
            label: 'Logout',
            key: '3',
            onClick: () => {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                window.location.reload();
            }
        },
    ];


    return (
        <Layout>
            <Header className="header">
                <div className='flex items-center justify-between'>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Ticket']} items={items1} />
                    <Dropdown menu={{ items }}>
                        <Avatar>{user?.firstname}</Avatar>
                    </Dropdown>
                </div>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: "blue" }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['Placed Tickets']}
                        defaultOpenKeys={['Ticket']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={[
                            {
                                key: `Ticket`,
                                icon: React.createElement(LaptopOutlined),
                                label: `Ticket`,

                                children: [{
                                    key: "Placed Tickets",
                                    label: `Placed Tickets`,
                                }],
                            }
                        ]}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>Tickets</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: "white",
                        }}
                    >
                        <Table loading={isLoading} dataSource={data?.data} columns={columns} />
                    </Content>
                </Layout>
            </Layout>
        </Layout >
    );
};

export default AdminComponent;