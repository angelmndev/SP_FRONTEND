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
import MPreventivo from '../mPreventivo/MPreventivo';
import OrdenTrabajoContainer from '../ordenTrabajo/OrdenTrabajoContainer';
import IndicadoresContainer from '../indicador/IndicadoresContainer';
import ComponenteContainer from '../componente/ComponenteContainer';
import MaquinasContainer from '../maquinas/MaquinasContainer';
import finalizarOrden from '../aprobarOrdeTrabajo/AprobarOrdenTrabajo';

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
            <Route exact path={`${path}/mantenimiento`} component={MPreventivo} />
            <Route exact path={`${path}/ordenTrabajo`} component={OrdenTrabajoContainer} />
            <Route exact path={`${path}/indicadores`} component={IndicadoresContainer} />
            <Route exact path={`${path}/finalizarOrden`} component={finalizarOrden} />            
            <Route exact path={`${path}/componentes`} component={ComponenteContainer} />
            <Route exact path={`${path}/maquinas`} component={MaquinasContainer} />
          </Content>
        </Layout>
      </Layout>
    </Layout>

  );
}

