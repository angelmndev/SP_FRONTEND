import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Descriptions, Row, Col } from 'antd'
import { Divider, Tabs } from 'antd'

import NuevoMPreventivo from '../../components/mPreventivo/NuevoMPreventivo';
import ListaMPreventivo from '../../components/mPreventivo/ListaMPreventivo';

// API
import { ListarComponentes } from '../../services/componente/ComponenteApi';
import { ListarMaquinas } from '../../services/maquinas/MaquinasApi';
import { ListarSistemas } from '../../services/sistemas/SistemasApi';
import { ListarTipoMantenimiento } from '../../services/tipoMantenimiento/TipoMantenimiento';
import { ListarMantPreventivo} from '../../services/mantenimientoPreventivo/MPreventivoApi';

const MPreventivo = () => {
    const { TabPane } = Tabs;

    //hooks
    const [componentes,setComponentes] = useState([]);
    const [maquinas, setMaquinas] = useState([]);
    const [sistemas,setSistemas] = useState([]);
    const [tipoMantenimiento,setTimpoMantenimiento] = useState([]);
    const [mantPreventivo,setMantPreventivo] = useState([]);

    //Listar componenentes
    const listarComponentes = async ()=>{
        const data = await ListarComponentes();
        console.log("container",data);
        setComponentes(data);
    }

    //Listar maquinas
    const listarMaquinas = async() => {
        const data = await ListarMaquinas();
        setMaquinas(data);
    }

    //Listar sistemas
    const listarSistemas = async() => {
        const data = await ListarSistemas();
        setSistemas(data);
    }

    //Listar tipo mantenimeinto
    const listarTipoMantenimeinto = async() => {
        const data = await ListarTipoMantenimiento();
        setTimpoMantenimiento(data);
    }

    //Listar matenimiento preventivo
    const listarManPreventivo = async() => {
        const data = await ListarMantPreventivo();        
        setMantPreventivo(data);
    }

    //useEffect
    useEffect(()=>{
        listarComponentes();
        listarMaquinas();
        listarSistemas();
        listarTipoMantenimeinto();
        listarManPreventivo();
    },[])

    return(
        <Fragment>
            {/* component description */}
            <Descriptions title="Mantenimiento preventivo" >
                <Descriptions.Item >
                    Bienvenido al modulo de matenimiento preventivo
             </Descriptions.Item>
                
            </Descriptions>
            <Divider />
            {/* component description */}
            <Row>
                <Col md={24}>
                    <Tabs type="card" defaultActiveKey="1">
                        <TabPane tab="Registro preventivo" key="1">
                            <ListaMPreventivo mantPreventivo={mantPreventivo}/>
                        </TabPane>
                        <TabPane tab="Registrar mantenimiento preventivo" key="2">
                            <NuevoMPreventivo componentes={componentes} maquinas={maquinas} sistemas={sistemas} tipoMantenimiento={tipoMantenimiento} />
                        </TabPane>

                    </Tabs>

                </Col>
            </Row>           
        </Fragment>
    )
}

export default MPreventivo;