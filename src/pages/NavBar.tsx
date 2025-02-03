import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import DropDown from '../components/ui/DropDown';
import { TMenuItem } from '../types';
import { useState } from 'react';
import NavTop from '../components/ui/NavTop';
import logo from '../assets/logo/Red_And_Black_Personalized_Stationery_Logo__1_-removebg-preview.png';

const { Header } = Layout;

const items: TMenuItem[] = [
    { key: '1', label: 'Home', path: '/' },
    { key: '2', label: 'All Product', path: '/all-product' },
    // { key: '3', label: 'Contact', path: '/contact' },
];

export default function NavBar() {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState('1');

    const handleMenuClick = (info: { key: string }) => {
        const selectedItem = items.find(menuItem => menuItem.key === info.key);
        if (selectedItem) {
            navigate(selectedItem.path);
        }
        setActiveKey(info.key);
    };
   
    return (
        <Layout>
            <NavTop/>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1890ff', marginRight: '1rem' }}>
                    <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
                </div>
                <Menu
                className='container '
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['1']}
                    items={items.map(item => ({
                        ...item,
                        label: item.label,
                        style: item.key === activeKey ? { color: 'white' , backgroundColor: '#001529' } : {}, // Apply style conditionally
                    }))}
                    onClick={handleMenuClick}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'center', // Center the menu items
                        display: 'flex',
                        alignItems: 'center'
                        
                    }}
                />
                <DropDown />
            </Header>
        </Layout>
    );
}