import React from 'react';

import { Layout } from 'antd'


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