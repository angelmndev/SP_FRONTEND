import React, { useState, useEffect } from 'react'
import { Descriptions, Select, Card, Col, Row, Button, Spin } from 'antd';
import { Tag } from 'antd'
import { Divider, Tabs } from 'antd'

import NuevoOrdenTrabajo from '../../components/ordenTrabajo/NuevoOrdenTrabajo';
import FiltroOrdenTrabajo from '../../components/ordenTrabajo/FiltroOrdenTrabajo';

//Api
import { ListarMaquinas } from '../../services/maquinas/MaquinasApi';
import { ListarTipoMantenimiento } from '../../services/tipoMantenimiento/TipoMantenimiento';
import { ListarMantPreventivoFiltro } from '../../services/mantenimientoPreventivo/MPreventivoApi';
import { ObtenerNumeroOrdenApi } from '../../services/ordenTrabajo/OrdenTrabajoApi';

const OrdenTrabajoContainer = () => {
    const { Option } = Select;
    const { TabPane } = Tabs;

    const [visible, setVisible] = useState({ value: false })

    const [idUsuario, setIdUsuario] = useState(0);

    const [controlHoras, setControlHoras] = useState([]);

    const [fecha, setFecha] = useState([]);
    const [idMaquinaFK, setIdMaquinaFK] = useState([]);
    const [idTMantenimiento, setIdTMantenimiento] = useState([]);


    const [maquinas, setMaquinas] = useState([]);
    const [tipoMantenimiento, setTipoMantenimiento] = useState([]);
    const [listMantPreventivo, setListMantPreventivo] = useState([]);

    const [estadoTab, setEstadoTab] = useState(false);

    //Listar maquinas
    const listarMaquinas = async () => {
        const data = await ListarMaquinas();
        if (data) {
            setMaquinas(data);
        }
    }

    //Listar tipo de mantenimiento
    const listarTipoMantenimiento = async () => {
        const data = await ListarTipoMantenimiento();
        if (data) {
            setTipoMantenimiento(data);
        }
    }

    useEffect(() => {
        listarMaquinas();
        listarTipoMantenimiento();
        obtenerDtos();
        filtrarDatos();
    }, [])

    const setEditModalUsuario = (id) => {
        setVisible({
            value: true
        });

        setIdUsuario(id)
    };


    //Change fecha 
    const changeFecha = (value) => {
        setFecha(value)
    }

    //change maquinas
    const changeMaquina = (value) => {
        setIdMaquinaFK(value)
    }

    //change tipo mantenimineto
    const changeMantenimiento = (value) => {
        console.log(value);
        setIdTMantenimiento(value)

    }

    const [numeroOrden, setNumeroOrden] = useState(0);


    const obtenerDtos = async () => {
        const data = await ObtenerNumeroOrdenApi();
        setNumeroOrden(data);
    }

 
    const filtrarDatos = async () => {
        const dataFiltro = [{ idMaquinaFK: idMaquinaFK, mpFecha: fecha, idTipoMantenimientoFK: idTMantenimiento }];
        const data = await ListarMantPreventivoFiltro(dataFiltro)
        if (data) {
            setListMantPreventivo(data);
        }
    }

    return (
        <>
            {/* component description */}
            <Descriptions title="Control de horas" >
                <Descriptions.Item >
                    Bienvenido a la sección de control de horas.
            </Descriptions.Item>
            </Descriptions>
            <Divider />
            {/* component description */}
            <Row>
                <Col md={24}>
                    <Tabs type="card" defaultActiveKey="1">
                        <TabPane  className="custom-tab"  tab="Orden de trabajo" key="1">
                            <Card>
                                <Row justify="center" gutter={[16, 8]}>

                                    <Col xs={22} md={4}>

                                        <Select
                                            placeholder="Buscar por fecha"
                                            style={{ width: '100%' }}
                                            onChange={changeFecha}
                                        >
                                            {/*Esta valor es estatico, carga la fecha segun si aproximacion 
                                            de control de horas a hora de referencia.. hoy > 8 < 24 .....mañana>24 and < 48
                                             */}
                                            <Option key='1' value='1'>Hoy</Option>
                                            <Option key='2' value='3'>Mañana</Option>
                                            <Option key='3' value='3'>Pasadomañana</Option>

                                        </Select>
                                    </Col>
                                    <Col xs={22} md={4}>

                                        <Select
                                            placeholder="Buscar por maquina"
                                            style={{ width: '100%' }}
                                            onChange={changeMaquina}
                                        >
                                            {maquinas.map((item) => (
                                                <Option key={item.idMaquina} value={item.idMaquina}>{item.maqNombre}</Option>
                                            ))}
                                        </Select>
                                    </Col>

                                    <Col xs={22} md={4}>

                                        <Select
                                            placeholder="Buscar por tipo de mantenimiento"
                                            style={{ width: '100%' }}
                                            onChange={changeMantenimiento}
                                        >
                                            {tipoMantenimiento.map((item) => (
                                                <Option key={item.idTipoMantenimiento} value={item.idTipoMantenimiento}>{item.tmNombre}</Option>
                                            ))}
                                        </Select>
                                    </Col>
                                    <Col xs={22} md={4}>

                                        <Button onClick={filtrarDatos} type="primary" style={{ border: "#00DE6F", color: "white", background: "#00DE6F", width: "80%" }} htmlType="submit">
                                            <p style={{ fontWeight: "bold" }}>Buscar</p>
                                        </Button>
                                    </Col>

                                </Row>

                            </Card>
                            <FiltroOrdenTrabajo listMantPreventivo={listMantPreventivo} />
                            <Row align='middle'>
                                <Col xs={22}>
                                    {
                                        listMantPreventivo.length ?
                                        <Button onClick={() => setEstadoTab(true)} type="primary" style={{ border: "#00DE6F", color: "white", background: "#00DE6F"}} htmlType="submit">
                                        <p style={{ fontWeight: "bold" }}>Generar orden de trabajo</p>
                                        </Button>
                                            : ''
                                    }

                                </Col>
                            </Row>
                        </TabPane>
                        {

                            estadoTab ?
                                <TabPane  tab="Registrar orde de trabajo" key="2">
                                    <NuevoOrdenTrabajo listMantPreventivo={listMantPreventivo} numeroOrden={numeroOrden} />
                                </TabPane> : ''
                        }

                    </Tabs>

                </Col>
            </Row>
        </>
    )
}

export default OrdenTrabajoContainer