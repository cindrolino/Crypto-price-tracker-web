import React, {useState} from "react";
import './Sidebar.css'
import Icon, {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined  
} from '@ant-design/icons'
import { Button, Menu } from "antd";

const items = [
    {
        key : '1',
        icon : <PieChartOutlined></PieChartOutlined>,
        label : 'Dashboard'
    },
    {
        key:'2',
        icon:<ContainerOutlined/>,
        label : 'Discover'
    },
    {
        key:'3',
        icon:<AppstoreOutlined></AppstoreOutlined>,
        label:'Docs'
    }
]

const Sidebar = () => {
    const [collapsed, setColapsed] = useState(true);
    const toggleCollapsed = () =>{
        setColapsed(!collapsed);
    };

    return (
        <div className = "sidebar" style={{width:150}}>
            <Button 
            type="primary"
            onClick={toggleCollapsed}
            style={{marginBottom: 16}}
            >{collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}</Button>
            <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed = {collapsed}
            items = {items}
            ></Menu>
        </div>
    );
};
export default Sidebar;