import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const DropDown = () => {
    const navigate = useNavigate(); // Correctly placed inside the functional component

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key === '1') {
            // Handle Logout
            console.log('Logout clicked');
        } else if (e.key === '2') {
            // Navigate to Account Settings page
            navigate('/dashboard'); // Use navigate to change the route
        }
    };

    const items: MenuProps['items'] = [
        {
            label: 'Logout',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'Account Settings',
            key: '2',
            icon: <UserOutlined />,
        },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Space>
            <Dropdown menu={menuProps}>
                <Button>
                    <UserOutlined />
                </Button>
            </Dropdown>
        </Space>
    );
};

export default DropDown;