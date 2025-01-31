
import {  Layout, Menu } from 'antd';
import DropDown from '../components/ui/DropDown';

const { Header} = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));




export default function NavBar() {
    return (
        <Layout >
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' , color: 'white' , marginRight: '1rem' }} >
                    Not Box BD
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
                 <DropDown/>
            </Header>
        </Layout>
    )
}
