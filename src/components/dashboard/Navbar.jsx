import React from 'react';
import { Fragment } from 'react';

import { Layout, Menu, Avatar, Dropdown } from 'antd'


const Navbar = () => {
    const { Header } = Layout;
    return (
        <Header style={{ background:"#212F3D"}} >
            <div>
                <h2 >MP</h2>
            </div>            
        </Header>
    )
}

export default Navbar;