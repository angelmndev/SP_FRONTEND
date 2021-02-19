import React, { useState, useEffect } from 'react'
import { Divider, Tabs } from 'antd'
import { Descriptions, DatePicker, Select, Card, Col, Row, Button, Spin } from 'antd';

import IngresarRegistroHoras from '../../components/controlhoras/IngresarRegistroHoras';
import ListaRegistroHoras from '../../components/controlhoras/ListaRegistroHoras';

//Api
import { ListarControlHoras, ListarControlHorasPorFecha} from '../../services/controlHoras/ControlHorasApi';
import {ListarMaquinas} from '../../services/maquinas/MaquinasApi';

const ControlHorasContainer = () => {
    const { Option } = Select;
    const { TabPane } = Tabs;
    const { RangePicker } = DatePicker;

    const [controlHoras,setControlHoras] = useState([]);
    const [maquinas,setMaquinas] = useState([]);

    //filtro
    const [idMaquinaFK,setIdMaquinaFk] = useState([]);
    const [fecha,setFecha] = useState([]);

   const listarMaquinas = async() => {
       const data = await ListarMaquinas();
       setMaquinas(data);
   }

    const listarControlHoras = async()=>{
        const data = await ListarControlHoras();
        setControlHoras(data);
    }
   


    //Maquinas
    const changeMaquinas = (value) => {
        setIdMaquinaFk(value);
    }

    //fecha inicio y fecha fin
    const changenFecha = (value) => {
        setFecha(value);
    }


    useEffect(()=>{
        listarControlHoras();
        listarMaquinas();
    },[])


    const filtrarControlHoras = async () => {
        const data = await ListarControlHorasPorFecha(fecha[0], fecha[1], idMaquinaFK);
        if (data) {
            setMaquinas(data);
        }
    }
    console.log("Container");
    console.log(controlHoras);
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
                        <TabPane tab="Registro de horas" key="1">
                            <Card>
                                <Row justify="center" gutter={[16, 8]}>

                                    <Col xs={22} md={4}>

                                        <Select
                                            placeholder="Selecciona maquina"
                                            style={{ width: '100%' }}       
                                            onChange={changeMaquinas}                                     
                                        >
                                            {maquinas.map((item) => (
                                                <Option key={item.idMaquina} value={item.idMaquina}>{item.maqNombre}</Option>
                                            ))}                                            
                                        </Select>
                                    </Col>
                                    <Col xs={22} md={4}>
                                        <RangePicker
                                            placeholder={["Fecha inicio", "Fecha fin"]}
                                            format="DD-MM-YYYY"
                                            style={{ marginBottom: '1em', marginRight: '1em' }}
                                        onChange={changenFecha} />                                                                                   
                                    </Col>
                                  
                                    <Col xs={22} md={4}>
                                        <Button onClick={filtrarControlHoras} type="primary" style={{ border: "#00DE6F", color: "white", background: "#00DE6F", width: "80%" }} htmlType="submit">
                                            <p style={{ fontWeight: "bold" }}>Buscar</p>
                                        </Button>
                                    </Col>

                                </Row>

                            </Card>
                            <ListaRegistroHoras controlHoras={controlHoras}/>
                        </TabPane>  
                        <TabPane tab="Registrar hora" key="2">
                            <IngresarRegistroHoras listarControlHoras={listarControlHoras} />
                        </TabPane>

                    </Tabs>

                </Col>
            </Row>
        </>
    )
}

export default ControlHorasContainer