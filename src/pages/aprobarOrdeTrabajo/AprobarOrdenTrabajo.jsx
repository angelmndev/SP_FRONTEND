import React, { useState, useEffect } from 'react'
import { Divider, Input, Tabs } from 'antd'
import { Form, Descriptions, DatePicker, Select, Card, Col, Row, Button, Spin } from 'antd';

import AprobarOrdenTrabajo from '../../components/aprobarOrdenTrabajo/AprobarOrdenTrabajo';

//Api
import { ListarOrdenTrabajoDetallePorNumero } from '../../services/ordenTrabajoDetalle/OrdenTrabajoDetalleApi';


const AprobarOrdenTrabajoContainer = () => {
    const { TabPane } = Tabs;
    const { form } = Form.useForm();

    const [listaOrdenTrabajo, setListaOrdenTrabajo] = useState([]);
    const [numeroOrden, setNumeroOrden] = useState();


    // const buscarOrdenTrabajo = async (value) => {
    //     const { numeroOrden } = value;
    //     const data = await ListarOrdenTrabajoDetallePorNumero(numeroOrden);
    //     setListaOrdenTrabajo(data)

    //     //setNumeroOrden(numeroOrden);
    //     //   filtrar();
    //}

    const handleChange = (e) => {        
        const numero = e.target.value; 
        setNumeroOrden(numero)
    }

    const ListarOrdenTrabajo = async () => {
        const data = await ListarOrdenTrabajoDetallePorNumero(numeroOrden);
        setListaOrdenTrabajo(data);
    } 
    // const filtrar = async () => {        
    //     const data = await ListarOrdenTrabajoDetallePorNumero(numeroOrden);
    //     console.log(data);
    //     if(data){
    //         setListaOrdenTrabajo(data);
    //     }
    // }

    useEffect(()=>{
        ListarOrdenTrabajo();
    },[])


    return (
        <>
            {/* component description */}
            <Descriptions title="Aprobar orden de trabajo" >
                <Descriptions.Item >
                    Bienvenido a la sección de control de horas.
            </Descriptions.Item>

            </Descriptions>
            <Divider />
            {/* component description */}
            <Row>
                <Col md={24}>
                    <Tabs type="card" defaultActiveKey="1">
                        <TabPane tab="Lista de orden de trabajo" key="1">
                            <Card>
                                <Row justify="end" gutter={[16, 8]}>
                                    <Col md={6} >
                                        <Input onChange={handleChange} placeholder={"numero de orden"} />
                                    </Col>

                                    <Col md={3}>
                                        <Button onClick={ListarOrdenTrabajo} type="primary" style={{ border: "#00DE6F", color: "white", background: "#00DE6F", width: "80%" }} htmlType="submit">
                                            <p style={{ fontWeight: "bold" }}>Buscar</p>
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>
                            <AprobarOrdenTrabajo ListarOrdenTrabajo={ListarOrdenTrabajo} listaOrdenTrabajo={listaOrdenTrabajo} />
                        </TabPane>
                    </Tabs>

                </Col>
            </Row>
        </>
    )
}

export default AprobarOrdenTrabajoContainer;
