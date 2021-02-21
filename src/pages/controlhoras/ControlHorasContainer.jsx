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
    const [idMaquinaFK,setIdMaquinaFK] = useState();
    const [fechaInicio,setFechaInicio] = useState();
    const [fechaFinal,setFechaFinal] = useState();

    //
    const [reset,setRest] = useState(false);

   const listarMaquinas = async() => {
       const data = await ListarMaquinas();
       setMaquinas(data);
      
   }

    const listarControlHoras = async()=>{
        const data = await ListarControlHoras();
        setControlHoras(data);
        setRest(false);
    }
   


    //Maquinas
    const changeMaquinas = (value) => {
        setIdMaquinaFK(value);
    }


    //fecha inicio y fecha fin
    const changenFecha = (dates, dateStrings) => {
      //  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        setFechaInicio({
            ...fechaInicio,
            fechaInicio: dateStrings[0],            
        })

        setFechaFinal({
            fechaFinal: dateStrings[1]
        })
    }


    useEffect(()=>{
        listarControlHoras();
        listarMaquinas();
    },[])


    const filtrarControlHoras = async () => {
        const data = await ListarControlHorasPorFecha(fechaInicio, fechaFinal, idMaquinaFK);       
        setControlHoras(data);    
        setRest(true);    
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
                                            
                                            style={{ marginBottom: '1em', marginRight: '1em' }}
                                        onChange={changenFecha} />                                                                                   
                                    </Col>
                                  
                                    <Col xs={22} md={4}>
                                        {
                                            reset?
                                            <Button onClick={listarControlHoras} type="primary" style={{ border: "#00DE6F", color: "white", background: "#00DE6F", width: "80%" }} htmlType="submit">
                                            <p style={{ fontWeight: "bold" }}>Mostrar todo</p>
                                            </Button>:
                                            <Button onClick={filtrarControlHoras} type="primary" style={{ border: "#00DE6F", color: "white", background: "#00DE6F", width: "80%" }} htmlType="submit">
                                            <p style={{ fontWeight: "bold" }}>Buscar</p>
                                            </Button>
                                        }                                                                                

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