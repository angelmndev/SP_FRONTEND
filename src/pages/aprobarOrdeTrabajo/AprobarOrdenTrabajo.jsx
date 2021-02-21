import React, { useState, useEffect } from 'react'
import { Divider, Input, Tabs } from 'antd'
import {Form, Descriptions, DatePicker, Select, Card, Col, Row, Button, Spin } from 'antd';

import AprobarOrdenTrabajo from '../../components/aprobarOrdenTrabajo/AprobarOrdenTrabajo';

//Api
import { ListarOrdenTrabajoDetallePorNumero } from '../../services/ordenTrabajoDetalle/OrdenTrabajoDetalleApi';


const AprobarOrdenTrabajoContainer = () => {
    const { Option } = Select;
    const { TabPane } = Tabs;
    const { RangePicker } = DatePicker;

    const [listaOrdenTrabajo, setListaOrdenTrabajo] = useState([]);

    const [numeroOrden,setNumeroOrden] = useState();
    //Listamos el registro para aprobar y agregar comentario si es necesario
    const listarOrdenTrabajo = async () => {
        const data = await ListarOrdenTrabajoDetallePorNumero(1);
        setListaOrdenTrabajo(data);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const { getFieldValue } = this.props.form;
        //let drivers = getFieldValue("drivers");
        console.log(getFieldValue);
    }


    useEffect(() => {
        listarOrdenTrabajo();
    }, [])

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
                                   
                                    <Col xs={22} md={4}>                                        
                                            <Input  onChange={handleChange} name="numeroOrden" placeholder="Buscar por numero" />                                                                              
                                    </Col>

                                    <Col xs={22} md={4}>
                                        <Button type="primary" style={{ border: "#00DE6F", color: "white", background: "#00DE6F", width: "80%" }} htmlType="submit">
                                            <p style={{ fontWeight: "bold" }}>Buscar</p>
                                        </Button>
                                    </Col>
                                </Row>

                            </Card>
                            <AprobarOrdenTrabajo listaOrdenTrabajo={listaOrdenTrabajo} />
                        </TabPane>
                    </Tabs>

                </Col>
            </Row>
        </>
    )
}

export default AprobarOrdenTrabajoContainer;
