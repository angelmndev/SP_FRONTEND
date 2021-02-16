import React, { useState, useEffect } from 'react'
import { Descriptions, Row, Col } from 'antd'
import { Tag } from 'antd'
import { Divider, Tabs } from 'antd'

import IngresarRegistroHoras from '../../components/controlhoras/IngresarRegistroHoras';
import ListaRegistroHoras from '../../components/controlhoras/ListaRegistroHoras';
import { ListarControlHoras} from '../../services/controlHoras/ControlHorasApi';


const ControlHorasContainer = () => {

    const { TabPane } = Tabs;

    const [visible, setVisible] = useState({ value: false })

    const [idUsuario, setIdUsuario] = useState(0);

    const [controlHoras,setControlHoras] = useState([]);

    

    const listarControlHoras = async()=>{
        const data = await ListarControlHoras();
        setControlHoras(data);
    }

    useEffect(()=>{
        listarControlHoras();
    },[])

    const setEditModalUsuario = (id) => {
        setVisible({
            value: true
        });

        setIdUsuario(id)
    };

    console.log("Container");
    console.log(controlHoras);
    return (
        <>
            {/* component description */}
            <Descriptions title="Control de horas" >
                <Descriptions.Item >
                    Bienvenido a la sección usuarios.
            </Descriptions.Item>
                <Descriptions.Item >
                    <p style={{ marginRight: '1em' }}> Aqui podras hacer las siguientes operaciones:</p>
                    <br />
                    <Tag color="success">Crear usuarios</Tag>
                    <Tag color="processing">actualizar usuarios</Tag>
                    <Tag color="error">Eliminar usuarios</Tag>

                </Descriptions.Item>
            </Descriptions>
            <Divider />
            {/* component description */}
            <Row>
                <Col md={24}>
                    <Tabs type="card" defaultActiveKey="1">
                        <TabPane tab="Registro de horas" key="1">
                            <ListaRegistroHoras controlHoras={controlHoras}/>
                        </TabPane>  
                        <TabPane tab="Registrar hora" key="2">
                            <IngresarRegistroHoras />
                        </TabPane>

                    </Tabs>

                </Col>
            </Row>
        </>
    )
}

export default ControlHorasContainer