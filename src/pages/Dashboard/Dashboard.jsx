import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import Navbar from '../../components/dashboard/Navbar';
import { Route, useRouteMatch, Redirect } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css';
import { Layout } from 'antd'

import styles from '../../styles/dashboard/dashboardStyles'
import '../../styles/dashboard/dashboard.css'
import '../../styles/dashboard/sidebar.css'
import UsuarioContainer from '../usuario/UsuarioContainer';
import ControlHorasContainer from '../controlhoras/ControlHorasContainer';

export default function Preferences() {
  let { path } = useRouteMatch();
  const { Content } = Layout;
  return (
    
     <Layout style={styles.layout}>
            {/* header */}
      <Navbar />
            <Layout>
                {/* mi sidebar */}
                <Sidebar />
                <Layout style={styles.layoutContent}>
                    <Content className="site-layout-background" style={styles.content}>
                        {/* routes */}
                       <Route exact path={`${path}/usuarios`} component={UsuarioContainer} />
                      <Route exact path={`${path}/controlHoras`} component={ControlHorasContainer} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>

  );
}

