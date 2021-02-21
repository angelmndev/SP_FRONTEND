import React,{Fragment, useEffect, useState} from 'react';
import { Divider, Tabs } from 'antd'
import { Descriptions, DatePicker, Select, Card, Col, Row, Button, Spin } from 'antd';

//Api
import {ListarMaquinas} from '../../services/maquinas/MaquinasApi'
//componentes
import RegistroMaquina from '../../components/maquinas/RegistroMaquina';
import NuevaMaquina from '../../components/maquinas/NuevaMaquina';

const MaquinasContainer = () => {
    const { TabPane } = Tabs;

    const [listaMaquinas,setListaMaquinas] = useState([]);


    const listarMaquinas = async() => {
        const data = await ListarMaquinas();
        setListaMaquinas(data);
    }


    useEffect(()=>{
        listarMaquinas();
    },[])

    return(
        <Fragment>
            {/* component description */}
            <Descriptions title="Maquinas" >
                <Descriptions.Item >
                    Bienvenido a la sección de maquinas.
            </Descriptions.Item>

            </Descriptions>
            <Divider />
            {/* component description */}
            <Row>
                <Col md={24}>
                    <Tabs type="card" defaultActiveKey="1">
                        <TabPane tab="Listar maquinas" key="1">                         
                            <RegistroMaquina listaMaquinas={listaMaquinas}/>
                        </TabPane>
                        <TabPane tab="Registrar maquinas" key="2">
                            <NuevaMaquina listarMaquinas={listarMaquinas}/>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </Fragment>
    )
}

export default MaquinasContainer;