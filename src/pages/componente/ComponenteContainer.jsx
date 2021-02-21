import React, { useState, useEffect, Fragment } from 'react'
import { Descriptions, Select, Card, Col, Row, Button, Spin } from 'antd';
import { Divider, Tabs } from 'antd'

import RegistroComponente from '../../components/componente/RegistroComponente';
import NuevoComponente from '../../components/componente/NuevoComponente';

//api
import { ListarComponentes } from '../../services/componente/ComponenteApi';

const ComponenteContainer = () => {
    const { TabPane } = Tabs;
    const [listaComponente, setListaComponente] = useState([]);

    const listarComponente = async () => {
        const data = await ListarComponentes();
        setListaComponente(data);
    }

    useEffect(() => {
        listarComponente();
    }, []);

    return (

        <Fragment>
            {/* component description */}
            <Descriptions title="Nuestros componentes" >
                <Descriptions.Item >
                    Bienvenido a la sección componentes.
            </Descriptions.Item>
            </Descriptions>
            <Divider />
            {/* component description */}
            <Row>
                <Col md={24}>
                    <Tabs type="card" defaultActiveKey="1">                       
                            <TabPane tab="componente registrados" key="1">
                                <RegistroComponente listaComponente={listaComponente} />
                            </TabPane>
                            <TabPane tab="Registrar componente" key="2">
                                <NuevoComponente  listarComponente={listarComponente} />
                            </TabPane>                     
                    </Tabs>

                </Col>
            </Row>
        </Fragment>
    )
}

export default ComponenteContainer