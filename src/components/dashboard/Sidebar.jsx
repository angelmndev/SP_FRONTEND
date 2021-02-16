import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import { AppstoreOutlined, GoldOutlined, DeploymentUnitOutlined, TeamOutlined, CodepenOutlined, PartitionOutlined, EnvironmentOutlined, DollarOutlined } from '@ant-design/icons';

const Sidebar = () => {

    const { SubMenu } = Menu;
    const { Sider } = Layout;
    const { url } = useRouteMatch();

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"

                style={{ height: '100%', borderRight: 0 }}
            >

                <Menu.Item key="main1" icon={<EnvironmentOutlined />}>
                    <Link to={`${url}/sedes`}>Sedes</Link>
                </Menu.Item>

                <Menu.Item key="sub4-1" icon={<PartitionOutlined />}>
                    <Link to={`${url}/areaCultivo`}>Areas cultivos</Link>
                </Menu.Item>
                <Menu.Item key="sub8" icon={<DollarOutlined />}>
                    <Link to={`${url}/maquinas`}>Maquinas</Link>
                </Menu.Item>
                <Menu.Item key="sub8" icon={<DollarOutlined />}>
                    <Link to={`${url}/componentes`}>Componetes</Link>
                </Menu.Item>
                <SubMenu key="sub5" icon={<TeamOutlined />} title="Usuarios">
                    <Menu.Item key="sub5-1">
                        <Link to={`${url}/usuarios`}>Usuario</Link>
                    </Menu.Item>
                    <Menu.Item key="sub5-2"><Link to={`${url}/roles`}></Link>Roles</Menu.Item>
                </SubMenu>
                <Menu.Item key="sub4-2" icon={<DeploymentUnitOutlined />}>
                    <Link to={`${url}/controlHoras`}>Control de horas</Link>
                </Menu.Item>
                <Menu.Item key="sub4-2" icon={<DeploymentUnitOutlined />}>
                    <Link to={`${url}/mantenimientoPrevente`}>Mantenimiento preventivo</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar